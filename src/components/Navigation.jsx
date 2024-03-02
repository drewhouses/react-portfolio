import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactTyped } from "react-typed";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav-container">
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <div className="typed-name">
          <ReactTyped
            strings={["Drew Casas"]}
            typeSpeed={100}
            showCursor={true}
          ></ReactTyped>
        </div>

        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">
                <Link
                  to="/About"
                  className={
                    currentPage === "/About" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/Portfolio"
                  className={
                    currentPage === "/Blog" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </Nav.Link>
              <NavDropdown
                className="nav-dropdown"
                title="Other"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <Link
                    to="/Contact"
                    className={
                      currentPage === "/Contact"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Contact
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link
                    to="/Resume"
                    className={
                      currentPage === "/Contact"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Resume
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
