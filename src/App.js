import "./assets/styles/App.scss";
import logo from "./assets/images/cookchef-d.png";

function App() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <button>Whislist</button>
        <button>Connexion</button>
      </ul>
    </header>
  );
}

export default App;
