import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import Navbar from "./components/Navbar";

import "./App.css";
// import IntroApp from "./components/IntroApp";

function App() {
  // const usuario = {
  //   id: 1,
  //   username: "alvaro2022",
  //   pass: "1234win",
  // };

  // const roles = ["Admin", "User", "Developer"];

  /*
  props={
    datos:{
        id:1,
        username:'alvaro2022',
        pass:'1234win'
      }
   }
  
  */

  return (
    <div>
      <h1>React Basic</h1>
      <hr />
      {/* <IntroApp usuario={usuario} roles={roles} /> */}
      <BrowserRouter>
        <Navbar />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
