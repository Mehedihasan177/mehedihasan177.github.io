import AgentCursors from "@/components/build/AgentCursors";
import { BuildProvider } from "@/components/build/BuildContext";
// Bottom "agents / layers / Live" toolbar — hidden for now. Uncomment this and <BuildToolbar /> below to bring it back.
// import BuildToolbar from "@/components/build/BuildToolbar";
import SmoothScroll from "@/components/SmoothScroll";
import About from "@/components/sections/About";
import AppPlayground from "@/components/sections/AppPlayground";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Showcase from "@/components/sections/Showcase";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <BuildProvider>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Work />
        <AppPlayground />
        <Showcase />
        <About />
        <Journey />
        <Contact />
      </main>
      <AgentCursors />
      {/* <BuildToolbar /> */}
    </BuildProvider>
  );
}
