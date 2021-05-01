import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            className="about-img "
          >
            <img src={about} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className=""
          >
            <h1 className="title" style={{ paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading my-4">
       MY  <strong className="purple">SKILLS! </strong>
        </h1>
        <div class="row">
														<div class="col-lg-12">
																<div class="container">

																		<h4 className="text-left my-2">Bootstrap</h4>
																		<div class="progress ">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s  progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
																		</div>
																		<h4 className="text-left my-2">CSS</h4>
																		<div class="progress">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-info" role="progressbar" style={{width: '85%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
																		</div>
																		<h4 className="text-left my-2">JavaScript</h4>
																		<div class="progress">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90&</div>
																		</div>
																		<h4 className="text-left my-2">WordPress</h4>
																		<div class="progress">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-muted" role="progressbar" style={{width: '70%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">40&</div>
																		</div>
                                    <h4 className="text-left my-2">React</h4>
																		<div class="progress">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-info" role="progressbar" style={{width: '85%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
																		</div>
                                    <h4 className="text-left my-2">Node</h4>
																		<div class="progress ">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s  progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
																		</div>
                                    <h4 className="text-left my-2">MongoDB</h4>
																		<div class="progress">
																		  <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90&</div>
																		</div>
																</div>
														</div>
												</div>
        <h1 className="project-heading my-4">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="cib-pytorch" />
          <Techstack iconName="cib-tensorflow" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-anaconda" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-zeit" />
          <Techstack iconName="cib-heroku" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
