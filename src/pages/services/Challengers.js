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
import about from "../../assets/images/challengersabout.png";
import serviceall from "../../assets/images/serviceall.svg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import challengerimg from "../../assets/images/challenger.jpeg";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePeopleOutline } from "react-icons/md";

import { MdOutlineFamilyRestroom } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
import { RiPassportFill } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import styles from "./challengers.module.css";
import challengerbannerimg from "../../assets/images/challenger-banner.png";

const Challengers = () => {
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
      <section className="cbanner-section">
        <Container>
          {/* <Row style={{ padding: "8rem", color: "black" }}>
            <Col>
              <h1 className="text-white">Hydori Group</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                veritatis? Dolorem praesentium voluptatem obcaecati vitae
                provident labore magni accusamus, velit recusandae earum illo.
                Nihil asperiores maxime odit provident possimus animi!
              </p>
            </Col>
            <Col>
              <h1>Hydori Group</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                veritatis? Dolorem praesentium voluptatem obcaecati vitae
                provident labore magni accusamus, velit recusandae earum illo.
                Nihil asperiores maxime odit provident possimus animi!
              </p>
            </Col>
          </Row> */}
        </Container>
      </section>
      <section className=" pt-5">
        <div className="sub-banner">
          <Container>
            <Row>
              <Col md={6} className=" mb-4 text-center" data-aos="fade-left">
                <img
                  className=" image-logo-sisters"
                  src={challengerimg}
                  alt="logo"
                />
              </Col>
              <Col md={6} className="mt-4 pt-2 mb-4" data-aos="fade-right">
                <h2>About Challenger Travels & Tours Ltd.</h2>
                <p style={{ fontSize: "1.3em" }}>
                  {" "}
                  A sister concern of haidroygroup, started its journey 24th
                  April,1988. It has been the leading Hajj & Umrah travel guide
                  . We assist our client with utmost sincerity to make the
                  activities of Hajj and Umrah easy.It received IATA
                  accrediation in the year of 1993 and received it approval from
                  Biman Bangladesh Airlines Ltd. at 1991.Bangladesh Government
                  approved Challengers Travel & Tours Ltd. as a Hajj agent in
                  2000 and also appointed as Umrah agent by Ministry of
                  Religious Affairs, Bangladesh at 2001. Our organization
                  rewarded as top ten agent of Saudia Airlines,Biman and many
                  other top airlines for more than 17 times.
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
              <h2>Why Choose Challenger Travels & Tours Ltd.?</h2>
              <p> </p>
              <ul className="list-inline list-group ul-list-about mt-4">
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.3em", fontWeight: "normal" }}>
                    Experience & Expertise
                  </p>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.3em", fontWeight: "normal" }}>
                    Proper Planning And Service
                  </p>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.3em", fontWeight: "normal" }}>
                    Flexibility & Versatility
                  </p>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheckCircle />
                  </span>
                  <p style={{ fontSize: "1.3em", fontWeight: "normal" }}>
                    Customized Travel Solutions
                  </p>
                </li>
              </ul>
            </Col>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
              <img className="abouimg" src={about} alt="about" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="all-company-feature mb-0 all-services mt-3 com-miss-vis">
        <Container>
          <Row>
            <Col md={12} className="text-center mt-2 mb-0">
              <h2>Our Services</h2>
              <p className="text-center">
                {" "}
                We provide different type of services{" "}
              </p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col md={4}>
              <div className={styles.challengerscompanyslide}>
                <Row>
                  <Col md={12} lg={4}>
                    <div className={styles.challengersicons}>
                      <ImAirplane />
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="pe-0 text-left">
                    <h4 className="p-0">Air ticket</h4>
                    <p className="mb-0" style={{ lineHeight: "2" }}>
                      {" "}
                      We are affiliated with IATA agent. We provide you any
                      airlines ticket. Guaranteed cheapest fare you get.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.challengerscompanyslide}>
                <Row>
                  <Col md={12} lg={4}>
                    <div className={styles.challengersicons}>
                      <IoIosPeople />
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="">
                    <h4 className="p-0">Hajj Packages</h4>
                    <p className="mb-0 pl-3">
                      {" "}
                      We offer exclusive/custom Hajj packages to Pilgrims. We
                      take care of everything to provide the best experience and
                      satisfaction.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.challengerscompanyslide}>
                <Row>
                  <Col md={12} lg={4}>
                    <div className={styles.challengersicons}>
                      <MdOutlinePeopleOutline />{" "}
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="pe-0 text-left">
                    <h4 className="p-0">Umrah Packages</h4>
                    <p className="mb-0">
                      {" "}
                      We offer exclusive/custom Hajj packages to Pilgrims. We
                      take care of everything to provide the best experience and
                      satisfaction.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.challengerscompanyslide}>
                <Row>
                  <Col md={12} lg={4}>
                    <div className={styles.challengersicons}>
                      <RiPassportFill />
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="">
                    <h4 className="p-0">Visa Processing</h4>
                    <p className="mb-0">
                      {" "}
                      Travelers who are planning their independent trip
                      throughout the world are most welcome to use our exclusive
                      Visa Processing{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={4}>
              <div className={styles.challengerscompanyslide}>
                <Row>
                  <Col md={12} lg={4}>
                    <div className={styles.challengersicons}>
                      <FaHotel />
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="ps-0">
                    <h4 className="p-0">Hotel Booking</h4>
                    <p className="mb-0" style={{ lineHeight: "2" }}>
                      {" "}
                      We are affiliated with International Hotels. We provide
                      you any types of Hotels around the world.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.challengerscompanyslide}>
                <Row>
                  <Col md={12} lg={4}>
                    <div className={styles.challengersicons}>
                      <BiPackage />
                    </div>
                  </Col>
                  <Col md={12} lg={8} className="pe-0 text-left">
                    <h4 className="p-0">Other Packages</h4>
                    <p className="mb-0" style={{ lineHeight: "2" }}>
                      {" "}
                      We facilitate both inbound and out bound tours. Please
                      contact us to know more in details.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Common>
  );
};

export default Challengers;
