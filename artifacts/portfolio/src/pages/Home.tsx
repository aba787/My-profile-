import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyMe } from "@/components/sections/WhyMe";
import { Positioning } from "@/components/sections/Positioning";
import { Projects } from "@/components/sections/Projects";
import { Quote } from "@/components/sections/Quote";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TrustBar />
      <Services />
      <WhyMe />
      <Positioning />
      <Projects />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
