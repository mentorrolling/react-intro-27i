import "./App.css";
// import IntroApp from "./components/IntroApp";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import Navbar from "./components/Navbar";
function App() {
  // const usuario = {
  //   id: 1,
  //   username: "alvaro2022",
  //   pass: "123456win",
  // };

  // const roles = ["Admin", "User", "Developer"];

  return (
    <div>
      <h1 className="text-center">Intro App</h1>
      <hr />
      {/* <IntroApp dato={usuario} roles={roles} /> */}
      <BrowserRouter>
        <Navbar />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
