import React, { useState } from "react";
import useStore from "../../SideBar/storets";
import CustomSideBar from "../../SideBar";
import Icon from "../../Icon";
import BannerHome from "../../bannerHome";
import Footer from "../../Footer";

const Home: React.FC<any> = () => {
  const { isActiveMobile, toggleActiveMobile, isActive, toggleActive } =
    useStore();

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
          {/* <div
            className="h-screen items-center w-full text-center content-center"
            style={{
              background:
                "linear-gradient(to bottom, #141414 80%, #442500 100%)",
            }}
          >
            <div className="flex justify-center">
              <div className="max-w-[900px]">
                <p className="text-white text-[70px]" data-aos="zoom-in">
                  Faremos de seu evento <br /> um acontecimento incrível!
                </p>
                <img
                  src="../../../logo2.png"
                  alt="Background"
                  className="w-44 float-end"
                />
              </div>
            </div>
            <div className="absolute bottom-64 left-1/2 transform -translate-x-1/2 space-y-4">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white font-normal text-[60px] cursor-pointer animate-blink"
              />
            </div>
          </div> */}
          <BannerHome
            title={"PB Producoes"}
            description={
              "Nós cuidamos de cada detalhe para garantir que sua celebração seja um sucesso absoluto. Confie em nossa equipe para criar memórias que você e seus convidados vão guardar para sempre."
            }
            textButton={"Venha nos conhecer"}
            buttons
            photoHome
          />
          <div
            style={{
              background: "linear-gradient(to top, #141414 80%, #442500 100%)",
            }}
            className="flex flex-col gap-10 justify-center items-center px-6 py-16 md:px-28 md:py-36"
          >
            <h2 className="font-bold text-[27px] md:text-[52px] text-white">
              <span className="text-orange-500">QUEM </span>SOMOS
            </h2>
            <div className="flex flex-col gap-4">
              <p className="leading-9 text-[18px] text-white">
                A PB Produções é uma empresa especializada em Lycra para eventos
                e cenografia, com anos de experiência no mercado. Destacamo-nos
                pela alta qualidade de nossos tecidos, que contam com
                Ignificação, assegurando a segurança e tranquilidade de nossos
                clientes.
              </p>
              <p className="leading-9 text-[18px] text-white">
                Além de fornecermos soluções em Lycra para eventos, atuamos na
                área de cenografia e revestimento, realizando qualquer tipo de
                forração e Lycra Tensionada. Nossa equipe está preparada para
                criar ambientes únicos e impactantes, personalizados de acordo
                com as necessidades específicas de cada cliente.
              </p>

              <p className="leading-9 text-[18px] text-white">
                Não limitamos nossos serviços apenas ao setor de eventos;
                expandimos nossa atuação para a construção civil, oferecendo
                Lycra para fechamento de grandes áreas. Com a PB Produções, você
                pode contar com expertise e versatilidade em cada projeto,
                proporcionando soluções inovadoras e de qualidade para diversos
                segmentos.
              </p>
            </div>
          </div>
        </div>
        {/* <div
          className="h-[80px] items-center w-full text-center"
          style={{
            background: "linear-gradient(to top, #442500 5%, #442500 100%)",
          }}
        ></div> */}

        <div
          className="h-[80px] items-center w-full text-center"
          style={{
            background: "linear-gradient(to bottom, #141414 5%, #442500 100%)",
          }}
        ></div>
        <div
          className="h-[80px] items-center w-full text-center"
          style={{
            background: "linear-gradient(to top, #141414 5%, #442500 100%)",
          }}
        ></div>
        <div
          className="flex flex-wrap justify-center items-center md:px-28 md:py-36"
          style={{
            background: "linear-gradient(to bottom, #141414 80%, #442500 100%)",
          }}
        >
          <div className="flex md:w-1/2 flex-col items-center gap-3 px-6 py-16 md:p-8 ">
            <img src="../../../icone 1.png" alt="" width={200} />
            <h2 className="font-bold text-white text-[27px] md:text-[52px]">
              <span className="text-orange-500">ABRANGÊNCIA </span>NACIONAL
            </h2>
            <p className="text-white tracking-widest">
              A PB Produções ultrapassa fronteiras para oferecer excelência em
              cenografia em todo o território nacional. De São Paulo a Salvador,
              já deixamos nossa marca em grandes eventos em cidades como Belo
              Horizonte, Rio de Janeiro e muitas outras. A distância não é um
              obstáculo para a entrega de qualidade e inovação.
            </p>
          </div>
          <div className="flex md:w-1/2 flex-col items-center gap-3 px-6 py-16 md:p-8 ">
            <img src="../../../icone 2.png" width={200} alt="" />
            <h2 className="font-bold text-white text-[27px] md:text-[52px]">
              <span className="text-orange-500">A ARTE </span>DA LYCRA
            </h2>
            <p className="text-white tracking-widest">
              Em nosso extenso portfólio de tecidos, a Lycra é a nossa joia da
              coroa. Proporcionando flexibilidade, elegância e um toque moderno,
              a Lycra é o carro-chefe que transforma espaços de forma única e
              inigualável. Com a PB Produções, seu evento ganha vida, cada
              detalhe é realçado e a atmosfera se torna incomparável.
            </p>
          </div>
          <div className="flex md:w-1/2 flex-col items-center gap-3 px-6 py-16 md:p-8 ">
            <img src="../../../dfd.png" width={200} alt="" />
            <h2 className="font-bold text-white text-[27px] md:text-[52px]">
              <span className="text-orange-500">EQUIPE </span>QUALIFICADA
            </h2>
            <p className="text-white tracking-widest">
              Na PB Produções, acreditamos que a expertise da nossa equipe é a
              chave para o sucesso do seu evento. Contamos com profissionais
              altamente qualificados e certificados, prontos para materializar a
              visão do seu projeto. Da concepção à execução, nossa equipe está
              comprometida em superar expectativas e elevar o padrão de
              qualidade.
            </p>
          </div>
          <div className="flex md:w-1/2 flex-col items-center gap-3 px-6 py-16 md:p-8 ">
            <img src="../../../icone 4.png" width={200} alt="" />
            <h2 className="font-bold text-white text-[27px] md:text-[52px]">
              <span className="text-orange-500">HISTÓRICO </span>DO SUCESSO
            </h2>
            <p className="text-white tracking-widest">
              Com mais de 500 eventos em nosso currículo, somos especialistas em
              criar experiências memoráveis. Desde eventos corporativos até
              formaturas e festivais, a PB Produções tem uma trajetória
              comprovada de sucesso. Cada projeto é uma oportunidade de inovar,
              surpreender e deixar uma marca indelével na memória de todos os
              participantes.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to top, #141414 80%, #442500 100%)",
          }}
          className="flex flex-col gap-10 justify-center items-center px-6 py-16 md:px-28 md:py-36"
        >
          <h2 className="font-bold text-white text-[27px] md:text-[52px]">
            <span className="text-orange-500">NOSSA </span>EQUIPE
          </h2>
          <p className="leading-9 text-[18px] text-white ">
            Nossa equipe altamente treinada está sempre pronta para atender seu
            evento com eficiência e agilidade, seguindo todas as normas
            regulamentadoras necessárias para garantir a segurança de todos os
            envolvidos. Na PB Produções, acreditamos que o sucesso de um evento
            está diretamente relacionado à qualidade dos serviços prestados. Por
            isso, trabalhamos incansavelmente para oferecer soluções criativas e
            inovadoras, garantindo que seu evento seja um sucesso absoluto.
            Entre em contato conosco e descubra como podemos ajudá-lo a realizar
            seu evento de forma única e especial.
          </p>
        </div>
        <div
          className="h-[80px] items-center w-full text-center"
          style={{
            background: "linear-gradient(to bottom, #141414 5%, #442500 100%)",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to top, #141414 90%, #442500 100%)",
          }}
          className="flex flex-col gap-10 justify-center items-center px-6 py-16 md:px-28 md:py-36"
        >
          <div className="">
          <h2 className="font-bold text-white text-[27px] mt-10 text-center mb-36 md:text-[52px]">
            <span className="text-orange-500">NOSSOS </span>SERVIÇOS
          </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-orange-400
                 font-semibold">
                  Cenografia com Tecidos
                </h3>
                <p className="mt-2 text-white">
                  Nossa equipe especializada transforma ambientes comuns em
                  cenários deslumbrantes utilizando tecidos de alta qualidade.
                  Com uma ampla variedade de opções, criamos desde tendas e
                  coberturas até estruturas complexas que dão vida a eventos
                  únicos. A estética impecável dos nossos trabalhos é sempre
                  acompanhada pela segurança e durabilidade dos materiais.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400
                 font-semibold">Carpetes e Forrações</h3>
                <p className="mt-2 text-white">
                  Oferecemos soluções de carpetes e forrações que aliam
                  elegância e praticidade para o seu evento. Nossos produtos são
                  selecionados para complementar a identidade visual do seu
                  espaço, criando uma base acolhedora e confortável para os
                  convidados. Além disso, garantimos a instalação e remoção
                  eficientes, respeitando os prazos acordados.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400
                 font-semibold">
                  Cenografia com Sublimações
                </h3>
                <p className="mt-2 text-white">
                  A cenografia com sublimações permite personalizar espaços de
                  maneira criativa e impactante. Utilizando impressões de alta
                  definição, criamos painéis, banners e revestimentos que dão um
                  toque exclusivo ao seu evento. Seja para destacar uma marca ou
                  para criar um ambiente temático, nossas sublimações elevam o
                  nível da experiência visual.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400
                 font-semibold">
                  Construção de Estandes e Ambientes Cenográficos
                </h3>
                <p className="mt-2 text-white">
                  Especializados na construção de estandes e ambientes
                  cenográficos, oferecemos soluções que destacam a presença da
                  sua marca em feiras e eventos. Nosso foco é criar espaços
                  funcionais e atrativos, que capturam a atenção do público e
                  promovem a interação com os produtos ou serviços apresentados.
                  Garantimos uma execução precisa, do projeto à montagem final.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400
                 font-semibold">
                  Criação de Ambientes Instagramáveis
                </h3>
                <p className="mt-2 text-white">
                  Em um mundo digital, criar ambientes instagramáveis é
                  essencial para gerar engajamento e visibilidade. Desenvolvemos
                  espaços criativos e interativos que incentivam os
                  participantes a compartilharem suas experiências nas redes
                  sociais, aumentando a exposição da sua marca. Cada detalhe é
                  pensado para proporcionar fotos incríveis e memórias
                  inesquecíveis.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400
                 font-semibold">Ativações de Marcas</h3>
                <p className="mt-2 text-white">
                  As ativações de marcas são fundamentais para criar conexões
                  emocionais com o público. Trabalhamos para desenvolver
                  experiências imersivas que destacam os valores e diferenciais
                  da sua marca. Com uma abordagem criativa e estratégica,
                  criamos momentos memoráveis que ficam na mente dos
                  consumidores, fortalecendo a presença da marca no mercado.
                </p>
              </div>
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

export default Home;
