import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NavBarDesktop: React.FC = () => {
  return (
   <div className="bg-[#1B1B1B] items-center max-w-[900px] mx-auto hidden justify-around rounded-b-[16px] rounded-bl-[16px] text-white py-5 px-16 fixed top-0 left-0 right-0 z-10 md:flex">
      <a href="/" className="text-[#9C9C9C] w-fit hover:text-white cursor-pointer">Home</a>
      <a href="/galeria" className="text-[#9C9C9C] w-fit hover:text-white cursor-pointer">Galeria</a>
      <a href="/depoimentos" className="text-[#9C9C9C] w-fit hover:text-white cursor-pointer">Depoimentos</a>
      <div className="flex gap-4">
        {/* <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9C9C9C] hover:text-white"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a> */}
        <a
          href="https://www.instagram.com/pbproducoesbr?igsh=MXc3ZG83cXB5ZDd1MQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9C9C9C] hover:text-white"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9C9C9C] hover:text-white"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a> */}
      </div>
    </div>
  );
};

export default NavBarDesktop;
