const MoreProducts = () => {
  return (
    <div className="py-4 md:mt-auto mt-10 flex flex-col  xl:px-28 px-4">
      <h1 className="tittle">Made to offer</h1>
      {/* product card */}
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl xl:px-28 flex flex-col md:flex-row ">
          <div className="w-full flex flex-col gap-0  items-center leftProduct h-product md:h-product md:w-1/2 px-1 md:px-2 overflow-hidden md:m-0 md:mt-3  md:py-16">
            <div className="flex w-3/4 flex-col py-3 text-xl text-white justify-center items-start">
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
                <a className="py-1 udtext underline" href="/">
                  Made to order
                </a>
                <a className="py-1 udtext  underline" href="/">
                  Altreations
                </a>
              </div>

              <div className=" mt-10 thiaLogo h-36  flex flex-col items-center w-full"></div>
            </div>
          </div>
          <div className="w-full rightProduct h-product  md:w-1/2 px-1 md:px-2 overflow-hidden md:m-0 md:mt-3 bg-red-800 md:py-16"></div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
