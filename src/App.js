import "./App.css";
import IntroApp from "./components/IntroApp";

function App() {
  const usuario = {
    id: 1,
    username: "alvaro2022",
    pass: "123456win",
  };

  const roles = ["Admin", "User", "Developer"];

  return (
    <div className="App">
      <h1>Intro App</h1>
      <hr />
      <IntroApp dato={usuario} roles={roles} />
    </div>
  );
}

export default App;
