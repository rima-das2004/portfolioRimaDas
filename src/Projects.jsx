import React from "react";
import ProjComponent from "./ProjComponent";

export default function Projects() {
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
            urlShow="urban.png"
            desc="This eccomerce website having cart system is developed by using
1.Node.js as backend server
2.Express as framework
3.MongoDb for database
4.Cloudinary for third party storage
5.Basic language:Bootstarp, HTML, CSS & JavaScript
6.For authentication purpose passport npm package is used"
            title="Urbanharvest-SuperMarket Website"
            urlRender="https://urbanharvest-5oc0.onrender.com/product"
          />
          <ProjComponent
            urlShow="at.png"
            desc="Smart Attendance System The Smart Attendance System is an innovative solution designed to automate and streamline the attendance tracking process in educational institutions and workplaces. This system utilizes card swapping technology, which ensures accuracy and efficiency in recording attendance."
            title="Smart Attendance System"
            urlRender="https://github.com/rima-das2004/smart_attendance.git"
          />

          <ProjComponent
            urlShow="cons.png"
            desc="The ConstructionFrontend project is a static web application built using HTML, CSS, and JavaScript, with additional JS libraries for smooth animations and enhanced user experience. It features a clean and responsive design tailored for showcasing construction-related information such as services, projects, and contact details."
            title="Construction Frontend"
            urlRender="https://github.com/rima-das2004/ConstructionFrontend.git "
          />
          
        </div>
      </div>
    </div>
  );
}
