import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1B1B] border-t text-white py-8">
      <div className="container flex flex-col md:flex-row mx-auto px-4">
        <div className="flex flex-col gap-5 md:w-full md:gap-0 md:flex-row justify-between items-center">
          <div className="flex w-full justify-between md:justify-normal items-center gap-10">
            <div>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">PB Produções</h3>
            <p className="text-gray-400">
              © 2024 PB Produções. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
