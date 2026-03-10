import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
   <>
   <Hero/>
   <Hero2/>
   <About/>
   </>
  );
}
