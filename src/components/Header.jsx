import Navigation from "./Navigation";
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <>
      <h1 className="header">
        <ReactTyped
          strings={["Drew Casas"]}
          typeSpeed={100}
          showCursor={true}
        ></ReactTyped>
      </h1>
      <Navigation />
    </>
  );
}

export default Header;
