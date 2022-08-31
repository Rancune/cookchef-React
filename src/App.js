import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import styles from "./assets/styles/App.module.scss";
import Admin from "./pages/Admin/Admin";
import Details from "./pages/DetailsRecipe/Details";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/auth/login" element={<Auth />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
