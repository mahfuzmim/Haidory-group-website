import React from "react";
import Common from "../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import coma1 from "../../assets/images/coma1.png";
import coma2 from "../../assets/images/coma2.png";
import coma3 from "../../assets/images/coma3.png";
import coma4 from "../../assets/images/coma4.png";
import coma5 from "../../assets/images/coma5.png";
import coma6 from "../../assets/images/coma6.png";
import coma7 from "../../assets/images/coma7.png";
import coma8 from "../../assets/images/coma8.png";
import coma9 from "../../assets/images/coma9.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import motherhaidory from "../../assets/images/motherhaidory.PNG";
import md from "../../assets/images/MD.jpeg";
import mdlogo1 from "../../assets/images/mdlogo1.PNG";
import mdlogo2 from "../../assets/images/mdlogo2.PNG";
import mdlogo3 from "../../assets/images/mdlogo3.PNG";
import mdlogo4 from "../../assets/images/mdlogo4.PNG";
import styles from "./aboutus.module.css";
import missionlogo from "../../assets/images/missionlogo.jpg";
import visionlogo from "../../assets/images/visionlogo.png";

const Aboutus = () => {
  const options3 = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <Common>
      <section className="all-sub-banner portfolio-banner">
        <div className="sub-banner">
          <Row className="m-0">
            <Col lg={8} sm={12}>
              <div className="slider-banner slide-arrow"></div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="port-sec mt-173">
        <div className="all-company-feature pt-2">
          <Row>
            <Col md={6} sm={12} className="mb-4" data-aos="fade-right">
              <h2 className="mt-4">Who We Are </h2>
              <p>
                We are pleased to introduce Haidory Group, one of the
                professional and experienced Hajj,Umrah and Manpower exporting
                companies in Bangladesh. We are an authorized agency of the
                Government of Bangladesh. Since the day of inception, we are
                always focused on putting client preference fast. Hairdory Group
                has ensured transparency and honesty in every circumstance.
              </p>
            </Col>
            <Col
              md={6}
              xs={12}
              sm={12}
              className="mb-4 text-center"
              data-aos="fade-left"
            >
              <img
                className=" mt-5"
                // style={{ marginLeft: "3rem", marginTop: "5rem" }}
                src={motherhaidory}
                alt="haidory logo"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>

        <section className="all-company-feature pt-3">
          <Row style={{ marginLeft: "0" }}>
            <Col md={12} className="mt-4 mb-4" data-aos="fade-left">
              <Row>
                <Col style={{ paddingRight: "0", marginBottom: "7px" }}>
                  <div className={styles.companyslides} data-aos="flip-left">
                    <Col className="d-flex justify-content-center">
                      <Col md={3}>
                        <div className="slider-icon">
                          {" "}
                          <img src={visionlogo} alt="as" />{" "}
                        </div>
                      </Col>
                      <Col md={9} className="ps-0 mt-3">
                        <h5 className="p-0">Our Vision</h5>
                        <p className="mb-0">
                          {" "}
                          Bringing professional steps to be the very best in the
                          industry.{" "}
                        </p>
                      </Col>
                    </Col>
                  </div>
                </Col>
                <Col style={{ paddingRight: "0" }}>
                  <div className={styles.companyslides} data-aos="flip-left">
                    <Col className="d-flex justify-content-center">
                      <Col md={3}>
                        <div className="slider-icon">
                          {" "}
                          <img src={missionlogo} alt="bs" />{" "}
                        </div>
                      </Col>
                      <Col md={9} className="pe-0 mt-3">
                        <h5 className="p-0">Our Mission</h5>
                        <p className="mb-0">
                          {" "}
                          Bringing positive outcomes and fulfilling people's
                          dreams.{" "}
                        </p>
                      </Col>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* message from our MD */}
            <section className="">
              <Row className="mt-0 pt-0">
                <Col md={7} sm={12} className="mt-2">
                  <h2 className="mt-5">Message From Our Managing Director</h2>
                  <p className="">
                    {" "}
                    At Haidory Group, we are committed to excellence in
                    everything we do. As the Managing Director, I am proud to
                    lead a team of dedicated professionals who are passionate
                    about delivering top-quality services and exceeding our
                    customers' expectations. Our journey started with a vision
                    of Bringing positive outcomes and fulfilling people's
                    dreams.Since then, we have grown and evolved, always
                    striving to stay at the forefront of our industry. Today, we
                    are a trusted partner for providing Hajj and Umrah Visa
                    service, manpower exporting and air ticketing. We take pride
                    in the quality of our work and the relationships we have
                    built with our clients and partners. As we continue to grow
                    and adapt to the ever-changing business landscape, our core
                    values remain unchanged. Thank you for your interest in
                    Haidory Group.We look forward to building lasting
                    relationships and achieving mutual success.
                    <br /> Warm regards,<br></br> Syed Golam Sarwar
                    <br /> Managing Director, Haidory Group
                  </p>

                  <div className="blog-tech">
                    {" "}
                    <span>
                      <img alt="logo" src={mdlogo1} />
                    </span>
                  </div>
                  <div className="blog-tech">
                    {" "}
                    <span>
                      <img alt="pay" src={mdlogo2} />
                    </span>
                  </div>
                  <div className="blog-tech">
                    {" "}
                    <span>
                      <img alt="pay" src={mdlogo3} />
                    </span>
                  </div>
                  <div className="blog-tech">
                    {" "}
                    <span>
                      <img alt="pay" src={mdlogo4} />
                    </span>
                  </div>

                  <div className="clearfix"></div>
                </Col>
                <Col md={5} sm={12} className="mt-4 mb-4 blog-all">
                  <div className={styles.companyslideimgmd}>
                    <div className="slider-icon2 text-center">
                      <img className="portimg" alt="md" src={md} />{" "}
                    </div>
                  </div>
                </Col>
              </Row>
            </section>

            <Col md={12} className="text-center pt-4 mt-5">
              <h2>A Glimpse Of Our Offices</h2>
            </Col>

            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma1} alt="coma1" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma2} alt="coma2" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma3} alt="coma3" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma4} alt="coma4" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma5} alt="coma5" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma6} alt="coma6" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma7} alt="coma7" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma8} alt="coma8" />{" "}
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="portfolio-com">
                {" "}
                <img src={coma9} alt="coma9" />{" "}
              </div>
            </Col>
          </Row>
        </section>
      </section>
    </Common>
  );
};

export default Aboutus;
