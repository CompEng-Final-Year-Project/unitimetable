import  { useState } from "react";
import avatar from "../assets/avatar1.png";
import Login from "./auth/Login";

const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="text-center justify-center w-full items-center flex max-sm:flex-col flex-row hero-content">
          <div className={` text-center w-full justify-center items-center self-center content-center ${showLogin && 'max-sm:hidden'}`}>
            <img src={avatar} alt="avatar" className="w-[40rem]" />
          </div>
          {showLogin ? (
            <Login setShowLogin={setShowLogin} />
          ) : (
            <div className="flex flex-col items-center w-full  ">
              <h1 className="text-6xl font-semibold">UniTimetable</h1>
              <p className="text-2xl font-thin">University Timetable</p>
              <button
                onClick={() => setShowLogin(true)}
                className="btn btn-primary px-14 mt-16 rounded-2xl"
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
