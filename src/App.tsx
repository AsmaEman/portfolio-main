import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import AboutMe from "./components/AboutMe/AboutMe";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MyProjects from "./components/MyProjects/MyProjects";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Cursor from "./components/UI/Cursor";
import UpButton from "./components/UI/UpButton";
import CursorProvider from "./contexts/CursorProvider";

function App() {
  return (
    <CursorProvider>
      <div className="grid min-h-screen cursor-default grid-rows-[auto_1fr_auto] lg:cursor-none">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <Experience />
          <Skills />
          <MyProjects />
          <Clients />
          <AboutMe />
          <Projects />
          <Bootcamps />
          <Testimonials />
          <Contact />
          <UpButton />
        </main>
        <Footer />
      </div>
      <Cursor />
      <Analytics />
    </CursorProvider>
  );
}

export default App;
