import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Category/>
   <About/>
   <Footer/>
   </>
  );
}
