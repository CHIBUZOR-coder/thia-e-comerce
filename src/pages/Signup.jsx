import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataResolve from "./home/DataResolve";
import { DataContext } from "../Components/DataContext";

const Signup = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [country, setCountry] = useState("");
  const [post, setPost] = useState(false);

  const { HandlePop, pop, handleLogin, UserInfo, IsAuthentified } =
    useContext(DataContext);
  const navigate = useNavigate();

  const feilds = {
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    address,
    address2,
    city,
    postal_code,
    country,
  };

  const HandleSignup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
          confirmPassword,
          address,
          address2,
          city,
          postal_code,
          country,
        }),
      });

      let data;
      if (res.ok) {
        data = await res.json();
        console.log(data);
        setTimeout(() => {
          // window.location.href = "/thia-e-comerce/Login";
          navigate("/thia-e-comerce/Login");
        }, 2000);
      }
    } catch (error) {
      err = await res.json();
      console.log("Error occored", err.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center p-8 min-h-[100vh] bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1732998862/admin_h2sd6s.jpg')] bg-cover bg-center">
      <div className="formLight w-[70%] md:w-[60%] p-10 rounded-sm border-2 border-formBorder ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HandleSignup();
          }}
          className="w-full  flex flex-col justify-center items-center p-2 gap-4"
        >
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setFirstname(e.target.value);
                // console.log(firstname);
              }}
              className="createAcctInput"
              type="text"
              required
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setLastname(e.target.value);
                // console.log(lastname);
              }}
              className="createAcctInput"
              type="text"
              required
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
                // console.log(email);
              }}
              type="text"
              className="createAcctInput"
              required
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setPhone(e.target.value);
                // console.log(phone);
              }}
              type="text"
              className="createAcctInput"
              required
              name="phone"
              id="phone"
              placeholder="phone"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
                // console.log(password);
              }}
              className="createAcctInput"
              type="password"
              required
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setConfirmpassword(e.target.value);
                // console.log(confirmPassword);
              }}
              className="createAcctInput"
              type="password"
              required
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirmPassword"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setAddress(e.target.value);
                // console.log(adress);
              }}
              className="createAcctInput"
              type="text"
              name="adress"
              required
              id="adress"
              placeholder="Billing Adress"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setAddress2(e.target.value);
                // console.log(adress2);
              }}
              className="createAcctInput"
              type="text"
              name="adress2"
              id="adress2"
              placeholder="Delivery Adress"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setCity(e.target.value);
                // console.log(city);
              }}
              className="bg-red-400 w-full createAcctInput"
              type="text"
              name="city"
              id="city"
              placeholder="city"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setPostal_code(e.target.value);
                // console.log(postal_code);
              }}
              className="createAcctInput"
              type="text"
              name="postal_code"
              id="postal_code"
              placeholder="postal code"
            />
          </div>
          <div className="createAcctInputDiv">
            <input
              onChange={(e) => {
                e.preventDefault();
                setCountry(e.target.value);
                // console.log(country);
              }}
              className=" createAcctInput"
              type="text"
              name="country"
              id="country"
              placeholder="country (optional for non Nigerians)"
            />
          </div>

          <div className="w-full flex justify-center items-center mt-4">
            <button
              className={`addRemovebtnLightMode_AddProduct p-2 w-[80%] rounded-md font-semibold ${
                pop ? "pop" : ""
              } hover:bg-trans2 hover:text-white transition ease-in-out duration-500`}
              onClick={HandlePop}
              type="submit"
              // disabled={isLoading} // Disable button while loading
            >
              {/* {isLoading ? "Logging in..." : "Login"} */}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
