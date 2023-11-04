import React from "react";
import Common from "../../layouts/Common";
// import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FaLockOpen } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaWaveSquare } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { FaScrewdriver } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import worka from "../../assets/images/worka.png";
import workb from "../../assets/images/workb.png";
import workc from "../../assets/images/workc.png";
import workd from "../../assets/images/workd.png";
import worke from "../../assets/images/worke.png";
import workf from "../../assets/images/workf.png";
import indu1 from "../../assets/images/indu1.svg";
import indu2 from "../../assets/images/indu2.svg";
import indu3 from "../../assets/images/indu3.svg";
import indu4 from "../../assets/images/indu4.svg";
import indu5 from "../../assets/images/indu5.svg";
import indu6 from "../../assets/images/indu6.svg";
import indcom from "../../assets/images/indcom.svg";
import about from "../../assets/images/haidoryabout.png";
import serviceall from "../../assets/images/serviceall.svg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./haidory.module.css";
import haidoryimg from "../../assets/images/Hydori.jpeg";
import { RiPassportFill } from "react-icons/ri";

const Haidory = () => {
  const options2 = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <Common>
      <section className={styles.haidorybannersection}>
        <div className=""></div>
      </section>
      <section className=" pt-5">
        <div className="sub-banner">
          <Container>
            <Row>
              <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
                <img
                  className="image-logo-sisters"
                  src={haidoryimg}
                  alt="logo"
                />
              </Col>
              <Col md={6} className="mt-4 pt-3 mb-4" data-aos="fade-right">
                <h2>About Haidory Trade International</h2>
                <p style={{ fontSize: "1.3em" }}>
                  {" "}
                  A sister concern of Haidroygroup, started its journey on 11th
                  July 1991. It has been the leading recruiting agency in
                  Bangladesh with honesty and commitments. We assist our clients
                  with utmost sincerity to make the journey seamless. It is a
                  Bangladesh Government-approved recruiting agency holding the
                  recruiting license no: 240. From our organization, we have
                  sent manpower with transparency and reliability to the Kingdom
                  of Saudi Arabia (KSA), Malaysia, Dubai, and many other Middle
                  Eastern countries. Our organization is enlisted with the
                  Bangladesh Saudi Embassy and Malaysia FWCMH approved.Haidory
                  Trade International contributed in increasing foreign
                  remittance by sending manpower to abroad.It is also member of
                  Bangladesh Association of International Recruiting Agencies
                  (BAIRA)
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="all-company-feature bg-deep-gray pt-0 pb-0">
        <Container>
          <Row>
            <Col md={6} className="mt-0 pt-5 mb-0" data-aos="fade-right">
              <h2>Why Haidory Trade International?</h2>
              <p> </p>
              <ul className="list-inline list-group ul-list-about mt-4">
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.2em" }}>Honesty</p>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.2em" }}>Commitment</p>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.2em" }}>Transparency</p>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.2em" }}>Reliability</p>
                </li>
              </ul>
            </Col>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
              <img className="abouimg" src={about} alt="about" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="all-company-feature mb-5 all-services mt-service com-miss-vis">
        <div className="ml-3">
          <Row>
            <Col md={12} className="text-center mt-4 mb-0">
              <h2>Our Services</h2>
              <p className="text-center">
                {" "}
                We provide different types of services{" "}
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4}>
              <div className={styles.haidorycompanyslide}>
                <Row>
                  <Col md={12} lg={3} className="p-0">
                    <div className="slider-icon icon-all">
                      <RiPassportFill />
                    </div>
                  </Col>
                  <Col md={12} lg={9} className="ps-0">
                    <h4 className="p-0" style={{ width: "121%" }}>
                      Work Visa Service for KSA
                    </h4>
                    <p className="mb-0">
                      {" "}
                      We provide and assist different types of working visa for
                      Saudi Arabia (KSA).
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.haidorycompanyslide}>
                <Row>
                  <Col md={12} lg={3} className="p-0">
                    <div className="slider-icon icon-all">
                      <RiPassportFill />
                    </div>
                  </Col>
                  <Col md={12} lg={9} className="ps-0">
                    <h4 className="p-0" style={{ width: "107%" }}>
                      Work Visa Service for Dubai
                    </h4>
                    <p className="mb-0">
                      {" "}
                      We provide and assist different types of working visa for
                      Dubai
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.haidorycompanyslide}>
                <Row>
                  <Col md={12} lg={3} className="p-0">
                    <div className="slider-icon icon-all">
                      <RiPassportFill />
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="ps-0">
                    <h4 className="p-0">Work Visa Service for Malaysia</h4>
                    <p className="mb-0">
                      {" "}
                      We provide and assist different types of working visa for
                      Malaysia.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* <section className="all-company-feature bg-deep-gray mt-5 pt-5">
        <Container>
          <Row>
            <Col md={12} className="text-start mt-4 mb-4">
              <h2>Our Recent Works</h2>
            </Col>
          </Row>
          <Row>
            <OwlCarousel
              className="owl-theme slider-custom"
              {...options2}
              loop
              margin={20}
              nav
            >
              <div class="item">
                <div className="work-block-slide">
                  {" "}
                  <img
                    className="img-width-full"
                    src={worka}
                    alt="worka"
                  />{" "}
                </div>
              </div>
              <div class="item">
                <div className="work-block-slide">
                  {" "}
                  <img
                    className="img-width-full"
                    src={workb}
                    alt="workb"
                  />{" "}
                </div>
              </div>
              <div class="item">
                <div className="work-block-slide">
                  {" "}
                  <img
                    className="img-width-full"
                    src={workc}
                    alt="workc"
                  />{" "}
                </div>
              </div>
              <div class="item">
                <div className="work-block-slide">
                  {" "}
                  <img
                    className="img-width-full"
                    src={workd}
                    alt="workd"
                  />{" "}
                </div>
              </div>

              <div class="item">
                <div className="work-block-slide">
                  {" "}
                  <img
                    className="img-width-full"
                    src={worke}
                    alt="worke"
                  />{" "}
                </div>
              </div>
              <div class="item">
                <div className="work-block-slide">
                  {" "}
                  <img
                    className="img-width-full"
                    src={workf}
                    alt="workf"
                  />{" "}
                </div>
              </div>
            </OwlCarousel>
          </Row>
        </Container>
      </section> */}
      {/* <section className="all-company-feature">
        <Container>
          <Row>
            <Col md={12} className="text-center mt-5 pt-5">
              <h2>Our Industry Experience</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <div className="company-feature industry-feature">
                <div
                  className="indus-img"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={indu1} alt="indu1" />{" "}
                </div>
                <h5 className="text-center mt-5">Ecommerce</h5>
                <p>
                  {" "}
                  The e-commerce solutions offered at Nexalinx are on-the-go and
                  assured to bring benefits with increased ROI and overall
                  productivity. We provide custom e-commerce development
                  services and develop web apps for any kind of business across
                  various industries and enterprises ranging from B2B and B2C
                  trading networks to small, middle-sized, and large businesses.
                  These custom solutions meet the user’s requirements by
                  applying specific areas of specialization.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="company-feature industry-feature">
                <div
                  className="indus-img"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={indu2} alt="indu2" />{" "}
                </div>
                <h5 className="text-center mt-5">Healthcare</h5>
                <p>
                  {" "}
                  At Nexalinx, we help you develop healthcare software
                  applications that automate processes such as patient
                  management, lab management, test result analysis, and data
                  collection. For the medical technology companies, from
                  consulting to maintenance and support we always lent our
                  supporting hands to tackle your technological dilemmas.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="company-feature industry-feature">
                <div
                  className="indus-img"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={indu3} alt="indu3" />{" "}
                </div>
                <h5 className="text-center mt-5">Logistics</h5>
                <p>
                  The experts at Nexalinx help you build innovative and
                  impressive tech-enabled logistics software applications to
                  streamline the supply chain and provide flawless customer
                  support. The warehouse management software also makes sure to
                  enhance warehouse efficiency. The expert logistics and
                  transportation management software offered by Nexalinx thereby
                  help you do your tasks more effectively.
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="company-feature industry-feature">
                <div
                  className="indus-img"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={indu4} alt="indu4" />{" "}
                </div>
                <h5 className="text-center mt-5">Education</h5>
                <p>
                  {" "}
                  In the education field, Nexalinx is engaged in integrated
                  learning system software development, virtual learning
                  management system, LMS software development, and even
                  personalized e-learning software systems. Interactive,
                  convenient, and cost-effective solutions are what we offer at
                  Nexalinx.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="company-feature industry-feature">
                <div
                  className="indus-img"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={indu5} alt="indu5" />{" "}
                </div>
                <h5 className="text-center mt-5">Banking</h5>
                <p>
                  {" "}
                  From financial software development, custom banking software
                  development, digital banking software services, and custom
                  Fintech development, we at Nexalinx extend our software
                  development experience in the industry of banking and finance
                  as well. With custom features, and UI/UX designs we ensure the
                  highest standards and security to the software developed.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="company-feature industry-feature">
                <div
                  className="indus-img"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={indu6} alt="indu6" />{" "}
                </div>
                <h5 className="text-center mt-5">Manufacturing</h5>
                <p>
                  {" "}
                  Implement manufacturing software for ensuring quality
                  management and maintenance software including the application
                  of intelligent products that help in accelerating the existing
                  processes and bringing down operational costs.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </Common>
  );
};

export default Haidory;
