import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

function Hero() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 1.5 });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center   bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title pt-5">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            src={isMobile}
            type="video/mp4"
            autoPlay
            muted
            playsInline={true}
            className="pointer-events-none"
          />
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
