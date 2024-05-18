const About = () => {
  return (
    <div className="px-4 md:px-28 md:gap-14  ">
      <div className="relative md:pt-5 px-0 md:px-4  flex flex-col justify-center sm:items-center md:items-start md:flex-row">
        <div className="w-1/2 md:w-full ">
          <h1 className="text-3xl font-semibold  mt-4  capitalize   ">
            Thia's Apareal
          </h1>
          <p className="">
            We focus on new, functional designs like coats, technical outerwear,
            and casual knitwear. Paoloni is unmistakably Italian, dedicated to
            creating top-quality clothing with the finest materials, while also
            promoting a distinctive, cosmopolitan, and inclusive male style.{" "}
            <br /> The brand is unmistakably passionate and dedication to
            creating quality clothing with the best materials, but also, and
            most importantly, in its vision of a distinctive female fashion
            style.
          </p>

          <hr className="mt-8" />

          <h2 className="text-xl font-semibold  mt-4  capitalize ">
            {" "}
            CONTEMPORARY HERITAGE CONTEMPORARY HERITAGE
          </h2>
          <p className="lowercase">
            <span className="uppercase">T</span>hia's Apareal PRESENTS A FRESH
            TAKE ON MEN'S CLOTHING, MADE UP OF A CAREFULLY SELECTED RANGE OF
            WELL-CRAFTED PIECES DESIGNED FOR THE MODERN MAN'S LIFESTYLE. STAYING
            TRUE TO ITS ROOTS IN TAILORING AND CRAFTSMANSHIP, PAOLONI EMBODIES A
            VERSATILE AND TIMELESS STYLE. DRAWING INSPIRATION FROM A NEW AND
            MODERN FUNCTIONALITY, IT INTRODUCES KEY ITEMS SUCH AS COATS,
            TECHNICAL OUTERWEAR, AND CASUAL KNITWEAR.
          </p>
        </div>
        <div className="md:w-1/2 w-full px-4  relative flex flex-col justify-center items-center h-product3 ">
          <div className="pics1 rounded-sm relative transition ease-in-out duration-300 hover:scale-105 z-10  md:absolute md:left-4 md:top-10  w-full md:w-60 h-big4 my-5 md:h-pics"></div>
          <div className="pics2 md:absolute md:right-4 relative rounded-sm transition hover:z-10 ease-in-out duration-300 hover:scale-105 md:top-2 h-big4 my-5 w-full md:w-60 md:h-pics "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
