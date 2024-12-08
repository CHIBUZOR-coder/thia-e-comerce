import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Components/DataContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const { HandlePop, pop, roleSetter } = useContext(DataContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.role);
        roleSetter(data.role);
        setMessage(data.message);
        console.log("Login successful:", data.message);
      } else {
        throw new Error(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      const redirectTimeout = setTimeout(() => {
        navigate(
          user === "ADMIN" ? "/thia-e-comerce/Admin" : "/thia-e-comerce/"
        );
      }, 2000);
      return () => clearTimeout(redirectTimeout);
    }
  }, [user, navigate]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="w-full flex justify-center items-center">
          <div className="h-16 w-16 border-4 flex justify-center items-center rounded-full border-x-blue-600 border-y-transparent animate-spinRight">
            <div className="h-[90%] w-[90%] border-4 rounded-full border-y-blue-600 border-x-transparent animate-spinLeft"></div>
          </div>
        </div>
      );
    }

    if (Error) {
    setTimeout(() => {
        return <h2 className="text-3xl font-bold">{message}</h2>;
    }, 4000);
    }

    return (
      <div className="formLight w-[85%] md:w-[60%] p-10 rounded-sm border-2 border-formBorder">
        <form
          className="w-full flex flex-col justify-center items-center gap-5"
          onSubmit={handleLogin}
        >
          <div className="w-[100%] md:w-[70%] flex flex-col gap-4">
            <input
              className="w-full p-2 rounded-tl-md rounded-br-md bg-input outline-none"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={HandlePop}
            type="submit"
          >
            Login
          </button>
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
