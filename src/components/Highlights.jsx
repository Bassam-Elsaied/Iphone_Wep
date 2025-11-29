import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { rightImg, watchImg } from "../utils";

import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="h-full w-screen overflow-hidden bg-zinc common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col md:flex-row justify-between mb-12 w-full">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
