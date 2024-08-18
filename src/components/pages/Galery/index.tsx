import React, { useRef } from "react";
import useStore from "../../SideBar/storets";
import CustomSideBar from "../../SideBar";
import Icon from "../../Icon";
import BannerHome from "../../bannerHome";
import Footer from "../../Footer";
import PhotoGallery from "../../galeryComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Galery: React.FC<any> = () => {
  const { isActiveMobile, toggleActiveMobile, isActive, toggleActive } =
    useStore();

  const photos = [
    "../../../arca/2.jpeg",
    "../../../esbornia/2.jpeg",
    "../../../esbornia/9.jpeg",
    "../../../biggerland/2.jpeg",
    "../../../arca/3.jpeg",
  ];

  const photosArca = [
    "../../../arca/1.jpeg",
    "../../../arca/2.jpeg",
    "../../../arca/3.jpeg",
    "../../../arca/4.jpeg",
    "../../../arca/5.jpeg",
  ];

  const photosEsbornia = [
    "../../../esbornia/1.jpeg",
    "../../../esbornia/2.jpeg",
    "../../../esbornia/3.jpeg",
    "../../../esbornia/4.jpeg",
    "../../../esbornia/5.jpeg",
    "../../../esbornia/6.jpeg",
    "../../../esbornia/7.jpeg",
    "../../../esbornia/8.jpeg",
    "../../../esbornia/9.jpeg",
    "../../../esbornia/10.jpeg",
  ];

  const photosBiggerland = [
    "../../../biggerland/1.jpeg",
    "../../../biggerland/2.jpeg",
    "../../../biggerland/3.jpeg",
    "../../../biggerland/4.jpeg",
    "../../../biggerland/5.jpeg",
  ];

  const photosCorcovado = [
    "../../../corcovado/1.jpeg",
    "../../../corcovado/2.jpeg",
    "../../../corcovado/3.jpeg",
    "../../../corcovado/4.jpeg",
    "../../../corcovado/5.jpeg",
  ];

  const photosMixed = [
    "../../../mixed/1.jpeg",
    "../../../mixed/2.jpeg",
    "../../../mixed/3.jpeg",
    "../../../mixed/4.jpeg",
    "../../../mixed/5.jpeg",
    "../../../mixed/6.jpeg",
    "../../../mixed/7.jpeg",
  ];

  const photosMomo = [
    "../../../momo/1.jpeg",
    "../../../momo/2.jpeg",
    "../../../momo/3.jpeg",
    "../../../momo/4.jpeg",
    "../../../momo/5.jpeg",
    "../../../momo/6.jpeg",
  ];

  const photosMaracutaia = [
    "../../../maracutaia/1.jpeg",
    "../../../maracutaia/2.jpeg",
    "../../../maracutaia/3.jpeg",
    "../../../maracutaia/4.jpeg",
    "../../../maracutaia/5.jpeg",
    "../../../maracutaia/6.jpeg",
    "../../../maracutaia/7.jpeg",
    "../../../maracutaia/8.jpeg",
    "../../../maracutaia/9.jpeg",
  ];

  const photosGaiola = [
    "../../../gaiola/1.jpeg",
    "../../../gaiola/2.jpeg",
    "../../../gaiola/3.jpeg",
    "../../../gaiola/4.jpeg",
    "../../../gaiola/5.jpeg",
    "../../../gaiola/6.jpeg",
    "../../../gaiola/7.jpeg",
    "../../../gaiola/8.jpeg",
    "../../../gaiola/9.jpeg",
    "../../../gaiola/10.jpeg",
    "../../../gaiola/11.jpeg",
  ];

  const photosDPP = [
    "../../../dpp/1.jpeg",
    "../../../dpp/2.jpeg",
    "../../../dpp/3.jpeg",
    "../../../dpp/4.jpeg",
    "../../../dpp/5.jpeg",
    "../../../dpp/6.jpeg",
  ];

  const photosAstral = [
    "../../../astral/1.jpeg",
    "../../../astral/2.jpeg",
    "../../../astral/3.jpeg",
    "../../../astral/4.jpeg",
    "../../../astral/5.jpeg",
    "../../../astral/6.jpeg",
  ];

  const photosOboe = [
    "../../../oboe/1.jpeg",
    "../../../oboe/2.jpeg",
    "../../../oboe/3.jpeg",
    "../../../oboe/4.jpeg",
    "../../../oboe/5.jpeg",
    "../../../oboe/6.jpeg",
  ];

  const photosAgraga = [
    "../../../agraga/1.jpeg",
    "../../../agraga/2.jpeg",
    "../../../agraga/3.jpeg",
    "../../../agraga/4.jpeg",
    "../../../agraga/5.jpeg",
    "../../../agraga/6.jpeg",
    "../../../agraga/7.jpeg",
    "../../../agraga/8.jpeg",
    "../../../agraga/9.jpeg",
    "../../../agraga/10.jpeg",
    "../../../agraga/11.jpeg",
    "../../../agraga/12.jpeg",
    "../../../agraga/13.jpeg",
    "../../../agraga/14.jpeg",
    "../../../agraga/15.jpeg",
  ];

  const photosAldeia = [
    "../../../aldeia/1.jpeg",
    "../../../aldeia/2.jpeg",
    "../../../aldeia/3.jpeg",
    "../../../aldeia/4.jpeg",
    "../../../aldeia/5.jpeg",
    "../../../aldeia/6.jpeg",
    "../../../aldeia/7.jpeg",
    "../../../aldeia/8.jpeg",
    "../../../aldeia/9.jpeg",
    "../../../aldeia/10.jpeg",
    "../../../aldeia/11.jpeg",
    "../../../aldeia/12.jpeg",
    "../../../aldeia/13.jpeg",
    "../../../aldeia/14.jpeg",
    "../../../aldeia/15.jpeg",
    "../../../aldeia/16.jpeg",
    "../../../aldeia/17.jpeg",
    "../../../aldeia/18.jpeg",
    "../../../aldeia/19.jpeg",
  ];

  const photosChuvisco = [
    "../../../chuvisco/1.jpeg",
    "../../../chuvisco/2.jpeg",
    "../../../chuvisco/3.jpeg",
    "../../../chuvisco/4.jpeg",
    "../../../chuvisco/5.jpeg",
    "../../../chuvisco/6.jpeg",
  ];

  const photosWeLove = [
    "../../../welove/1.jpeg",
    "../../../welove/2.jpeg",
    "../../../welove/3.jpeg",
    "../../../welove/4.jpeg",
    "../../../welove/5.jpeg",
    "../../../welove/6.jpeg",
  ];

  const photosGuapo = [
    "../../../guapo/1.jpeg",
    "../../../guapo/2.jpeg",
    "../../../guapo/3.jpeg",
    "../../../guapo/4.jpeg",
    "../../../guapo/5.jpeg",
    "../../../guapo/6.jpeg",
    "../../../guapo/7.jpeg",
    "../../../guapo/8.jpeg",
    "../../../guapo/9.jpeg",
    "../../../guapo/10.jpeg",
    "../../../guapo/11.jpeg",
    "../../../guapo/12.jpeg",
    "../../../guapo/13.jpeg",
    "../../../guapo/14.jpeg",
    "../../../guapo/15.jpeg",
  ];

  const festas = [
    "Arca de noé",
    "Esbórnia e Awe Caraiva",
    "Biggerland Festival",
    "Baile do Momo",
    "Corcovado",
    "Mixed by mixed",
    "Maracutaia",
    "Gaiola do Zé",
    "Luau do DDP",
    "Astral",
    "Oboé",
    "Agrada Gregos",
    "Batalha da Aldeia",
    "Pagode do chuvisco",
    "We Love Funk",
    "Super Guapo",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Refs for each section
  const arcaRef = useRef<HTMLDivElement>(null);
  const sectionHome = useRef<HTMLDivElement>(null);
  const esborniaRef = useRef<HTMLDivElement>(null);
  const biggerlandRef = useRef<HTMLDivElement>(null);
  const momoRef = useRef<HTMLDivElement>(null);
  const corcovadoRef = useRef<HTMLDivElement>(null);
  const mixedRef = useRef<HTMLDivElement>(null);
  const maracutaiadRef = useRef<HTMLDivElement>(null);
  const gaiolaRef = useRef<HTMLDivElement>(null);
  const dppRef = useRef<HTMLDivElement>(null);
  const astralRef = useRef<HTMLDivElement>(null);
  const oboeRef = useRef<HTMLDivElement>(null);
  const agragaRef = useRef<HTMLDivElement>(null);
  const aldeiaRef = useRef<HTMLDivElement>(null);
  const chuvicoRef = useRef<HTMLDivElement>(null);
  const weloveRef = useRef<HTMLDivElement>(null);
  const guapoRef = useRef<HTMLDivElement>(null);

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
      case "Baile do Momo":
        momoRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Corcovado":
        corcovadoRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Mixed by mixed":
        mixedRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Maracutaia":
        maracutaiadRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Gaiola do Zé":
        gaiolaRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Luau do DPP":
        dppRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Astral":
        astralRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Oboé":
        oboeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Agrada Gregos":
        agragaRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Batalha da Aldeia":
        aldeiaRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Pagode do chuvisco":
        chuvicoRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "We Love Funk":
        weloveRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
        case "Super Guapo":
          guapoRef.current?.scrollIntoView({ behavior: "smooth" });
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
            title={"Galeria"}
            description={
              "Descubra a magia dos nossos eventos através de nossa galeria de fotos! Cada imagem é uma janela para os momentos inesquecíveis que criamos com dedicação e paixão."
            }
            onClick={() => handleScrollHome()}
            textButton={"Confira abaixo"}
          />
          <div ref={sectionHome} className="px-6 md:px-11">
            <h1 className="text-[26px] md:text-[48px] mt-[30px] md:mt-24 font-bold text-left md:text-center mb-4">
              Bem-vindo à nossa Galeria de Eventos!
            </h1>
            <p className="text-[15px] md:text-[20px]">
              Explore nossa seleção de fotos dos eventos que realizamos e veja
              como a nossa lycra e outros materiais transformam cada ocasião em
              uma experiência memorável. Aqui, você encontrará imagens que
              destacam o revestimento de{" "}
              <span className="text-orange-500 font-bold">tendas</span>,
              incluindo <span className="text-orange-500 font-bold">saias</span>
              , cortinas de entrada e o{" "}
              <span className="text-orange-500 font-bold">
                revestimento completo das estruturas
              </span>
              . Também mostramos
              <span className="text-orange-500 font-bold">
                {" "}
                totens personalizados em tecido
              </span>
              , revestimento dos boxes da tenda, cenografia com juta e
              paisagismo que criam ambientes únicos e personalizados.
            </p>
            <p className="italic font-bold text-center text-gray-600 mt-6">
              Cada foto é um testemunho do nosso compromisso em criar eventos
              excepcionais. Navegue pela galeria e inspire-se para o seu próximo
              evento!
            </p>
          </div>
          <div className="w-full mt-10">
            <Carousel
              autoPlay
              responsive={responsive}
              infinite={true}
              arrows={true}
            >
              {photos.map((photo, index) => (
                <div key={index} className="p-2">
                  <img
                    src={photo}
                    alt={`Galeria ${index}`}
                    className="w-full h-[260px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="mb-24">
            <h1 className="text-center text-[32px] mb-[40px] mt-[35px] md:mb-3 md:mt-28">
              Alguns{" "}
              <span className="text-orange-500 font-bold"> eventos </span> que
              ja realizamos:
            </h1>
            <div className="flex justify-center flex-wrap gap-6">
              {festas.map((item) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item);
                  }}
                  className="border text-[22px] px-4 py-1 hover:bg-gray-400 transition-all hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center p-3 md:p-11 gap-36">
            <div ref={arcaRef}>
              <p className="text-orange-500 w-fit border-b-4 m-4 text-[30px] font-bold">
                ARCA DE NOÉ
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosArca} />
            </div>

            <div ref={esborniaRef}>
              <p className="text-amber-900 w-fit border-b-4 m-4 text-[30px] font-bold">
                ESBÓRNIA & AWE CARAIVA
              </p>

              <PhotoGallery
                title={"Galeria de Fotos"}
                photos={photosEsbornia}
              />
            </div>

            <div ref={biggerlandRef}>
              <p className="text-cyan-600 w-fit border-b-4 m-4 text-[30px] font-bold">
                BIGGERLAND FESTIVAL:
              </p>

              <PhotoGallery
                title={"Galeria de Fotos"}
                photos={photosBiggerland}
              />
            </div>

            <div ref={momoRef}>
              <p className="text-indigo-500 w-fit border-b-4 m-4 text-[30px] font-bold">
                BAILE DO MOMO
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosMomo} />
            </div>

            <div ref={corcovadoRef}>
              <p className="text-yellow-500 w-fit border-b-4 m-4 text-[30px] font-bold">
                CORCOVADO
              </p>

              <PhotoGallery
                title={"Galeria de Fotos"}
                photos={photosCorcovado}
              />
            </div>
            <div ref={mixedRef}>
              <p className="text-red-600 w-fit border-b-4 m-4 text-[30px] font-bold">
                MIXED BY MIXED
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosMixed} />
            </div>
            <div ref={maracutaiadRef}>
              <p className="text-yellow-700 w-fit border-b-4 m-4 text-[30px] font-bold">
                MARACUTAIA
              </p>

              <PhotoGallery
                title={"Galeria de Fotos"}
                photos={photosMaracutaia}
              />
            </div>
            <div ref={gaiolaRef}>
              <p className="text-red-800 w-fit border-b-4 m-4 text-[30px] font-bold">
                GAIOLA DO ZÉ
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosGaiola} />
            </div>
            <div ref={dppRef}>
              <p className="text-green-600 w-fit border-b-4 m-4 text-[30px] font-bold">
                LUAU DO DPP
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosDPP} />
            </div>
            <div ref={astralRef}>
              <p className="text-green-400 w-fit border-b-4 m-4 text-[30px] font-bold">
                ASTRAL
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosAstral} />
            </div>
            <div ref={oboeRef}>
              <p className="text-green-400 w-fit border-b-4 m-4 text-[30px] font-bold">
                OBOÉ
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosOboe} />
            </div>
            <div ref={agragaRef}>
              <p className="text-gray-600 w-fit border-b-4 m-4 text-[30px] font-bold">
                AGRAGA GREGOS
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosAgraga} />
            </div>
            <div ref={aldeiaRef}>
              <p className="text-cyan-700 w-fit border-b-4 m-4 text-[30px] font-bold">
                BATALHA DA ALDEIA
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosAldeia} />
            </div>
            <div ref={chuvicoRef}>
              <p className="text-orange-700 w-fit border-b-4 m-4 text-[30px] font-bold">
                PAGODE DO CHUVISCO
              </p>

              <PhotoGallery
                title={"Galeria de Fotos"}
                photos={photosChuvisco}
              />
            </div>
            <div ref={weloveRef}>
              <p className="text-yellow-700 w-fit border-b-4 m-4 text-[30px] font-bold">
                WE LOVE FUNK
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosWeLove} />
            </div>
            <div ref={guapoRef}>
              <p className="text-violet-800 w-fit border-b-4 m-4 text-[30px] font-bold">
                SUPER GUAPO
              </p>

              <PhotoGallery title={"Galeria de Fotos"} photos={photosGuapo} />
            </div>
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

export default Galery;
