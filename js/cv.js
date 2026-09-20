// CV Page — theme toggle + rendering the CV PDF with PDF.js so it displays
// consistently across browsers instead of relying on each browser's own
// (wildly inconsistent) built-in PDF plugin.
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    syncThemeToggleIcon();
    themeToggleBtn.addEventListener('click', function () {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setTheme(isLight ? 'dark' : 'light');
    });

    initCvViewer();
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    syncThemeToggleIcon();
}

function syncThemeToggleIcon() {
    const icon = document.querySelector('#themeToggleBtn i');
    if (!icon) return;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    icon.className = isLight ? 'ri-moon-line' : 'ri-sun-line';
}

const CV_PDF_PATH = 'assets/Md_Mehedi_Hasan.pdf';

function initCvViewer() {
    const viewer = document.getElementById('cvViewer');
    const loading = document.getElementById('cvLoading');
    if (!viewer) return;

    // PDF.js loads the file via fetch/XHR, which the browser blocks under
    // CORS when the page is opened as a local file:// document (no server).
    // In that case (or if the CDN script failed to load), fall back to the
    // browser's own PDF plugin via an <iframe> — it fetches at the network
    // layer and isn't subject to that restriction.
    if (typeof pdfjsLib === 'undefined') {
        showIframeFallback(viewer, loading);
        return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    let pdfDoc = null;

    pdfjsLib.getDocument(CV_PDF_PATH).promise
        .then(function (doc) {
            pdfDoc = doc;
            if (loading) loading.remove();
            return renderAllPages(viewer, pdfDoc);
        })
        .catch(function (err) {
            console.error('Failed to load CV PDF with PDF.js, falling back to iframe:', err);
            showIframeFallback(viewer, loading);
        });

    // Re-render at the new container width when the viewport is resized,
    // so pages stay crisp instead of just being CSS-scaled.
    let resizeTimer = null;
    window.addEventListener('resize', function () {
        if (!pdfDoc) return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            renderAllPages(viewer, pdfDoc);
        }, 250);
    });
}

function showIframeFallback(viewer, loading) {
    if (loading) loading.remove();
    viewer.querySelectorAll('canvas.cv-page-canvas').forEach(function (c) { c.remove(); });

    const iframe = document.createElement('iframe');
    iframe.className = 'cv-fallback-frame';
    iframe.title = 'Md. Mehedi Hasan CV';
    iframe.src = CV_PDF_PATH;
    viewer.appendChild(iframe);
}

function renderAllPages(viewer, pdfDoc) {
    viewer.querySelectorAll('canvas.cv-page-canvas').forEach(function (c) { c.remove(); });

    const containerWidth = viewer.clientWidth - 48; // minus horizontal padding
    const pagePromises = [];

    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        pagePromises.push(renderPage(viewer, pdfDoc, pageNum, containerWidth));
    }

    return Promise.all(pagePromises);
}

function renderPage(viewer, pdfDoc, pageNum, containerWidth) {
    return pdfDoc.getPage(pageNum).then(function (page) {
        const baseViewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / baseViewport.width;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        canvas.className = 'cv-page-canvas';
        const context = canvas.getContext('2d');

        // Render at device pixel ratio for a crisp result on retina screens.
        const dpr = window.devicePixelRatio || 1;
        canvas.width = viewport.width * dpr;
        canvas.height = viewport.height * dpr;
        canvas.style.width = viewport.width + 'px';
        canvas.style.height = viewport.height + 'px';
        context.scale(dpr, dpr);

        viewer.appendChild(canvas);

        return page.render({ canvasContext: context, viewport: viewport }).promise;
    });
}
