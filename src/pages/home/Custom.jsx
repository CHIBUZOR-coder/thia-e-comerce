import Footer from "./Footer";

const Custom = () => {
  return (
    <div className=" ">
      <div className="flex flex-col md:px-28 px-4 bg-primary items-start  py-10">
        <div>
          <p className=" text-4xl my-4 font-semibold capitalize">
            Order Your Ideal Fit
          </p>
        </div>

        <div>
          <p>
            Thia's Custom fit are exclusive pieces made especially for you. This
            makes it possible for you to order our MTO-styles in your size
            whenever you want, even if our stock is sold out. This method also
            helps with undermining overproduction which we think is great - Good
            for you, for us and the environment! <br /> <br />
            Simply place your order as usual and wait for delivery in 3-4 weeks.
            We'll keep you updated on the status of your delivery and notify you
            once it has been shipped. <br /> <br />
            If you have any questions or requests for minor cloth fix, please
            click on the{" "}
            <a className="udtext altr  underline" href="/">
              Alterations
            </a>{" "}
            link! <br /> Doesn't fit? Don't worry! Returns and exchanges are
            accepted as usual, within 14 days of delivery, but to ensure you get
            the best possible fit, please visit our{" "}
            <a className="udtext altr  underline" href="/">
              {" "}
              size guide
            </a>{" "}
            . <br />
            <br />A luxury worth waiting for. ♡
          </p>
        </div>
      </div>

      <div className="md:px-28 px-4 w-full">
        <div className="customm w-full h-custom rounded-sm my-10"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Custom;
