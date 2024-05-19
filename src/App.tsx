import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import HomePage from "./components/HomePage";
// import Component from "./components/Components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Landing />} />
        <Route path="/*" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
