import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import NavBarDesktop from "../navBarDesktop";

const BannerHome: React.FC<any> = (props) => {
  return (
    <div
      className={`min-h-[100vh] md:pt-[70px] w-full ${
        props.section ? "bg-[#0a0a0a]" : "bg-[#080808]"
      } `}
    >
      <NavBarDesktop />
      <div className="content-center min-h-[100vh]">
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-12">
            <div className="flex flex-col p-[20px] gap-[36px] md:p-0">
              <h1
                className={`${
                  props.section ? "text-[#ffffff]" : "text-[#fff]"
                } text-[32px] md:text-[52px]`}
              >
                {props.title}
              </h1>
              <p
                className={` ${
                  props.section ? "text-[#cfcfcf]" : "text-[#9C9C9C]"
                } text-[22px] ${
                  props.photoHome ? "max-w-[700px]" : "max-w-[1040px]"
                }`}
              >
                {props.description}
              </p>
              <button
                onClick={props.onClick}
                className="bg-orange-500 text-[18px] w-full md:w-fit font-bold text-white py-2 px-4 rounded shadow-md hover:shadow-lg focus:outline-none"
              >
                {props.textButton}
              </button>
            </div>
            {props.photoHome && (
              <div className=" rounded-full w-96 h-96 flex items-center">
                <img
                  src="../../../logo2.png"
                  alt="Background"
                  className="w-96 float-end"
                />
              </div>
            )}
            {props.photoGalery && (
              <div className="border rounded-full w-96 h-96 flex items-center">
                <img
                  src="../../../camera2.png"
                  alt="Background"
                  className="w-96 h-96 float-end rounded-full"
                />
              </div>
            )}
          </div>
        </div>
        {props.buttons && (
          <div className="flex flex-col p-[30px] mb-24 justify-center gap-11 mt-[20px] md:p-0 md:flex-row  md:mt-[150px]">
            <div className="md:w-[245px] border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">Experiência comprovada</p>
            </div>
            <div className="md:w-[245px] border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">Atendimento personalizado</p>
            </div>
            <div className="md:w-[245px] border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">Equipe qualificada</p>
            </div>
            <div className="md:w-[245px] border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">Serviços de alta qualidade</p>
            </div>
            <div className="md:w-[245px] border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">Compromisso com prazos</p>
            </div>
          </div>
        )}
        {props.buttonsDepoiment && (
          <div className="flex p-3 flex-col  justify-center gap-11 md:mt-[150px] md:p-0 md:flex-row">
            <div className="px-5 border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">
                Flexibilidade e adaptação às necessidades
              </p>
            </div>
            <div className="px-5 border hover:bg-orange-600 transition-all cursor-pointer h-[65px] flex items-center justify-center">
              <p className="text-white">
                Proatividade na resolução de problemas
              </p>
            </div>
          </div>
        )}

        <div  onClick={props.onClick} className="absolute hidden bottom-4 md:bottom-16 left-1/2 transform md:flex -translate-x-1/2 space-y-4">
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${
              props.section ? "text-[#ffffff]" : "text-[#fff]"
            } font-normal text-[60px] cursor-pointer animate-blink`}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
