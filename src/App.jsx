import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/style/Normalize.css";
import "./assets/style/App.css";

function App() {
  const cName = "Drew's Company";
  return (
    <>
      <Header cName={cName} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
