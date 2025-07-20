import React from "react";
import ProjComponent from "./ProjComponent";

export default function Experiences() {
  return (
    <div className="relative w-screen h-auto">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        style={{ height: "100%", minHeight: "100%" }} // allow full height coverage
      >
        <source src="project.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 w-full bg-black/40 backdrop-blur-sm">
        <div className="text-white flex flex-wrap justify-center items-center gap-4 py-20 px-4">
          {/* Dynamically repeated components */}
          <ProjComponent
            urlShow="ac.png"
            desc="Successfully completed Full Stack we development Course in MERN by Apna College"
            title="Full Stack Web Development"
            urlRender="https://www.linkedin.com/posts/rima-das-1a10182a4_mernstack-webdevelopment-apnacollege-activity-7316138748411355137-08iE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElUSAkB5Mhv-JcCGS28QN94xA2VMP_Io-U"
          />
          <ProjComponent
            urlShow="p-bsc.png"
            desc="Python for everybody course,presented by Michigan University in Coursera, is successfully completed"
            title="Python for everybody"
            urlRender="https://www.coursera.org/account/accomplishments/verify/9E5FRFT46V2A"
          />
          <ProjComponent
            urlShow="p-adv.png"
            desc="Successfully completed Python in advace, presented by Meta"
            title="Python in advance level"
            urlRender="https://www.linkedin.com/in/rima-das-1a10182a4/overlay/1747892690810/single-media-viewer/?profileId=ACoAAElUSAkB5Mhv-JcCGS28QN94xA2VMP_Io-U"
          />
          <ProjComponent
            urlShow="iot.png"
            desc="Successfully completed IOT training with having Smart Attendanve System project"
            title="IOT certification"
            urlRender="https://certificate.ardentsoftware.co.in/generate/115704"
          />
          <ProjComponent
            urlShow="p-dj.png"
            desc="Successfully completed Python Django training with having Login System project"
            title="Python-Django"
            urlRender="https://certificate.ardentsoftware.co.in/generate/97925"
          />
        </div>
      </div>
    </div>
  );
}
