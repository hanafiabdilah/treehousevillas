import Contact from "./components/home/Contact";
import CTA from "./components/home/CTA";
import Hero from "./components/home/Hero";
import Testimoni from "./components/home/Testimoni";
import Villa from "./components/home/Villa";

export default function Home() {
  return (
    <main>
      <Hero />
      <Villa />
      <Testimoni />
      <Contact />
      <CTA />
    </main>
  );
}
