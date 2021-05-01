import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Resume from "../Resume/Resume";
import Projects from './../Projects/Projects';
import About from "../About/About";
import Services from "../Services/Services";
import LifeJourney from "../LifeJourney/LifeJourney";
import Contact from './../Contact/Contact';
import Testimonials from './../Testimonials/Testimonials';
import headerBg from '../../Assets/headerBg.png'
import Button from "react-bootstrap/Button";
function Home() {
  return (
    <>
      <Container fluid className="header-area home-content">
        <Row>
          <Col md={6} className="home-header">
            <div className="d-flex justify-content-center ml-5 ml-md-0 animate__backInUp wow animate__animated animate__fast animate__delay-1s">
              <div>
                <span className="d-block world" style={{ color: 'rgba(198,201,216,.75)' }}>WELCOME TO MY WORLD</span>
                <h1 className="title" className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>


                <h1 className="title text-white">
                  I’m Maruf Billah
              </h1>
                <div style={{ textAlign: "left" }}>
                  <Type />
                </div>
                <h1 className="title text-white">
                  based in USA.
             </h1>
             <Button className="mt-4 downloadCV" variant="primary" href="https://drive.google.com/file/d/1f7MjprPw58cM3vEjiIoQRRVEIBstJMyt/view" target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={headerBg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Particle />
        {/* <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MARUF BILLAH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container> */}

      </Container>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <LifeJourney></LifeJourney>
      <Resume></Resume>
      <Testimonials></Testimonials>
      <Contact></Contact>


    </>
  );
}

export default Home;
