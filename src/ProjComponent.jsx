import React from "react"
export default function ProjComponent({urlShow="" ,desc="",title="", urlRender=""}){
    return <>
        <div className="card w-1/4 border-white rounded-xl overflow-hidden">
            <div className="img w-full">
                <a href={urlRender} target="_blank">
                    <img className="w-full h-[12vw]" src={urlShow} alt="" />
                </a>
            </div>
            <div className="description bg-purple-900 p-5">
                <h1 className="text-xl">{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </>
}