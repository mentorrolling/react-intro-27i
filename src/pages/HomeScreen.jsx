import React from "react";
import IntroApp from "../components/IntroApp";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Home Screen</h1>
          <hr />
        </div>
      </div>
      <IntroApp />
    </div>
  );
};

export default HomeScreen;
