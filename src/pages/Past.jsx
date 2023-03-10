import React from "react";
import Features from "../components/Features";
import Pictures from "../components/Pictures";
import { FaUsers, FaUniversity, FaEnvelopeOpenText } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { IconContext } from "react-icons";

import pic1 from "/assets/images/acehack/1.jpg";
import pic2 from "/assets/images/acehack/2.jpg";
import pic3 from "/assets/images/acehack/3.jpeg";
import pic4 from "/assets/images/acehack/4.jpeg";
import pic5 from "/assets/images/acehack/5.jpeg";


const Past = () => {
  return (
    <IconContext.Provider
      value={{style: { fontSize: "8rem", position: "relative", color:"black" }}}
    >
    <div id="past" className="pt-24 text-white z-20 relative bg-indigo-900/30 backdrop-blur-lg w-full py-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10 flex-wrap">
          <span className="grad-text">AceHack 1.0</span> Highlights!
        </h1>
        <div className="flex sm:flex-row justify-evenly w-full p-10 flex-col">
          <Features icon={<FaEnvelopeOpenText/>} count="1000" text="Applications" color="blue" />
          <Features icon={<FaUsers/>} count="300" text="Participants" color="emerald" />
          <Features icon={<FaUniversity/>} count="10" text="Universities" color="blue"/>
          <Features icon={<IoRocket/>} count="80" text="Projects" color="emerald"/>
        </div>
        <h1 className="grad-text text-5xl font-bold py-6">Glimpses</h1>
        
        {/* <div className="relative w-full flex gap-6 justify-start overflow-x-auto py-10 scrollbar-hide snap-x"> */}
        
        <div className="flex md:flex-row flex-col justify-evenly w-[80%] py-4 my-4">
          <Pictures imgSrc={pic1}/>
          {/* <Pictures imgSrc={"/assets/images/acehack/6.jpeg"}/> */}
        </div>
        <div className="flex md:flex-row flex-col justify-evenly w-[80%] py-4 my-4">
          <Pictures imgSrc={pic3}/>
          <Pictures imgSrc={pic4}/>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly w-[80%] py-4 my-4">
          <Pictures imgSrc={pic5}/>
          <Pictures imgSrc={pic2}/>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Past;
