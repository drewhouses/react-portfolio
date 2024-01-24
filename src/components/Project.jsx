import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import maloch from "../assets/images/maloch_preview.png";
import apiImage from "../assets/images/social-network-api.png";
import freddyImage from "../assets/images/freddy.png";
import schedulerImage from "../assets/images/workday-scheduler.png";
import techBlogImage from "../assets/images/techblog.png";
import ecommerceImage from "../assets/images/ecommerse.png";
import "../assets/style/App.css";

function Project() {
  return (
    <Row xs={1} md={2} className="g-5 mx-5 card-group">
      <Col>
        <Card className="project-card">
          <a href="https://github.com/drewhouses/wizard-escape">
            <Card.Img variant="top" src={maloch} />
          </a>
          <Card.Body>
            <Card.Title>Maloch Cometh</Card.Title>
            <Card.Text className="project-description">
              Maloch Cometh is a point and click adventure puzzle game playable
              from the browswer. You can visit the GitHub repo{" "}
              <a href="https://murmuring-springs-90075-ee5dfd14bef1.herokuapp.com/">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://github.com/drewhouses/social-network-api">
            <Card.Img variant="top" src={apiImage} />
          </a>
          <Card.Body>
            <Card.Title>Social Network API</Card.Title>
            <Card.Text className="project-description">
              A social network API that uses a MongoDB backend. You can visit
              the GitHub repo{" "}
              <a href="https://github.com/drewhouses/social-network-api">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://drewhouses.github.io/m5-workday-scheduler/">
            <Card.Img variant="top" src={schedulerImage} />
          </a>
          <Card.Body>
            <Card.Title>Workday Scheduling App</Card.Title>
            <Card.Text className="project-description">
              You can visit the GitHub repo{" "}
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
            <Card.Img variant="top" src={freddyImage} />
          </a>
          <Card.Body>
            <Card.Title>Freddy`s Flick Picks</Card.Title>
            <Card.Text className="project-description">
              This is a random horror movie generator web application to help
              get you ready for the spooky season. You can visit the GitHub repo{" "}
              <a href="https://github.com/drewhouses/freddys-flick-picks">
                here
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://drewhouses-tech-blog-2c0acf1f8631.herokuapp.com/">
            <Card.Img variant="top" src={techBlogImage} />
          </a>
          <Card.Body>
            <Card.Title>Tech Blog</Card.Title>
            <Card.Text className="project-description">
              Tech Blog web application that allows you to signup and share blog
              posts with other users. You can visit the GitHub repo{" "}
              <a href="https://github.com/drewhouses/tech-blog">here</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <a href="https://github.com/drewhouses/ecommerce-backend">
            <Card.Img variant="top" src={ecommerceImage} />
          </a>
          <Card.Body>
            <Card.Title>E-Commerce Backend</Card.Title>
            <Card.Text className="project-description">
              ExpressJS application tha tconnects to a MySQL backend DB using
              Sequelize. You can visit the GitHub repo{" "}
              <a href="https://github.com/drewhouses/ecommerce-backend">here</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
