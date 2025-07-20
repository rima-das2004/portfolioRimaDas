import React from "react";
import About from './About'
import { Link } from "react-router-dom";
export default function Home() {
return (
    <>
<div className="relative w-screen h-[66vh] overflow-hidden">
{/* Background Video */}
<video
autoPlay
muted
loop
 playsInline
className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm">
<source src="bg-1.mp4" type="video/mp4" />
 Your browser does not support the video tag.
</video>

{/* Upper Layer */}
<div className="absolute top-0 left-0 w-full h-full bg-transparent bg-opacity-40 z-10 flex justify-center items-center">
{/* Overlay content here */}
    <div className="text text-white text-center">
        <article className="text-slate-200 semibold text-xl">Hi, I am </article>
        <h1 className="text-7xl font-bold mb-4">Rima Das</h1>
        <p className="text-slate-200 semibold">I am currently pursuing Batchelor of Technology Degree in <br />Computer Science & Engineering</p>
       <div className="icons flex gap-[3vw] text-2xl mt-5 justify-center items-center mb-5">
  <a href="https://github.com/rima-das2004" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-github text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"></i>
  </a>
  <a href="https://www.linkedin.com/in/rima-das-1a10182a4/" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-linkedin transition-all duration-350 ease-linear text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"></i>
  </a>
  <a href="mailto:rima983131@gmail.com" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-envelope-o transition-all duration-350 ease-linear text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"></i>
  </a>
  <a href="https://www.facebook.com/rima.das.91294" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-facebook transition-all duration-350 ease-linear text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"></i>
  </a>
  <a href="https://www.instagram.com/mon_shmita/" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-instagram transition-all duration-350 ease-linear text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"></i>
  </a>
</div>
    <a href="/RimaDasCSE.pdf" download={"RimaDas.pdf"} className="rounded-md border-2 semibold border-purple-500 px-3 py-2 mx-2 bg-purple-500 transition-all duration-350 ease-linear hover:bg-transparent">Download CV
    </a>
    <Link to="/contact" className="rounded-md semibold transition-all duration-350 ease-linear border-2 border-purple-500 px-3 py-2 hover:bg-purple-500 ">Contact Me</Link>
    </div>
        
</div>
</div>
 <About></About>
</>
);
}
