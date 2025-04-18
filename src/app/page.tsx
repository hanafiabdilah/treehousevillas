import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Testimoni from "./components/Testimoi";
import Villa from "./components/Villa";

export default function Home() {
  return (
    <main>
      <Hero />
      <Villa />
      <Testimoni />
      <Contact />
    </main>
  );
}
