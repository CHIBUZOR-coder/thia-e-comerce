import { useContext, useEffect } from "react";
import Footer from "./Footer";
import { DataContext } from "../../Components/DataContext";


const About = () => {
 const { isUser, cartCount, cartRender, Products } = useContext(DataContext);
  useEffect(() => {
    console.log("cartRender changed:", cartRender);
    console.log("cartNav:", Products);
  }, [cartRender, Products]);

  return (
    <div>
      <div className="">
        <div className="flex  flex-col items-center justify-center w-full mt-40 px-4 py-10 md:px-28 bg-primary md:min-h-primary md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <div>
              <h2 className="my-2 text-xl font-semibold capitalize">
                Thia's Apparel
              </h2>
            </div>

            <div>
              <p>
                We focus on new, functional designs like coats, technical
                outerwear, and casual knitwear. Paoloni is unmistakably Italian,
                dedicated to creating top-quality clothing with the finest
                materials, while also promoting a distinctive, cosmopolitan, and
                inclusive male style. <br /> The brand is unmistakably
                passionate and dedicated to creating quality clothing with the
                best materials, but also, and most importantly, in its vision of
                a distinctive female fashion style.
              </p>
            </div>
            <hr className="mt-8" />

            <div>
              <h2 className="mt-4 text-xl font-semibold capitalize">
                Contemporary Heritage
              </h2>
            </div>

            <p className="lowercase">
              <span className="uppercase">T</span>hia's Apparel presents a fresh
              take on men's clothing, made up of a carefully selected range of
              well-crafted pieces designed for the modern man's lifestyle.
              Staying true to its roots in tailoring and craftsmanship, Paoloni
              embodies a versatile and timeless style. Drawing inspiration from
              a new and modern functionality, it introduces key items such as
              coats, technical outerwear, and casual knitwear.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full py-2 md:w-1/2 md:px-4 gap-y-5 md:gap-y-0 md:block ">
            <div className="z-10 w-full transition duration-300 ease-in-out rounded-sm pics1 h-ppic2 md:h-pics md:w-1/2 md:hover:scale-105 md:absolute md:left-4 md:top-10"></div>
            <div className="w-full transition duration-300 ease-in-out rounded-sm pics2 h-ppic2 md:h-pics md:w-1/2 md:hover:scale-105 md:absolute right-4 hover:z-10 "></div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 px-4 my-10 md:px-28 md:grid-cols-2 h-pic5 md:h-ppic">
          <div className="h-20 row-span-1 ">
            <p className=" pta">
              In the production of outerwear, it's like the shining star of one
              of the manufacturing hubs in the Marche region. The group's
              strength comes from the clever blend of craftsmanship,
              manufacturing, and tradition that go hand in hand with innovation,
              research, and design. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro alias adipisci sed eveniet ipsum corporis
              ab fugit commodi odit debitis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              officiis, maiores pariatur aspernatur repellendus est sapiente
              dolorem veniam consequuntur accusantium?
            </p>
          </div>

          {/* <div className="talor5 tal "></div>
        <div className="talor1 tal "></div>
        <div className="talor2 tal "></div>
        <div className="talor3 tal "></div>
        <div className="talor4 tal"></div> */}

          <div className="row-span-1 talor5 tal md:row-span-2"></div>
          <div className="row-span-1 talor1 tal md:row-span-1"></div>
          <div className="row-span-1 talor2 tal md:row-span-2"></div>
          <div className="row-span-1 talor3 tal"></div>
          <div className="row-span-1 talor4 tal"></div>
        </div>

        <div className="flex items-center justify-center w-full px-4 md:px-28">
          <p className="text-center lowercase">
            <span className="uppercase"> R</span>INOMATA PER LA SUA ALTA
            SPECIALIZZAZIONE NELLA PRODUZIONE DEL CAPOSPALLA, RAPPRESENTA IL
            FIORE ALL’OCCHIELLO DI UNO DEI POLI MANIFATTURIERI DEL TERRITORIO
            MARCHIGIANO. LA FORZA DEL GRUPPO RISIEDE NEL MIX SAPIENTE FRA
            ARTIGIANALITÀ, MANUFATTO E TRADIZIONE CHE SI SPOSANO CON
            L’INNOVAZIONE, LA RICERCA E IL DESIGN. RENOWNED FOR ITS HIGH
            SPECIALIZATION IN THE PRODUCTION OF OUTERWEAR, IT REPRESENTS THE
            FLAGSHIP OF ONE OF THE MANUFACTURING CENTERS IN THE MARCHE REGION.
            THE STRENGTH OF THE GROUP LIES IN THE SKILFUL MIX OF CRAFTSMANSHIP,
            ARTEFACTS AND TRADITION WHICH ARE COMBINED WITH INNOVATION, RESEARCH
            AND DESIGN. IL FORTE CARATTERE ITALIANO CHE LA CONTRADDISTINGUONO
            NELL'AMBITO DELLA PRODUZIONE E DELLA CREATIVITÀ, NON HA IMPEDITO
            ALLA MANIFATTURA PAOLONI DI SVILUPPARE UN'EFFICACE VOCAZIONE
            INTERNAZIONALE IN TERMINI DISTRIBUTIVI E DI MARKETING. THE STRONG
            ITALIAN CHARACTER THAT DISTINGUISHES IT IN THE FIELD OF PRODUCTION
            AND CREATIVITY HAS NOT PREVENTED MANIFATTURA PAOLONI FROM DEVELOPING
            AN EFFECTIVE INTERNATIONAL VOCATION IN TERMS OF DISTRIBUTION AND
            MARKETING.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
