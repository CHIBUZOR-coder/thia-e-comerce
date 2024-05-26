import Footer from "./Footer";

const AboutThia = () => {
  return (
    <div className="flex flex-col  justify-center items-center ">
      <div className=" w-full px-6 bg-primary md:px-28 ">
        <div>
          <div className=" flex flex-col justify-center items-center gap-10 py-10">
            <div>
              <p className="tittle text-5xl">Thiaa - My Story</p>
            </div>

            <div className=" rounded-md AoutThiaPics h-[500px] w-[400px] "></div>
          </div>
        </div>
      </div>
      <div className="py-10 px-6 md:px-28  bg-white">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          fugiat, deleniti amet a eius nostrum dolorum tempora facere quibusdam
          vero sunt ea possimus hic earum repellat debitis eaque quo? Incidunt
          voluptas illum minima fugit eaque enim odio eius at inventore Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio,
          cupiditate accusantium aliquam sed?. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos
          veniam voluptatem odio. <br /> Praesentium voluptatum explicabo enim!
          Eaque corrupti reiciendis amet tenetur praesentium asperiores optio
          veritatis, facilis sunt fuga doloribus eligendi corporis ipsam nostrum
          possimus eveniet earum? Possimus, hic officia?
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutThia;
