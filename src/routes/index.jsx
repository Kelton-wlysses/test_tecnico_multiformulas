import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SplashScreen from "../pages/SplashScreen";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<SplashScreen />} />
    <Route path="/home" element={<Home />} />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
