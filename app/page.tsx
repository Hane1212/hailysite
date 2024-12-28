import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import { SOCIAL_LINKS } from "@/utils/constants";
import AboutPage from "./about/page";
import SchedulePage from "./schedule/page";

export default function Home() {
  return (
    <React.Fragment>
      <HeroBanner />
      <SchedulePage />
      <AboutPage />
    </React.Fragment>
  );

  // return (
  // <section id="hero-section">

  // <div className="hero-bg-container">
  // <Navbar/>

  //       <div className="testimonial-wrapper">
  //         <p>Có hai con dê đi vào gừng  </p>
  //         <p>Xây đập cùng Hải Ly 🦫</p>
  //       </div>
  //       <div className="social-icon-wrapper">
  //         {SOCIAL_LINKS.map((item, index) => (
  //           <React.Fragment key={`keyNoteCham${index}`}>
  //             <div className="social-links flex flex-wrap gap-4">
  //               {item.links.map((linkItem, linkIndex) => (
  //                 <a
  //                   key={`keySocialItem${linkIndex}`}
  //                   href={linkItem.link}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   <img src={linkItem.icon} alt={linkItem.title} />
  //                 </a>
  //               ))}
  //             </div>
  //           </React.Fragment>
  //         ))}
  //       </div>

  //     <img
  //       src="/images/background.png" 
  //       id="sub-bg"
  //       alt="Background Image"
  //     />
  //   </div>
  // </section>
  
  // );
}
