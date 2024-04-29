import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ReactTyped } from "react-typed";

const linkStyle = {
  color: "blue",
  marginTop: "8px",
};

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar variant="dark" fixed="top" expand="lg" className="bg-body-tertiary">
      <Link className="home-link">
        <div className="typed-name">
          <ReactTyped
            strings={["Drew Casas"]}
            typeSpeed={100}
            showCursor={true}
          ></ReactTyped>
        </div>
      </Link>
      <div>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/Portfolio"
                className={
                  currentPage === "/Blog" ? "nav-link active" : "nav-link"
                }
                style={linkStyle}
              >
                Portfolio
              </Link>
              <Link
                to="/Resume"
                className={
                  currentPage === "/Contact" ? "nav-link active" : "nav-link"
                }
                style={linkStyle}
              >
                Resume
              </Link>{" "}
              <Link
                to="/Contact"
                className={
                  currentPage === "/Contact" ? "nav-link active" : "nav-link"
                }
                style={linkStyle}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
}

export default Navigation;
