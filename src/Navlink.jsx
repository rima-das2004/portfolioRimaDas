import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Navlink(){
    return<>
        <nav className="flex justify-center items-center p-4 bg-transparent text-white absolute z-100 w-screen flex-wrap">
            <div className="first w-2/5">
                <div className="pic rounded-full bg-white p-2 float-left "><p className="font-bold bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 bg-clip-text text-transparent">RD</p></div>
            </div>
        <div className="sec w-3/5">
            <ul className="flex gap-[5vw] font-semibold flex-wrap">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/project">Projects</Link></li>
                <li> <Link to="/experiences">Experience</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
            </ul>

        </div>
            
        </nav>
        
    </>
}