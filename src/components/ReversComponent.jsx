import React, { useState } from "react";
import avatar from "../assets/Ellipse 109.png";
import star from "../assets/Component 32.png";
import verify from "../assets/verify 12.png";
import menu from "../assets/menu 12.png";

export default function ReverseComponent() {
  const [isReversed, setIsReversed] = useState(false);

  const toggleOrder = () => {
    setIsReversed(!isReversed);
  };

  const avatarElement = (
    <div className="relative">
      <img src={avatar} alt="avatar" width={100} height={100} />
      <div className="inline-flex absolute bottom-0 right-0 border-4 border-white rounded-full">
        <div className="flex relative">
          <img src={star} alt="star" width={25} height={25} />
          <span className="absolute -bottom-2 -right-12 text-mg font-black bg-gradient-to-r from-indigo-500 to-cyan-400 text-transparent bg-clip-text rounded-full px-1">
            4881
          </span>
        </div>
      </div>
    </div>
  );

  const textElement = (
    <div className="flex-col mx-7">
      <div className="inline-flex items-center">
        <h1 className="text-2xl font-bold">Anna Effective</h1>
        <img
          className="ml-1"
          src={verify}
          alt="verify icon"
          width={25}
          height={25}
        />
      </div>
      <p className="text-lg">Double your income with me!</p>
    </div>
  );

  const menuElement = (
    <div className="flex justify-center items-center">
      <img src={menu} alt="menu icon" width={40} height={20} />
    </div>
  );

  const elements = isReversed
    ? [menuElement, textElement, avatarElement]
    : [avatarElement, textElement, menuElement];

  return (
    <div className="flex flex-col items-center my-5">
      <div className="flex items-center space-x-7">{elements}</div>
      <button
        onClick={toggleOrder}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Reverse
      </button>
    </div>
  );
}
