import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ReactTyped } from "react-typed";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <div className="typed-name">
        <ReactTyped
          strings={["Drew Casas"]}
          typeSpeed={100}
          showCursor={true}
        ></ReactTyped>
      </div>
      <div>
        <Container>
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

              <Nav.Link>
                <Link
                  to="/Resume"
                  className={
                    currentPage === "/Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/Contact"
                  className={
                    currentPage === "/Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
}

export default Navigation;
