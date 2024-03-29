import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Features from "@components/Features";
import Packages from "@components/Packages";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Faqs from "@components/Faqs";
import About from "@components/About";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Okkoma Co. | Web Design and Digital Marketing agency in Sri Lanka
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <html lang="en"></html>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <Projects />
      <Contact />
      <Faqs />
      <About />
      <Footer />
    </div>
  );
}
