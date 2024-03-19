import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import maloch from "../assets/images/maloch_preview.png";
import apiImage from "../assets/images/social-network-api.png";
import freddyImage from "../assets/images/freddy.png";
import schedulerImage from "../assets/images/workday-scheduler.png";
import techBlogImage from "../assets/images/techblog.png";
import ecommerceImage from "../assets/images/ecommerse.png";
import hobbyImage from "../assets/images/hobbyshop.PNG";
import "../assets/style/App.css";

function Project() {
  return (
    <Row xs={1} md={2} lg={2} className="g-5 mx-5 card-group">
      <Col>
        <Card className="project-card">
          <a href="https://hobby-ecommerce.onrender.com/">
            <Card.Img className="project-img" variant="top" src={hobbyImage} />
          </a>
          <Card.Body>
            <Card.Title>Hobby E-commerce Site</Card.Title>
            <Card.Text className="project-description">
              Hobby themed marketplace MERN Application. Visit the GitHub repo{" "}
              <a href="https://github.com/cazthetraveler/Hobby-E-Commerce">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://github.com/drewhouses/wizard-escape">
            <Card.Img className="project-img" variant="top" src={maloch} />
          </a>
          <Card.Body>
            <Card.Title>Maloch Cometh</Card.Title>
            <Card.Text className="project-description">
              Point and click adventure puzzle game playable from the browswer.
              Visit the GitHub repo{" "}
              <a href="https://murmuring-springs-90075-ee5dfd14bef1.herokuapp.com/">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://github.com/drewhouses/social-network-api">
            <Card.Img className="project-img" variant="top" src={apiImage} />
          </a>
          <Card.Body>
            <Card.Title>Social Network API</Card.Title>
            <Card.Text className="project-description">
              A social network API that uses a MongoDB backend. Visit the GitHub
              repo{" "}
              <a href="https://github.com/drewhouses/social-network-api">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://drewhouses.github.io/m5-workday-scheduler/">
            <Card.Img
              className="project-img"
              variant="top"
              src={schedulerImage}
            />
          </a>
          <Card.Body>
            <Card.Title>Workday Scheduling App</Card.Title>
            <Card.Text className="project-description">
              Visit the GitHub repo{" "}
              <a href="https://github.com/drewhouses/m5-workday-scheduler">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="project-card">
          <a href="https://drewhouses.github.io/freddys-flick-picks/">
            <Card.Img className="project-img" variant="top" src={freddyImage} />
          </a>
          <Card.Body>
            <Card.Title>Freddy`s Flick Picks</Card.Title>
            <Card.Text className="project-description">
              Random horror movie generator to help get you ready for the spooky
              season. Visit the GitHub repo{" "}
              <a href="https://github.com/drewhouses/freddys-flick-picks">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://drewhouses-tech-blog-2c0acf1f8631.herokuapp.com/">
            <Card.Img
              className="project-img"
              variant="top"
              src={techBlogImage}
            />
          </a>
          <Card.Body>
            <Card.Title>Tech Blog</Card.Title>
            <Card.Text className="project-description">
              Tech Blog web application. Visit the GitHub repo{" "}
              <a href="https://github.com/drewhouses/tech-blog">here</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://github.com/drewhouses/ecommerce-backend">
            <Card.Img
              className="project-img"
              variant="top"
              src={ecommerceImage}
            />
          </a>
          <Card.Body>
            <Card.Title>E-Commerce Backend</Card.Title>
            <Card.Text className="project-description">
              ExpressJS application with MySQL backend DB using Sequelize. Visit
              the GitHub repo{" "}
              <a href="https://github.com/drewhouses/ecommerce-backend">here</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
