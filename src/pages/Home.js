import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact"; // Changed from Contacts to Contact
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;