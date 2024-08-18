import React, { useEffect, useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import "./styles.css";
import useStore from "./storets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Icon from "../Icon";

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#090C10",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "var(--accent-10)",
      hover: {
        backgroundColor: "#FFDFB5",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const dataMenu = [
  { name: "Home", link: '/' },
  { name: "Galeria", link: '/galeria' },
  { name: "Depoimentos", link: '/depoimentos' }
];

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const CustomSideBar: React.FC = () => {
  const [broken, setBroken] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [iconClose, setIconClose] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("light");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [active, setActive] = useState<string | null>("Quem somos");

  const {
    isActiveMobile,
    toggleActiveMobile,
    isActive,
    toggleActive,
    setStep,
  } = useStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check initial window size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div className="containerSideBar">
          <div className="flex h-screen">
            <Sidebar
              className={`sub-overlay ${isActiveMobile ? "active" : "inactive"}`}
              collapsed={isActive}
              toggled={isActiveMobile}
              onBackdropClick={() => {
                toggleActiveMobile(!isActiveMobile);
                toggleActive(!isActive);
              }}
              onBreakPoint={setBroken}
              breakPoint="sm"
              backgroundColor={hexToRgba(
                themes[theme].sidebar.backgroundColor,
                hasImage ? 0.9 : 1
              )}
              collapsedWidth="0px"
              width="300px"
              style={{ right: 0, left: "auto" }}
            >
              <div className="flex flex-col">
                <div className="pt-7">
                  <img src="../../../logo2.png" alt="" />
                </div>
                <div className="menuSideBar">
                  {dataMenu.map((item, index) => (
                    <div
                      className={`menuItem ${
                        active === item.name ? "active" : ""
                      }`}
                      key={item.name}
                      onClick={() => {
                        setActive(item.name);
                        if (index === 0) {
                          setStep("profile");
                        } else if (index === 1) {
                          setStep("notification");
                        } else {
                          setStep("historic");
                        }
                        if (window.innerWidth < 600) {
                          toggleActiveMobile(!isActiveMobile);
                          toggleActive(!isActive);
                        }
                      }}
                    >
                      <a href={item.link}>{item.name}</a>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col absolute bottom-10 gap-6 px-3">
                  <div className="text-gray-400 flex items-center gap-2 hover:text-white">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[35px]"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <p className="cursor-pointer">Pb Produções</p>
                  </div>
                  <div className="text-gray-400 flex items-center gap-2 hover:text-white">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[35px]"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <p className="cursor-pointer">pbproducoes</p>
                  </div>
                  <div className="text-gray-400 flex items-center gap-2 hover:text-white">
                    <Icon name="mail" className="w-[35px]" />
                    <p className="cursor-pointer">pbproducoesbr@gmail.com</p>
                  </div>
                  <p className="text-gray-400 text-center mt-7">
                    © 2024 PB Produções. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </Sidebar>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomSideBar;
