import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../Components/DataContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { HandlePop, pop, handleLogin, errColor, message, user, isLoadingg,  } =
    useContext(DataContext);
  const HandleLogin = async () => {
    handleLogin(email, password);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      const redirectTimeout = setTimeout(() => {
        // navigate();
        window.location.href = user === "ADMIN" ? "/Admin" : "/";
      }, 2000);
      return () => clearTimeout(redirectTimeout);
    }
  }, [user, navigate]);

  const renderContent = () => {
    if (isLoadingg) {
      return (
        <div className="w-full flex justify-center items-center">
          <div className="h-16 w-16 border-4 flex justify-center items-center rounded-full border-x-blue-600 border-y-transparent animate-spinRight">
            <div className="h-[90%] w-[90%] border-4 rounded-full border-y-blue-600 border-x-transparent animate-spinLeft"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="formLight w-[85%] md:w-[60%] p-10 rounded-sm border-2 border-formBorder">
        {message && (
          <h2 className={`${errColor} text-center font-bold mb-4`}>
            {message}
          </h2>
        )}
        <form
          className="w-full flex flex-col justify-center items-center gap-5"
          onSubmit={HandleLogin}
        >
          <div className="w-[100%] md:w-[70%] flex flex-col gap-4">
            <input
              className="w-full p-2 rounded-tl-md rounded-br-md bg-input outline-none"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              required
            />
            <input
              className="w-full p-2 rounded-tl-md rounded-br-md bg-input outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className={`addRemovebtnLightMode_AddProduct p-2 rounded-md font-semibold ${
              pop ? "pop" : ""
            } hover:bg-trans2 hover:text-white transition ease-in-out duration-500`}
            onClick={(e) => {
              e.preventDefault();
              HandlePop();
              HandleLogin();
            }}
            type="submit"
            disabled={isLoadingg} // Disable button while loading
          >
            {isLoadingg ? "Logging in..." : "Login"}
          </button>
          <div>
            <div className="w-full flex justify-center items-center gap-2">
              <p>Dont have an account?</p>
              <Link className="text-blue-500" to={"/thia-e-comerce/Signup"}>
                Create Account
              </Link>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <p> Forgot your</p>
              <Link className="text-blue-500" to={""}>
                password
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-start gap-5 items-center bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1732998862/admin_h2sd6s.jpg')] bg-center bg-cover min-h-[100vh]">
      <div className="flex flex-col mt-14 justify-center items-center gap-4 w-full">
        <h2 className="text-2xl font-semibold">Login User</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default Login;
