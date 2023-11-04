// eslint-disable-next-line
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Common from "../../layouts/Common";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import worka from "../../assets/images/worka.png";
import workb from "../../assets/images/workb.png";
import workc from "../../assets/images/workc.png";
import workd from "../../assets/images/workd.png";
import worke from "../../assets/images/worke.png";
import workf from "../../assets/images/workf.png";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import hire from "../../assets/images/hire.svg";
import angular from "../../assets/images/ani.svg";
import reacjs from "../../assets/images/reacjs.svg";
import pay from "../../assets/images/pay.svg";
import tech from "../../assets/images/tech.svg";
import wez from "../../assets/images/wez.svg";
import php from "../../assets/images/php.svg";
import node from "../../assets/images/node.svg";
import lara from "../../assets/images/lara.svg";
import mong from "../../assets/images/mong.svg";
import soft from "../../assets/images/soft.svg";
import appd from "../../assets/images/appd.svg";
import carta from "../../assets/images/carta.svg";
import codin from "../../assets/images/codin.svg";
import ios from "../../assets/images/ios.svg";
import avater from "../../assets/images/avater.svg";
import workingmen from "../../assets/images/workingmen.jpg";
import kaba from "../../assets/images/kabahome.jpeg";
import visahome from "../../assets/images/visahome.jpeg";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import haablogo from "../../assets/images/haab.jpg";

import mslogo from "../../assets/images/mslogo.jpg";
import biman from "../../assets/images/biman.svg";
import iatalogo from "../../assets/images/iatalogo.png";
import bairalogo from "../../assets/images/bairalogo.jpg";
import bairatext from "../../assets/images/bairatext.jpg";
import saudi from "../../assets/images/saudi.jpg";
import atablogo from "../../assets/images/atab.png";
import challenger from "../../assets/images/challenger.jpeg";
import family from "../../assets/images/family.jpeg";

import projectc from "../../assets/images/projectc.svg";
import brain from "../../assets/images/brain.png";
import countires from "../../assets/images/countries.png";
import experience from "../../assets/images/experience.png";
import partners from "../../assets/images/partners.svg";
import { RiPassportFill } from "react-icons/ri";

import bootstrap from "../../assets/images/bootstrap.svg";
import ember from "../../assets/images/ember.svg";
import manufacturing from "../../assets/images/manufacturing.svg";
import logistics from "../../assets/images/logistics.svg";
import healthcare from "../../assets/images/healthcare.svg";
import aviation from "../../assets/images/aviation.svg";
import ecommerce from "../../assets/images/ecommerce.svg";
import content from "../../assets/images/content.svg";
import wp from "../../assets/images/wp.svg";
import as from "../../assets/images/as.svg";
import bs from "../../assets/images/bs.svg";
import about from "../../assets/images/about.svg";
import leftimg from "../../assets/images/leftimg.svg";
import rightimfe from "../../assets/images/rightimfe.svg";
import client from "../../assets/images/client.svg";
import sof1 from "../../assets/images/sof1.svg";
import visa from "../../assets/images/visa.webp";
import haidory from "../../assets/images/Hydori.jpeg";
import altayaba from "../../assets/images/tayaba.jpeg";
import modern from "../../assets/images/ModernAir.jpeg";
import kaniz from "../../assets/images/Kaniz.jpeg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";

// import getques from '../../assets/images/getques.svg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Modal from "react-bootstrap/Modal";
import styles from "./home.module.css";
import Counter from "./Counter";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = {
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
        items: 4,
      },
    },
  };

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
  const options3 = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // navText: ["Prev", "Next"],
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
        items: 4,
      },
    },
  };

  return (
    <Common>
      <section className="banner-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="slider-banner slide-arrow">
                {/* fade */}
                <Carousel>
                  <Carousel.Item>
                    <h1 className="text-white">
                      <strong>Air Ticket & Hotel Booking</strong>
                    </h1>
                    <p className="text-white" style={{ fontSize: "1.5em" }}>
                      Affiliated with most of the airlines operating in
                      Bangladesh and hotels round the world.
                    </p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1 className="text-white">
                      <strong>Hajj & Umrah</strong>
                    </h1>
                    <p className="text-white" style={{ fontSize: "1.5em" }}>
                      Leading Hajj & Umrah agency in Bangladesh. Providing
                      exquisite service to clients for the best memorising
                      journey.{" "}
                    </p>
                  </Carousel.Item>

                  <Carousel.Item>
                    <h1 className="text-white" style={{ fontSize: "1.5em" }}>
                      <strong>Visa Service</strong>
                    </h1>
                    <p className="text-white" style={{ fontSize: "1.5em" }}>
                      Reliable and Transparent recruiting and travel agency in
                      Bangladesh. Providing service for worker visa, family
                      visa, business visa and visit visa.
                    </p>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="all-company-feature">
        <Container className="container">
          <Row>
            <Col md={12} className="text-center pt-3">
              <h4
                className="mt-3"
                style={{ fontWeight: "500 !important", color: "#eca109" }}
              >
                Haidory Group
              </h4>
              <h1 className="mb-0 mt-3  hydori-font-size">
                Our Sister Concerns
              </h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-around display-table ">
            <Col lg={2} sm={12} className="p-0">
              <div className="company-feature">
                {" "}
                <span
                  // data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img src={challenger} alt="challenger logo" />
                </span>
                <h5 className="text-center mt-2 mt-sm-5">
                  Challengers Travels & Tours LTD.
                </h5>
                <p style={{ width: "96%" }} className="sister-para">
                  {" "}
                  A sister concern of haidroygroup, started its journey 24th
                  April,1988. It has been the leading Hajj & Umrah travel guide
                  . We assist our client with utmost sincerity to make the
                  activities of Hajj and Umrah easy.
                  {/* <NavLink exact to="/challengers">
                    <a>...more</a>
                  </NavLink>{" "} */}
                </p>
                <ul className="ul-feature">
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Air tickets</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Hajj & Umrah</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Hotel Booking</p>
                  </li>
                </ul>
                <NavLink exact to="/challengers">
                  <Button variant="primary btn-custom">Read More</Button>
                </NavLink>
              </div>
            </Col>
            <Col lg={2} sm={12} className="p-0">
              <div className="company-feature">
                {" "}
                <span data-aos-offset="300" data-aos-easing="ease-in-sine">
                  <img src={haidory} alt="soft" />
                </span>
                <h5 className="text-center mt-2 mt-sm-5">
                  Haidory Trade International
                </h5>
                <p className="sister-para">
                  A sister concern of Haidroygroup, started its journey on 11th
                  July 1991. It has been the leading recruiting agency in
                  Bangladesh with honesty and commitments. We assist our clients
                  with utmost sincerity to make the journey seamless.
                </p>
                <ul className="ul-feature mb-3">
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>All kinds of working visa</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Hotel Booking</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Other Packages</p>
                  </li>
                </ul>
                <NavLink exact to="/haidory">
                  <Button variant="primary btn-custom">Read More</Button>
                </NavLink>
              </div>
            </Col>
            <Col lg={2} sm={12} className="p-0">
              <div className="company-feature">
                {" "}
                <span data-aos-offset="300" data-aos-easing="ease-in-sine">
                  <img src={altayaba} alt="sof1" />
                </span>
                <h5 className="text-center mt-2 mt-sm-5">
                  Al Tayaba Consultancy Center
                </h5>
                <p className="sister-para">
                  {" "}
                  A sister concern of Haidroygroup, started its journey on 19th
                  July 2018. Our organization is authorized agent of Bangladesh
                  Saudi Embassy. We provide document attestate service from
                  Bangladesh Saudi Embassy.{" "}
                </p>
                <ul className="ul-feature" style={{ marginTop: "-3px" }}>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Multiple Business Visit Visa</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Multiple Family Visit Visa</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Other Packages</p>
                  </li>
                </ul>
                <NavLink exact to="/al-tayaba">
                  <Button variant="primary btn-custom">Read More</Button>
                </NavLink>
              </div>
            </Col>

            <Col lg={2} sm={12} className="p-0">
              <div className="company-feature">
                {" "}
                <span data-aos-offset="320" data-aos-easing="ease-in-sine">
                  <img src={modern} alt="appd" />
                </span>
                <h5 className="text-center mt-2 mt-sm-5">
                  Modern Air International
                </h5>
                <p style={{ marginBottom: "2.2rem" }} className="sister-para">
                  A sister concern of haidroygroup, started its journey 8th
                  October 2013. It has been the leading Hajj travel guide . We
                  assist our client with utmost sincerity to make the activities
                  of Hajj easy.
                </p>
                <ul className="ul-feature">
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p> Hajj Packages</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Umrah Packages</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Other Packages</p>
                  </li>
                </ul>
                <NavLink exact to="/modern-air">
                  <Button variant="primary btn-custom">Read More</Button>
                </NavLink>
              </div>
            </Col>
            <Col lg={2} sm={12} className="p-0">
              <div className="company-feature">
                {" "}
                <span data-aos-offset="320" data-aos-easing="ease-in-sine">
                  <img src={kaniz} alt="kaniz" />
                </span>
                <h5 className="text-center mt-2 mt-sm-5 mb-4">Kaniz Travels</h5>
                <p style={{ marginBottom: "2.5rem" }} className="sister-para">
                  A sister concern of haidroygroup, started its journey 24th
                  April,1988. It has been the leading Hajj & Umrah travel guide
                  . We assist our client with utmost sincerity to make the
                  activities of Hajj and Umrah easy.
                </p>
                <ul className="ul-feature">
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Hajj Packages</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Umrah Packages</p>
                  </li>
                  <li className="d-flex">
                    <FaArrowAltCircleRight className="icon-list" />
                    <p>Visa Processing</p>
                  </li>
                </ul>
                <NavLink exact to="/kaniz-travels">
                  <Button variant="primary btn-custom">Read More</Button>
                </NavLink>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="text-center mt-4"></Col>
          </Row>
        </Container>
      </section>

      <section className="all-company-feature bg-deep-gray bg-deep-gray2 mt-1 pt-2 certification-slide">
        <Container className="p-0 container">
          <Row>
            <Col md={6} className="mt-4 mb-4 pb-5" data-aos="flip-up">
              {/* <h4 className="mt-5 pt-4">CERTIFICATIONS </h4> */}
              <div style={{ paddingLeft: "1rem" }}>
                <h2 className="mt-5">We Are</h2>
                <p style={{ fontSize: "1.5em" }}>
                  ACCREDITED, APPROVED and MEMBER OF
                </p>
              </div>
            </Col>
            <Col md={6} className="mt-4 mb-4 p-0">
              <OwlCarousel
                className="owl-theme slider-custom slider-custom-two slide-img2"
                {...options3}
                loop
                margin={20}
                nav
              >
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={biman} alt="Biman" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={haablogo} alt="atab" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={iatalogo} alt="iatalogo" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={bairalogo} alt="bairalogo" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={saudi} alt="saudi" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={biman} alt="Biman" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img
                        src={
                          "https://www.atab.org.bd/public/uploads/backend/company/Gvg8h1683349761-logo.png"
                        }
                        alt="atab"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={iatalogo} alt="iatalogo" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={bairalogo} alt="bairalogo" />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img
                        className="haabpic"
                        src={
                          "http://challengertravelsbd.com/front_end_assets/images/side11.png"
                        }
                        alt="bairalogo"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className={styles.companyslidehome}>
                    <div className={styles.slidericon}>
                      {" "}
                      <img src={saudi} alt="saudi" />{" "}
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="all-company-feature mt-4 pt-5">
        <Container>
          <Row>
            <Col md={12} className="text-start mb-4">
              <h4>Trade EXPERTISE </h4>
              <h2>Our Trade Experience</h2>
            </Col>
          </Row>
          <Row>
            <OwlCarousel
              className="owl-theme slider-custom custom-industry "
              {...options}
              loop
              margin={20}
              nav
            >
              <div class="item">
                <div
                  className="company-slide bg2 ml-0"
                  style={{ marginLeft: "0" }}
                >
                  <div className="slider-icon">
                    {" "}
                    <ImAirplane color="white" font-size="4em" />
                  </div>
                  <h5>Air Tickets</h5>
                </div>
              </div>
              <div class="item">
                <div
                  className="company-slide bg2 ml-0"
                  style={{ marginLeft: "0" }}
                >
                  <div className="slider-icon">
                    {" "}
                    <LiaHotelSolid color="white" font-size="4em" />
                  </div>
                  <h5>Hotel Booking</h5>
                </div>
              </div>
              <div class="item">
                <h4>
                  <div
                    className="company-slide ml-0"
                    style={{ marginLeft: "0" }}
                  >
                    <div className="slider-icon">
                      {" "}
                      <MdGroups color="white" font-size="4em" />
                    </div>
                    <h5>Hajj & Umrah</h5>
                  </div>
                </h4>
              </div>
              <div class="item">
                <div className="company-slide bg3" style={{ marginLeft: "0" }}>
                  <div className="slider-icon">
                    {" "}
                    <MdOutlineWorkOutline color="white" font-size="4em" />
                  </div>
                  <h5>Work Visa</h5>
                </div>
              </div>
              <div class="item">
                <div
                  className="company-slide bg1 ml-0 "
                  style={{ marginLeft: "0" }}
                >
                  <div className="slider-icon">
                    {" "}
                    <label>
                      <MdOutlineFamilyRestroom color="white" font-size="4em" />
                    </label>
                  </div>
                  <h5>Travel & Family Visa</h5>
                </div>
              </div>

              <div class="item">
                <div className="company-slide ml-0" style={{ marginLeft: "0" }}>
                  <div className="slider-icon">
                    <label>
                      <RiPassportFill color="white" font-size="4em" />
                    </label>
                  </div>
                  <h5>Visa Consulting</h5>
                </div>
              </div>
            </OwlCarousel>
          </Row>
        </Container>
      </section>

      {/* <section className="all-company-feature pt-3">
        <Container>
          <Row>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-right">
              <div className="company-block-feature-two">
                {" "}
                <img src={leftimg} alt="leftimg" />{" "}
              </div>
            </Col>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
              <h4 className="mt-2 pt-4">WHO WE ARE </h4>
              <h2>
                Offshore Software
                <br />
                DevelopmentCompany In USA
              </h2>
              <p>
                {" "}
                We Nexalinx Solutions is an offshore development company in USA
                that you can trust for quality and reliability. We have been
                delivering high quality, scalable and cost effective offshore
                software development and web solutions to a global clientele
                since 2005 with full professionalism, skill and expertise to
                bring smile on faces of our clients by providing best ROI to
                them in time. When we work for you we ensure that your goals and
                objectives are in our top priority. As a reputed software
                outsourcing company in USA, we strategize, develop and execute
                all our tasks with sensibility and perfection. Our team of
                professionals will provide you everything needed to make a
                successful product delivered to you. When you work with us, your
                goals and objectives are in the hands of experts who will help
                you strategize, develop and execute your plans perfectly. With a
                focus on providing custom offshore software development and web
                application development we are working on all the platforms and
                are up to date on the latest technology that will surpass your
                expectations. We design and develop Software solutions for our
                customers. we share our knowledge and expertise of our team of
                experts who can provide everything to make your business
                successful and grow together with you. We provide software
                development services to many of our clients spread across the
                globe and have gained high reputation in offshore software
                development industry. Hire software developers from the pool of
                our professional for a very affordable cost and get the feel of
                interaction and support of being your own team.{" "}
              </p>
             
            </Col>
          </Row>
        </Container>
      </section> */}
      <Col md={12} className="mt-4">
        <hr className="hr" />
      </Col>
      {/* <section className="all-company-feature pt-3 mb-5">
        <Container>
          <Row>
            <Col md={6} className="mt-4 mb-4">
              <div
                className="company-slide mission-vission"
                data-aos="flip-left"
              >
                <Row>
                  <Col md={3}>
                    <div className="slider-icon">
                      {" "}
                      <img src={as} alt="as" />{" "}
                    </div>
                  </Col>
                  <Col md={9} className="ps-0">
                    <h5 className="p-0">Our Vision</h5>
                    <p className="mb-0">
                      {" "}
                      Across the globe, the Enterprise ecosystem is evolving.
                      This has created a new scenario for businesses operating
                      in the market.…{" "}
                    </p>
                    <NavLink exact to="/vision">
                      Read more...
                    </NavLink>
                  </Col>
                </Row>
              </div>
              <div
                className="company-slide mission-vission mt-4"
                data-aos="flip-right"
              >
                <Row>
                  <Col md={9} className="pe-0 text-end">
                    <h5 className="p-0">Our Mission</h5>
                    <p className="mb-0">
                      {" "}
                      SAcross the globe, the Enterprise ecosystem is evolving.
                      This has created a new scenario for businesses operating
                      in the market. You either have robus…{" "}
                    </p>
                    <NavLink exact to="/mission">
                      Read more...
                    </NavLink>
                  </Col>
                  <Col md={3}>
                    <div className="slider-icon">
                      {" "}
                      <img src={bs} alt="bs" />{" "}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
              <div className="company-block-feature-two position-img">
                {" "}
                <img src={rightimfe} alt="rightimfe" />{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="all-company-feature mtp">
        <Container>
          <Row>
            <Col md={5} data-aos="fade-right">
              <img className="img-client" src={workingmen} alt="workingmen" />
            </Col>
            <Col md={7} data-aos="fade-left">
              <Row>
                <Col md={12}>
                  <h2>WORKERS'S FEEDBACK</h2>
                </Col>
              </Row>
              <div>
                <Carousel
                  fade
                  className="slider-custom slider-custom-two display-none-slide"
                >
                  <Carousel.Item interval={1000}>
                    <Row>
                      <Col md={12}>
                        <div className="client-block">
                          <div className="client-top">
                            {" "}
                            <img
                              src={avater}
                              alt="avater"
                              className="client-av"
                            />
                            <div className="client-details">
                              <h6 className="mb-1">Abul Kalam</h6>
                              <label> Malaysia </label>
                            </div>
                          </div>
                          <p className="detail-message">
                            {" "}
                            Haidory Trade International has provided me with
                            transparent and accurate guidelines. .{" "}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <Row>
                      <Col md={12}>
                        <div className="client-block">
                          <div className="client-top">
                            {" "}
                            <img
                              src={avater}
                              alt="avater"
                              className="client-av"
                            />
                            <div className="client-details">
                              <h6 className="mb-1">Kashem Hossain</h6>
                              <label> Saudi Arabia </label>
                            </div>
                          </div>
                          <p className="detail-message">
                            I was very much satisfied with their Hajj service.
                            They have guided us well.{" "}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <Row>
                      <Col md={12}>
                        <div className="client-block">
                          <div className="client-top">
                            {" "}
                            <img
                              src={avater}
                              alt="avater"
                              className="client-av"
                            />
                            <div className="client-details">
                              <h6 className="mb-1">Abul Khayer</h6>
                              <label> Saudi Arab </label>
                            </div>
                          </div>
                          <p className="detail-message">
                            My family was very happy with Challenger Travel &
                            Tours Ltd, during our Saudi Arabia visit for Umrah.{" "}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <Row>
                      <Col md={12}>
                        <div className="client-block">
                          <div className="client-top">
                            {" "}
                            <img
                              src={avater}
                              alt="avater"
                              className="client-av"
                            />
                            <div className="client-details">
                              <h6 className="mb-1">Mizan Hasan</h6>
                              <label> Malaysia </label>
                            </div>
                          </div>
                          <p className="detail-message">
                            We are grateful to Haidory Group for smooth service
                            for our family visit visa.{" "}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="clearfix"></div>
      <div className="">
        <Container>
          <div className="comapny-status  mt-3">
            <Row>
              <Col md={12} className="text-center">
                <div className="company-status-block">
                  <img src={experience} alt="experience" />
                  <h3 style={{ color: "#eca109" }}>
                    <Counter targetNumber={35} />
                  </h3>
                  <p style={{ color: "#eca109" }}>Years of Experience</p>
                </div>

                <div className="company-status-block">
                  <img src={countires} alt="countires" />
                  <h3 style={{ color: "#eca109" }}>
                    {" "}
                    <Counter targetNumber={15} />
                  </h3>
                  <p style={{ color: "#eca109" }}>Countries Served</p>
                </div>

                <div className="company-status-block">
                  <img src={brain} alt="brain" />
                  <h3 style={{ color: "#eca109" }}>
                    {" "}
                    <Counter targetNumber={20} />
                  </h3>
                  <p style={{ color: "#eca109" }}>Office Staff</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Common>
  );
};

export default Home;
