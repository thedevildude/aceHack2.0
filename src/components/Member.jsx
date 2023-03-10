import React from "react";

const Member = (props) => {
    return (
        <div className="w-full bg-gray-900 group hover:bg-gradient-to-br from-cyan-700/30 to-gray-900 rounded-xl shadow-lg p-12 flex flex-col justify-center items-center z-30">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 group-hover:ring-8 ring-cyan-600"
                src={props.image}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-white font-bold mb-2">{props.name}</p>
              <p className="text-base text-gray-400 font-normal group-hover:animate-fadeIn opacity-0">
                {props.role}
              </p>
            </div>
          </div>
    );
};

export default Member;