import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import angular from "../assets/images/ani.svg";
import lara from "../assets/images/lara.svg";
import mong from "../assets/images/mong.svg";
import node from "../assets/images/node.svg";
import pay from "../assets/images/pay.svg";
import php from "../assets/images/php.svg";
import reacjs from "../assets/images/reacjs.svg";
import tech from "../assets/images/tech.svg";
import wez from "../assets/images/wez.svg";
import wp from "../assets/images/wp.svg";
import haidorynavlogo from "../assets/images/haidorynavlogo.PNG";
import "./Nav.css";

const Navtop = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <div>
      <Navbar className={`customHeader ${stickyClass}`} expand="lg">
        <Container>
          <Row>
            <Col md={3} className="nav-grid-cutom">
              <h2 className="navLogo">
                <NavLink className="logohideone" exact to="/home">
                  <img src={haidorynavlogo} alt="navlogo" />
                </NavLink>
              </h2>
            </Col>
            <Col md={7} className="nav-grid-cutom">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto custom-navbar">
                  <NavLink exact to="/home">
                    <FaHome className="me-1 home-mar" />
                    Home
                  </NavLink>

                  <NavLink exact to="/about-us">
                    About Us
                  </NavLink>

                  <NavDropdown
                    title="Our Sister Concerns"
                    id="basic-nav-dropdown"
                    className="all-drop-down drop-down-nav custom-navbar-list p-0"
                  >
                    <Container className="p-0">
                      <Row className="p-0" style={{ marginLeft: ".7px" }}>
                        <Col lg={12} className="p-0">
                          {/* <h4>Hire & offshore services</h4> */}
                          <NavDropdown.Item>
                            <NavLink exact to="/challengers" className="p-0">
                              <p className="p-2 m-0 text-black dropdown-menu-line ">
                                Challengers Travels And Tours
                              </p>
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/haidory">
                              <p className="p-2 m-0 text-black dropdown-menu-line ">
                                Haidory Trade International
                              </p>
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/al-tayaba">
                              <p className="p-2 m-0 text-black dropdown-menu-line ">
                                Al Tayaba Cosultancy Center
                              </p>
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/modern-air">
                              <p className="p-2 m-0 text-black dropdown-menu-line ">
                                Modern Air International
                              </p>
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/kaniz-travels">
                              <p className="p-2 m-0 text-black dropdown-menu-line ">
                                Kaniz Travels
                              </p>
                            </NavLink>
                          </NavDropdown.Item>
                          {/* <NavDropdown.Item>
                            <NavLink
                              exact
                              to="/software-qa-and-testing-services"
                            >
                              Software QA & Testing Services
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/ui-ux-design">
                              UI/UX Design Services
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/database-management-services">
                              Database Management Services
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/cyber-security">
                              Cyber Security Services
                            </NavLink>
                          </NavDropdown.Item> */}
                        </Col>
                        {/* <Col lg={4}>
                          <h4>Frontend development</h4>
                          <NavDropdown.Item>
                            <NavLink exact to="/angular">
                              Angular JS Development
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/nodejs">
                              Node JS Development
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink exact to="/reactjs">
                              React JS Development
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink
                              exact
                              to="/progressive-web-app-development"
                            >
                              Progressive Web App Development
                            </NavLink>
                          </NavDropdown.Item>

                          <NavDropdown.Item>
                            <NavLink exact to="/vuejs">
                              Vue JS Development
                            </NavLink>
                          </NavDropdown.Item>
                        </Col>
                        <Col lg={4}>
                          <h4>Frontend development</h4>

                          <NavDropdown.Item>
                            <NavLink exact to="/php">
                              PHP Web Development
                            </NavLink>
                          </NavDropdown.Item>

                          <NavDropdown.Item>
                            <NavLink exact to="/python">
                              Python Development Services
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink
                              exact
                              to="/erp-software-development-services"
                            >
                              ERP Software Development
                            </NavLink>
                          </NavDropdown.Item>

                          <NavDropdown.Item>
                            <NavLink exact to="/java-development">
                              Java Development
                            </NavLink>
                          </NavDropdown.Item>
                        </Col> */}
                      </Row>
                    </Container>
                  </NavDropdown>
                  {/* <NavDropdown
                    title="About Us"
                    id="basic-nav-dropdown"
                    className="all-drop-down drop-down-nav"
                  >
                    <Container>
                      <Row>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/angular">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={angular} alt="angular" />{" "}
                              </span>
                              <p className="text-white">Angularjs</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/reactjs">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={reacjs} alt="reacjs" />{" "}
                              </span>
                              <p className="text-white">Reactjs</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/python">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={pay} alt="pay" />{" "}
                              </span>
                              <p className="text-white">Python</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/aspnet">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={tech} alt="tech" />{" "}
                              </span>
                              <p className="text-white">ASP.NET MVC</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/vuejs">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={wez} alt="wez" />{" "}
                              </span>
                              <p className="text-white">Vue JS</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/php">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={php} alt="php" />{" "}
                              </span>
                              <p className="text-white">PHP</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/nodejs">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={node} alt="node" />{" "}
                              </span>
                              <p className="text-white">Node.js</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/laravel">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={lara} alt="lara" />{" "}
                              </span>
                              <p className="text-white">Laravel</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/magento">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={mong} alt="mong" />{" "}
                              </span>
                              <p className="text-white">Magento</p>
                            </div>
                          </NavLink>
                        </Col>
                        <Col lg={3} sm={6}>
                          <NavLink exact to="/wordpress">
                            <div className="block-item">
                              {" "}
                              <span>
                                {" "}
                                <img src={wp} alt="wp" />{" "}
                              </span>
                              <p className="text-white">Wordpress</p>
                            </div>
                          </NavLink>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown> */}

                  <NavLink exact to="/contact">
                    Contact
                  </NavLink>

                  <NavLink className="activenone" exact to="">
                    <Col md={2} className="navButton dis-hide-show">
                      <Button variant="primary btn-custom mt-1 ps-4 pe-4">
                        Call Us
                      </Button>
                    </Col>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col md={2} className="navButton activenone dis-none">
              <NavLink className="activenone" exact to="/contact">
                <Button variant="primary btn-custom mt-1 ps-2 pe-2">
                  <p style={{ marginBottom: "0" }}> Call Us: 01822448316</p>
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navtop;
