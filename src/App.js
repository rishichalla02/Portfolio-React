import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/scroll"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}