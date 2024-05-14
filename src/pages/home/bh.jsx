const MoreProducts = () => {
  return (
    <div className=" my-4">
      <h2 className="tittle">Or Subscribe To Our Newsletter</h2>

      {/* product card */}
      <div className="max-w-screen-2xl xl:px-28 flex flex-col md:flex-row">
        <div className="w-full flex flex-col gap-0  items-center leftProduct h-product md:w-1/2 px-1 md:px-2 overflow-hidden md:m-0 mt-3  md:py-16">
          <div className="flex w-3/4 flex-col py-3 text-xl text-white justify-center items-center">
            <p className="py-1">
              We are proud to offer you our service Made to order. It means you
              can order our Essential styles in your size whenever you want,
              even if our stock is sold out. We also do smaller alterations if
              neccessary.
            </p>
            
          </div>
        </div>
        <div className="w-full rightProduct h-product md:w-1/2 px-1 md:px-2 overflow-hidden md:m-0 mt-3 bg-red-800 md:py-16"></div>
      </div>

      <div className="flex flex-col  w-full  items-center">
        <div className="flex flex-col md:flex-row w-3/4 text-center justify-center">
          <p className="px-20 py-3">
            Read more about free shipping and free exchanges. Payments can be
            done with credit card or Klarna after shipping and payment is
            chosen. Returns and exchanges with full refund is possible 14 days
            of delivery. Please, follow our care guides for long lasting Kerber
            wardrobe and don´t miss out on special offers - sign up to our news
            letter!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
