import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className=" ">
        <div className="flex  md:px-28 px-4 bg-primary  flex-col md:min-h-primary py-10  md:flex-row w-full justify-center items-center md:items-start">
          <div className="md:w-1/2 w-full">
            <div>
              <h2 className="text-xl font-semibold my-2 capitalize">
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
              <h2 className="text-xl font-semibold mt-4 capitalize">
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
          <div className="md:w-1/2 w-full flex flex-col relative justify-center md:px-4 items-center py-2 gap-y-5 md:gap-y-0 md:block ">
            <div className="pics1 h-ppic2 md:h-pics md:w-1/2 w-full  transition ease-in-out duration-300 md:hover:scale-105 z-10 md:absolute  md:left-4 md:top-10  rounded-sm"></div>
            <div className="pics2 h-ppic2 md:h-pics md:w-1/2 w-full  transition ease-in-out duration-300 md:hover:scale-105   md:absolute  right-4  rounded-sm hover:z-10 "></div>
          </div>
        </div>

        <div className="md:px-28 px-4 grid grid-cols-1 md:grid-cols-2  gap-4 w-full h-pic5 md:h-ppic my-10">
          <div className=" row-span-1 h-20  ">
            <p className=" pta ">
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
        <div className="talor2 tal  "></div>
        <div className="talor3 tal "></div>
        <div className="talor4 tal"></div> */}

          <div className="talor5 tal row-span-1 md:row-span-2"></div>
          <div className="talor1 tal row-span-1 md:row-span-1"></div>
          <div className="talor2 tal row-span-1 md:row-span-2"></div>
          <div className="talor3 tal row-span-1"></div>
          <div className="talor4 tal row-span-1"></div>
        </div>

        <div className="md:px-28 px-4 flex justify-center items-center w-full">
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
