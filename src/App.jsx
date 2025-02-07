import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Nav from "./components/Nav";

import "font-awesome/css/font-awesome.min.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const contentRef = useRef(null);

  useEffect(() => {
    const pages = ["/home", "/skills", "/projects", "/about", "/contact"];
    const index = pages.indexOf(location.pathname);
    if (index !== -1) {
      gsap.to(contentRef.current, {
        x: -index * window.innerWidth,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  }, [location.pathname]);

  return (
    <div className="h-screen w-screen flex flex-col text-white" style={{
      background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(/src/assets/images/bg.jpg) no-repeat center",
      backgroundSize: 'cover'
    }}>
      <div className="shrink-0">
        <Header />
      </div>

      <div className="relative w-screen h-full overflow-y-auto overflow-x-hidden">
        <div ref={contentRef} className="flex h-full flex-nowrap">
          <div className="w-screen h-full shrink-0"><Home /></div>
          <div className="w-screen h-full shrink-0"><Skills /></div>
          <div className="w-screen h-full shrink-0"><Projects /></div>
          <div className="w-screen h-full shrink-0"><About /></div>
          <div className="w-screen h-full shrink-0"><Contact /></div>
        </div>
      </div>

      <div className="shrink-0">
        <Nav />
      </div>
    </div>

  );
}
