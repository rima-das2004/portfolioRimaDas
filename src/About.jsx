import React from "react";
import {Link} from 'react-router-dom'
export default function About(){
    return <>
        <div className="about w-full mx-auto flex flex-wrap border-black overflow-hidden h-auto mt-10 relative pb-10 justify-center" style={{maxWidth:'1280px'}}>
            <div className="a-f flex-1 min-w-[450px]">
             <div className="img w-100 h-100 overflow-hidden flex justify-center relative rounded-4xl z-10">
                    <img src="RimaDas.jpg" className="w-full" alt="" style={{filter:'grayscale(0.2)'}}/>
                </div>
                <div className="imgOverlay absolute top-0 z-0 w-120 h-100 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-4xl rotate-y-33 rotate-z-4 opacity-50"></div>
               
            </div>
            <div className="a-s flex-1 min-w-[320px]  text-white flex-wrap">
                <h4 className="font-bold text-2xl">About Me</h4>
                <hr className="w-10" />
                <div className="info mt-4">
                    <h1 className="text-4xl font-bold">Rima Das</h1> <br />
                    <p>I am in <b>4th year</b>, trying to seek internship opportunity</p>
                    <p>College: <b>Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex</b> <br />
                    CGPA: <b> 8.3</b> <br />
                    I have done my schooling from <b>Kanchrapara Indian Girls' High School</b><br />
                    10th Marks: <b>89%</b> <br />
                    12th Marks: <b>89.4%</b> <br />
                   </p>
                    <hr />
                   <p>
                    I am experienced with <b>Full Stack Web Development</b> and have enthusiasm in <b>Data Science and Generative AI </b>
                    </p>
                    <br />
                    <div className="link flex flex-wrap gap-2">
                        <Link className="rounded-md border-2 semibold border-purple-500 px-3 py-2 mr-2 bg-purple-500 transition-all duration-350 ease-linear text-right hover:bg-transparent" href="/project">Visit My Project Section</Link> 
                    <Link className="rounded-md semibold transition-all duration-350 ease-linear border-2 border-purple-500 px-3 py-2 hover:bg-purple-500" href="/contact">Feel free to ask any Queries</Link>
                    </div>
                    


                </div>


            </div>

        </div>
    </>
}