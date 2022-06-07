import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import ErrorScreen from "../pages/ErrorScreen";

const RoutesApp = () => {
  //   switch (ruta) {
  //     case "/":
  //       home;
  //       break;
  //     case "/about":
  //       about;
  //       break;

  //     default:
  //       error404;
  //       break;
  //   }

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RoutesApp;
