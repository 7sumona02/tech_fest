import React from "react";
import ReactIcon from "./ReactIcon";
import FigmaIcon from "./FigmaIcon";
import CoinIcon from "./CoinIcon";
import CodeIcon from "./CodeIcon";
import { FaLightbulb } from "react-icons/fa";

const Themes = () => {
  return (
    <div className="bg-black h-screen w-full flex justify-center items-center md:pt-32 pt-[1700px]">
      <div>
        <h1 className="text-6xl font-bold text-center text-zinc-200 -translate-y-44">
          Events
        </h1>
        <div className="-translate-y-44 flex flex-col justify-center items-center">
          <div className="w-72 h-2 bg-violet-600 rounded-full -rotate-2"></div>
          <div className="w-72 h-2 bg-pink-600 rounded-full -rotate-2"></div>
        </div>
        <div className="container -translate-y-12 mb-10">
          <div data-text="DSA Competition" className="glass -rotate-12">
            <svg
              viewBox="0 0 640 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
            </svg>
          </div>
          <div data-text="Web Development" className="glass rotate-6">
            <ReactIcon />
          </div>
          <div data-text="Tech Charades" className="glass -rotate-12">
            <CodeIcon />
          </div>
          <div data-text="Design Jam" className="glass rotate-[25]">
            <FigmaIcon />
          </div>
          <div data-text="Treasure Hunt" className="glass -rotate-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path d="m9 6.882-7-3.5v13.236l7 3.5 6-3 7 3.5V7.382l-7-3.5-6 3zM15 15l-6 3V9l6-3v9z"></path></svg>
          </div>
        </div>
        <div className="container -translate-y-12">
          <div data-text="Debug-a-Thon" className="glass rotate-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path d="M6.787 7h10.426c-.108-.158-.201-.331-.318-.481l2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812c-.118.151-.21.323-.319.481zM5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58.204.052.411.085.618.118V16h2v5.914a6.23 6.23 0 0 0 .618-.118 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9H5.756z"></path></svg>
          </div>
          <div data-text="Tech Quiz" className="glass -rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 24 24" ><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path></svg>
          </div>
          <div data-text="Blind Code" className="glass rotate-[25]">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path></svg>
          </div>
          <div data-text="And many more" className="glass -rotate-6">
            <FaLightbulb />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
