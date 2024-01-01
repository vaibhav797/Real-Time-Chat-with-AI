import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomePage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <Navbar></Navbar>
      <div className="flex justify-around w-full h-full items-start">
        <img src={"/images/frame2.png"} className="py-24 w-2/6" alt="frame" />
        {login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} />}
      </div>
    </div>
  );
};

export default HomePage;
