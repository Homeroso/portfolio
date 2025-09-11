import CodingProjects from "@/components/coding";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <CodingProjects />
      <Contact />
    </>
  );
}
