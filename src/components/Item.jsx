import React from "react";

const Item = (props) => {
  return (
    <div className="flex flex-col items-center bg-blue-500/50 rounded-md hover:shadow-lg hover:shadow-blue-600 my-10 p-4 h-60 w-60">
      <img src={props.img} alt="AceHack 1.0" className="scale-75 hover:transition duration-300 ease-in hover:scale-[80%]" />
      <h1 className="text-2xl font-bold py-4 my-4 text-blue-300">{props.text}</h1>
    </div>
  );
};

export default Item;
