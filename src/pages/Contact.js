import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import Common from "../layouts/Common";
import lethello from "../assets/images/lethello.svg";
import contactus from "../assets/images/contactus.svg";
import usa from "../assets/images/usa.webp";
import { FaPeriscope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import bd from "../assets/images/bd.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaCommentAlt } from "react-icons/fa";
import { FaArrowRight, FaFax } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Common>
      <section className="all-company-feature bg-deep-gray bg-deep-gray2 pt-0 bg-white certification-slide blog-wr pb-0">
        <div className="contact-bg bg-gray bg-deep-gray">
          <Container>
            <Col md={12} className="text-center ps-3">
              {" "}
              <h2 className="mt-0 mb-4" style={{ width: "100%" }}>
                Contact Us For Any Information
              </h2>
            </Col>
            <Row>
              <Col md={6} className="p-0 left-contact" data-aos="fade-right">
                {/* <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5967063187745!2d-73.94101808430071!3d40.74889884329367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258d5803dbaf9%3A0xaadf2f1b2fd2797c!2s28-07%20Jackson%20Ave%2C%20Long%20Island%20City%2C%20NY%2011101%2C%20USA!5e0!3m2!1sen!2sbd!4v1681023016834!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      class="map"
                      // loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=city heart shopping&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                className="mb-4 pt-5 pb-2 right-contact"
                data-aos="fade-right"
              >
                <div className="head-ofc-area mt-2">
                  <img src={bd} alt="bd" className="allflag" />

                  <ul className="list-group list-inline company-list-link">
                    <h4>Bangladesh</h4>
                    <li className="mt-0">
                      {" "}
                      <span>
                        <FaPeriscope />
                      </span>
                      <label className="text-black">
                        City Heart Building,5th Floor, 67, Nayapaltan, Dhaka,
                        Bangladesh.
                      </label>
                    </li>
                    <li className="mt-0">
                      <span>
                        <FaMobileAlt />
                      </span>
                      <label className="text-black">
                        {" "}
                        +880 1711140377, +880 1711140364,+880 01711591470
                      </label>
                    </li>
                    <li>
                      {" "}
                      <span>
                        <FaFax />
                      </span>
                      <label> 88-02-48312653 </label>
                    </li>
                    <li>
                      {" "}
                      <span>
                        <BsTelephoneForwardFill />
                      </span>
                      <label> 222220371, 048311685, 48311685, 58312574 </label>
                    </li>
                    <li>
                      {" "}
                      <span>
                        <AiOutlineMail />
                      </span>
                      <label>
                        {" "}
                        altayabacc@gmail.com, challengertravels@gmail.com,
                        modernairintl@gmail.com,{" "}
                      </label>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container></Container>
      </section>
    </Common>
  );
};

export default Contact;
