import React, { useState } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Snapping() {
  gsap.registerPlugin(ScrollTrigger);

  const element_parent_scroll1 = useRef<HTMLDivElement>(null);
  const [width , setWidth] = useState<any>(0);
    useEffect(()=>{
        let sectionstest = gsap.utils.toArray(".section_elementtest");
        setWidth(element_parent_scroll1.current?.offsetWidth);
        gsap.to(sectionstest, {
            xPercent: -100 * (sectionstest.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".element_parenttest",
              scrub: 1,
              pin:".element_parenttest",
              snap: 1 / (sectionstest.length - 1),
              end: `+=${width}`,
              markers: true,
              invalidateOnRefresh: true,

              }
          });
console.log("width====",  element_parent_scroll1.current?.offsetWidth);

    })
    return (
        <div>
            <h1>Salut les gens</h1>
            <section id='intersection_verticat' className='intersection_verticat'>
          <div className="element_parenttest" ref={element_parent_scroll1}>
            <div className="section_elementtest"></div>
            <div className="section_elementtest"></div>
            <div className="section_elementtest"></div>
            <div className="section_elementtest"></div>
            <div className="section_elementtest"></div>
            <div className="section_elementtest"></div>
          </div>
        </section>
        <section id='intersection_aristid'>
          <h2>Section 2</h2>
        </section> 
        </div>
    )
}