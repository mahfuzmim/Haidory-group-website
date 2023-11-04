import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import "./Footer.css";
import logo2 from "../assets/images/logo2.svg";
import { NavLink } from "react-router-dom";
import { FaPeriscope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { FaFax } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import getques from "../assets/images/getques.svg";
import bd from "../assets/images/bd.svg";
import usa from "../assets/images/usa.webp";
import Modal from "react-bootstrap/Modal";
import BackToTop from "react-back-to-top-button";
import motherhaidory from "../assets/images/motherhaidory.PNG";
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="footer-area">
      <section className="all-company-feature  mt-sm-5 mb-sm-5   mt-2 mb-2">
        {/* <Container data-aos="fade-up"
     data-aos-duration="3000">
      <Row>
        <Col md={12} className="text-center">
        <img src={getques} alt="clientimg2"  className='get-quote' />
        </Col>
      </Row>
    </Container> */}
        <div className="bg-get-quote">
          <Container>
            <Row>
              <Col md={8}>
                <h3>Haidory Group</h3>
                <h2>
                  Planning to visit, work
                  <br />
                  or settle in abroad?
                </h2>
              </Col>
              <Col md={4} className="text-end">
                <Button variant="primary btn-custom mt-3 btn-big border-white w260">
                  Call us: 01822448316
                  {/* <FaArrowRight className="ms-5" /> */}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-bottom-0"></Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>

      <Container>
        <Row>
          <Col md={5}>
            <h3>
              <NavLink className="logohideone" exact to="/home">
                <img src={motherhaidory} alt="logo2" className="footerlogo" />
              </NavLink>
            </h3>
            <p className=" mt-3 jus-text">
              {" "}
              We are pleased to introduce Haidory Group, one of the professional
              and experienced Hajj,Umrah and Manpower exporting companies in
              Bangladesh. We are an authorized agency of the Government of
              Bangladesh. Since the day of inception, we are always focused on
              putting client preference fast. Hairdory Group has ensured
              transparency and honesty in every circumstance.{" "}
            </p>
          </Col>
          <Col md={2} className="link-list company-list-link">
            <h3>About Us</h3>
            <ul className="list-group list-inline">
              <li>
                <NavLink exact to="/challengers">
                  <p className="p-0 m-0 text-black swiftlink">
                    Challengers Travels And Tours
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/haidory">
                  <p className="p-0 m-0 text-black swiftlink">
                    Haidory Trade International
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/al-tayaba">
                  <p className="p-0 m-0 text-black swiftlink">
                    Al Tayaba Cosultancy Center
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/modern-air">
                  <p className="p-0 m-0 text-black swiftlink">
                    Modern Air International
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/kaniz-travels">
                  <p className="p-0 m-0 text-black swiftlink">Kaniz Travels</p>
                </NavLink>
              </li>
            </ul>
          </Col>

          <Col md={5}>
            <h3>Address</h3>
            <ul className=" list-inline company-list-link">
              <li>
                {" "}
                <span>
                  <FaPeriscope />
                </span>
                <label>
                  {" "}
                  City Heart Building, 5th Floor, 67, Nayapaltan, Dhaka,
                  Bangladesh.{" "}
                </label>
              </li>
              <li className="d-flex">
                {" "}
                <span>
                  <FaMobileAlt />
                </span>
                <label> 01711591470, 01711140377, 01711140364 </label>
                {/* <label> 01711140377, </label>
                <label> 01711140364 </label> */}
              </li>
              <li>
                {" "}
                <span>
                  <FaFax />
                </span>
                <label> 88-02-48312653 </label>
              </li>
              <li className="d-flex">
                {" "}
                <span>
                  <AiFillMail />
                </span>
                <label>
                  {" "}
                  haidorytradeintl@gmail.com, challengerstravels@gmail.com{" "}
                </label>
                {/* <label> challengerstravels@gmail.com </label> */}
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <hr />
        </Row>
        <Row className="footer-bottom">
          <Col md={4}>
            <p> © 2023 All Rights Reserved By Haidory Group </p>
          </Col>
          <Col>
            <p>
              <a
                className="swiftlink"
                style={{ color: "black" }}
                href="https://www.swiftitltd.com/"
              >
                Design and Developed By Swift IT Ltd
              </a>
            </p>
          </Col>
          <Col md={4}>
            <div className="social-icon">
              <NavLink exact to="">
                <Button variant="btn">
                  <FaFacebookF />
                </Button>
              </NavLink>
              <NavLink exact to="">
                <Button variant="btn">
                  <FaTwitter />
                </Button>
              </NavLink>

              <Button variant="btn">
                <FaLinkedinIn />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <BackToTop
        showOnScrollDown
        showAt={1200}
        speed={1500}
        easing="easeInOutQuint"
      >
        <button className="back-to-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
      </BackToTop>
    </div>
  );
};

export default Footer;
