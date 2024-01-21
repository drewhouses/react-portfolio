import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
