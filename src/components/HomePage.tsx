import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Header from "./Header";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ViewAll from "./ViewAll";
import Timetable from "./Timetable";

const HomePage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);

  const toggle = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="flex flex-row w-full ">
      <SideBar showSideBar={showSideBar} toggle={toggle} />
      <div className="flex flex-col w-full">
        <Header showSideBar={showSideBar} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/view-all" element={<ViewAll />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
