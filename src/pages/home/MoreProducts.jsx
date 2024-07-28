const MoreProducts = () => {
  return (
    <div className="flex flex-col px-4 py-4 mt-10 md:mt-auto bg-primary md:px-28">
      <h1 className="tittle">Made to offer</h1>
      {/* product card */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-screen-2xl xl:px-28 md:flex-row ">
          <div className="flex flex-col items-center w-full gap-0 px-1 overflow-hidden leftProduct h-product md:h-product md:w-1/2 md:px-2 md:m-0 md:mt-3 md:py-16">
            <div className="flex flex-col items-start justify-center w-3/4 py-3 text-xl text-white">
              <p className="py-1">
                We are proud to offer you our service Made to order. It means
                you can order our Essential styles in your size whenever you
                want, even if our stock is sold out. We also do smaller
                alterations if neccessary.
              </p>
              <p className="py-1">
                You get the perfect fit and we avoid unnecessary transports and
                overproduction - good for you and the environment.
              </p>
              <h2 className="py-1">Read more about it</h2>
              <div className="flex flex-col">
                <a className="py-1 text-2xl underline udtext" href="/">
                  Made to order
                </a>
                <a className="py-1 text-2xl underline udtext" href="/">
                  Altreations
                </a>
              </div>

              <div className="flex flex-col items-center w-full mt-10 thiaLogo h-36"></div>
            </div>
          </div>
          <div className="w-full px-1 overflow-hidden bg-red-800 rightProduct h-product md:w-1/2 md:px-2 md:m-0 md:mt-3 md:py-16"></div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
