import React, { useState } from "react";
import CustomSideBar from "../SideBar";
import Icon from "../Icon";
import useStore from "../SideBar/storets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import BannerHome from "../bannerHome";
import Footer from "../Footer";
import Home from "./About";

const Teste: React.FC<any> = () => {
  const { isActiveMobile, toggleActiveMobile, isActive, toggleActive } =
    useStore();

  return (
   <Home />
  );
};

export default Teste;
