import Footer from "./Footer";

const Terms = () => {
  return (
    <div>
      <div className="md:px-28 px-4 py-5 bg-primary ">
        <p className="text-4xl font-semibold px-10">
          Shipping info, terms & conditions
        </p>

        <div className="my-5">
          <p className="Dhea">Deliveries</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            natus ullam minima quisquam iusto ipsum nam sed explicabo optio
            error voluptatem, consequuntur quia! Molestiae consectetur
            consequatur neque! Cum, soluta accusamus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque
            voluptatem necessitatibus velit provident iste autem, quibusdam quam
            explicabo consectetur?
          </p>
        </div>
        <div className="my-5">
          <p className="Dhea">Returns and Exchanges</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            natus ullam minima quisquam iusto ipsum nam sed explicabo optio
            error voluptatem, consequuntur quia! Molestiae consectetur
            consequatur neque! Cum, soluta accusamus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque
            voluptatem necessitatibus velit provident.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
