import React, { useRef } from "react";
import useStore from "../../SideBar/storets";
import CustomSideBar from "../../SideBar";
import Icon from "../../Icon";
import BannerHome from "../../bannerHome";
import Footer from "../../Footer";
import "./styles.css";
import PhotoGallery from "../../galeryComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Depoiments: React.FC<any> = () => {
  const { isActiveMobile, toggleActiveMobile, isActive, toggleActive } =
    useStore();

  const infosDepoiments = [
    {
      name: "Guilherme Nobrega",
      depoiment:
        "Empresa muito boa, sempre atende todas as expectativas, com um ambiente harmônico",
      photo: "../../../guiNobrega.jpg",
    },
    {
      name: "Pedro Bruno",
      depoiment:
        "Empresa muito boa, sempre atende todas as expectativas, com um ambiente harmônico",
      photo: "../../../guiNobrega.jpg",
    },
    {
      name: "Guilherme",
      depoiment:
        "Empresa muito boa, sempre atende todas as expectativas, com um ambiente harmônico",
      photo: "../../../guiNobrega.jpg",
    },
    {
      name: "Guilherme",
      depoiment:
        "Empresa muito boa, sempre atende todas as expectativas, com um ambiente harmônico",
      photo: "../../../guiNobrega.jpg",
    },
    {
      name: "Guilherme",
      depoiment:
        "Empresa muito boa, sempre atende todas as expectativas, com um ambiente harmônico",
      photo: "../../../guiNobrega.jpg",
    },
    {
      name: "Guilherme",
      depoiment:
        "Empresa muito boa, sempre atende todas as expectativas, com um ambiente harmônico",
      photo: "../../../guiNobrega.jpg",
    },
  ];

  // Refs for each section
  const arcaRef = useRef<HTMLDivElement>(null);
  const sectionHome = useRef<HTMLDivElement>(null);
  const esborniaRef = useRef<HTMLDivElement>(null);
  const biggerlandRef = useRef<HTMLDivElement>(null);

  const handleScrollHome = () => {
    sectionHome.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToSection = (section: string) => {
    switch (section) {
      case "Arca de noé":
        arcaRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Esbórnia e Awe Caraiva":
        esborniaRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Biggerland Festival":
        biggerlandRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex relative h-screen">
      <div className="flex h-screen">
        <CustomSideBar />
        <Icon
          onClick={() => {
            console.log("Teste clicou aqui");
            toggleActiveMobile(!isActiveMobile);
            toggleActive(!isActive);
          }}
          style={{ cursor: "pointer" }}
          name="menu"
          className="absolute top-5 left-5 text-white text-[50px] block md:hidden"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center">
          <BannerHome
            section
            buttonsDepoiment
            title={"Depoimentos"}
            description={
              "Descubra o que nossos clientes e colaboradores têm a dizer sobre nós! Confira as avaliações e feedbacks que destacam nossa dedicação e qualidade no atendimento"
            }
            onClick={() => handleScrollHome()}
            textButton={"Confira abaixo"}
          />
        </div>
        <div className="bg-[#000] p-3 md:p-8">
          <div ref={sectionHome} className="px-3 md:px-11 mb-28">
            <h1 className="text-[26px] md:mb-0 md:text-[48px] text-white mt-6 font-bold text-center mb-7">
              Confira alguns de nossos feedbacks!
            </h1>
            <p className="text-[20px] text-white">
              Confira o que nossos clientes têm a dizer sobre nossos serviços e
              como nossa dedicação transforma cada evento em uma experiência
              inesquecível. Aqui, você encontrará avaliações e testemunhos que
              destacam nossa
              <span className="text-orange-500 font-bold">
                {" "}experiência comprovada
              </span>
              ,
              <span className="text-orange-500 font-bold">
              {" "} atendimento personalizado
              </span>
              , e{" "}
              <span className="text-orange-500 font-bold">
                compromisso com a qualidade
              </span>
              . Cada feedback é um reflexo do nosso esforço em proporcionar
              eventos excepcionais e atender às suas expectativas.
            </p>
            <p className="italic font-bold text-center text-white mt-6">
              Navegue pelos testemunhos e veja como transformamos ideias em
              realidade com paixão e profissionalismo. Inspire-se com as
              experiências dos nossos clientes e imagine o que podemos fazer
              pelo seu próximo evento!
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-14">
            {infosDepoiments.map((item) => (
              <div className="gradient-border max-w-[515px] min-h-[220px] flex flex-col justify-between p-4 relative">
                <img
                  src={"../../../aspas.png"}
                  className="absolute top-[-15px] left-3"
                  alt=""
                />
                <p className="text-white">{item.depoiment}</p>
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src={item.photo}
                      className="w-14 h-14 rounded-full"
                      alt=""
                    />
                  </div>
                  <p className="text-white font-bold">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />

        <a
          href="https://wa.me/SEUNUMERO" // substitua "SEUNUMERO" pelo número de telefone desejado no formato internacional
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300"
        >
          <img
            className="max-w-[40px]"
            src="../../../whatsapp-icone-1.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Depoiments;
