import React from "react";
import redCircle from "../Assets/Ellipse 8.svg";
import yellowCircle from "../Assets/Ellipse 9.svg";
import greenCircle from "../Assets/Ellipse 10.svg";
import phone from "../Assets/Union.svg";
import arrowLeft from "../Assets/Arrow.svg";
import arrowRight from "../Assets/Arrow (1).svg";
import search from "../Assets/search-icon.svg";
import sheild from "../Assets/Sheild icon.svg";
import download from "../Assets/Download.svg";
import Newtab from "../Assets/Newtab.svg";
import Pages from "../Assets/Pages.svg";





const Header = () => {
  return (
    <>
      <nav className="border-b-2 h-[48px] w-full bg-[#FFFFFF] px-8 flex justify-between">
        <div className="flex gap-24  items-center pt-4">
          <div className="flex gap-11">
            <section className="flex gap-2 ">
              <img src={redCircle} alt=".." />
              <img src={yellowCircle} alt=".." />
              <img src={greenCircle} alt=".." />
            </section>

            <section className="flex gap-6 ">
              <img src={phone} alt=".." />
              <img src={arrowLeft} alt=".." />
              <img src={arrowRight} alt=".." />
            </section>
          </div>

          <section className="">
            <div className=" flex items-center gap-2 w-[583px] h-[28px] relative">
            <img className="w-4" src={sheild} alt=".." />

              <div className=" absolute  pl-44">
                <img className="w-4" src={search} alt=".." />
              </div>
              <input
                type="text"
                placeholder="Search or enter website name"
                className=" bg-[#F2F2F2] rounded-lg w-full  text-center "
              />
            </div>
          </section>
        </div>
        <section className="flex gap-6 ">
              <img src={download} alt=".." className="w-[16px]"/>
              <img src={Newtab} alt=".." className="w-[16px]" />
              <img src={Pages} alt=".." className="w-[16px]"/>
            </section>
      </nav>
    </>
  );
};

export default Header;
