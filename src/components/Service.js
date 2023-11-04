import React from 'react';
import Common from "../layouts/Common";
// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FaArrowRight, FaCheckCircle, FaClock, FaCommentAlt, FaCommentDots, FaFileAlt, FaFileCode, FaFileInvoice, FaGlobe, FaLaptop, FaLockOpen, FaMobileAlt, FaScrewdriver, FaSearchengin, FaServer, FaSolarPanel, FaSoundcloud, FaUserAlt, FaWaveSquare } from 'react-icons/fa';
import about from '../assets/images/about.svg';
import indcom from '../assets/images/indcom.svg';
import serviceall from '../assets/images/serviceall.svg';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ContactForm from './ContactForm';
import IndustryExperience from './IndustryExperience';
import RecentWork from './RecentWork';



const Service = ({ data }) => {
  console.log("data", data);
  const iconList = [FaArrowRight, FaCheckCircle, FaClock, FaCommentAlt, FaCommentDots, FaFileAlt, FaFileCode, FaFileInvoice, FaGlobe, FaLaptop, FaLockOpen, FaMobileAlt, FaScrewdriver, FaSearchengin, FaServer, FaSolarPanel, FaSoundcloud, FaUserAlt, FaWaveSquare];
  const iconList2 = ['FaArrowRight', 'FaCheckCircle', 'FaClock', 'FaCommentAlt', 'FaCommentDots', 'FaFileAlt', 'FaFileCode', 'FaFileInvoice', 'FaGlobe', 'FaLaptop', 'FaLockOpen', 'FaMobileAlt', 'FaScrewdriver', 'FaSearchengin', 'FaServer', 'FaSolarPanel', 'FaSoundcloud', 'FaUserAlt', 'FaWaveSquare'];

  const renderFeature = (data, index) => {
    const Icon = iconList2.findIndex(element => element == data.icon);
    const Icon2 = iconList[Icon ? Icon : 0];
    return (

      <Col lg={6} sm={12} key={index}>
        <div className="technology-list"> <span>
          <Icon2 />
        </span>
          <label> {data.title} </label>
        </div>
      </Col>
    );
  };

  const renderlist = (data, index) => {
    const Icon = iconList2.findIndex(element => element == data.icon);
    const Icon2 = iconList[Icon ? Icon : 0];
    return (

      <li key={index}> <span>
        <Icon2 />
      </span>
        <p>{data.title}</p>
      </li>
    );
  };

  const renderServiceLeft = (data, index) => {
    const Icon = iconList2.findIndex(element => element == data.icon);
    const Icon2 = iconList[Icon ? Icon : 0];
    return (

      <div className="company-slide mission-vission" key={index}>
        <Row>
          <Col md={3}>
            <div className="slider-icon icon-all" data-aos="flip-left">
              <Icon2 />
            </div>
          </Col>
          <Col md={9} className="ps-0">
            <h5 className='p-0'>{data.title}</h5>
            <p className='mb-0'> {data.details} </p>
          </Col>
        </Row>
      </div>
    );
  };



  return (
    <Common>
      <section className="all-sub-banner">
        <div className="sub-banner">
          <Row className="m-0">
            <Col lg={8} sm={12}>
              <div className="slider-banner slide-arrow">
                <h1 className="text-white"><strong>{data.title}</strong></h1>
                <p className="text-white p20 mb-4">{data.subTitle}</p>
              </div>
              <Row>
                {data.feature.map(data => renderFeature(data))}
              </Row>
            </Col>
            <Col lg={4} sm={12} className="pe-0 dis-noneall">
              <ContactForm />
            </Col>
          </Row>
        </div>
      </section>
      <section className="all-company-feature mt-5 pt-5">
        <Container>
          <Row>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
              <img className="width-full mt-5" src={indcom} alt="indcom" />
            </Col>
            <Col md={6} className="mt-5 pt-5 mb-4" data-aos="fade-right">
              <h2>{data?.heading_one?.title}</h2>
              <p>{data?.heading_one?.details}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="all-company-feature bg-deep-gray mt-5 pt-5">
        <Container>
          <Row>
            <Col md={6} className="mt-5 pt-5 mb-4" data-aos="fade-right">
              <h2>{data?.heading_two?.title}</h2>
              <p> <strong>{data?.heading_two?.details}</strong> </p>
              <ul className="list-inline list-group ul-list-about mt-4">
                {data.heading_two?.feature_point.map(data => renderlist(data))}
              </ul>
            </Col>
            <Col md={6} className="mt-4 mb-4" data-aos="fade-left">
              <img className="abouimg mt-5" src={about} alt="about" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="all-company-feature mb-5 all-services mt-service com-miss-vis">
        <Container>
          <Row>
            <Col md={12} className="text-start mt-4 mb-4">
              <h2>{data.service_items.title}</h2>
              <p> {data.service_items.subTitle} </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="company-slide mission-vission">
                <Row>
                  <Col md={3}>
                    <div className="slider-icon icon-all" data-aos="flip-left">
                      <FaLaptop />
                    </div>
                  </Col>
                  <Col md={9} className="ps-0">
                    <h5 className='p-0'>{data.service_items?.items[0].title}</h5>
                    <p className='mb-0'> {data.service_items?.items[0].details} </p>
                  </Col>
                </Row>
              </div>
              <div className="company-slide mission-vission">
                <Row>
                  <Col md={9} className="pe-0 text-end">
                    <h5 className='p-0'>{data.service_items?.items[1].title}</h5>
                    <p className='mb-0'> {data.service_items?.items[1].details} </p>
                  </Col>
                  <Col md={3}>
                    <div className="slider-icon icon-all" data-aos="flip-right">
                      <FaMobileAlt />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} className="mt-4" data-aos="fade-left">
              <img className='img-width' src={serviceall} alt="serviceall" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="company-slide mission-vission">
                <Row>
                  <Col md={3}>
                    <div className="slider-icon icon-all" data-aos="flip-left">
                      <FaServer />
                    </div>
                  </Col>
                  <Col md={9} className="ps-0">
                    <h5 className='p-0'>{data.service_items?.items[2].title}</h5>
                    <p className='mb-0'> {data.service_items?.items[2].details} </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="company-slide mission-vission">
                <Row>
                  <Col md={9} className="pe-0 text-end">
                    <h5 className='p-0'>{data.service_items?.items[3].title}</h5>
                    <p className='mb-0'> {data.service_items?.items[3].details} </p>
                  </Col>
                  <Col md={3}>
                    <div className="slider-icon icon-all" data-aos="flip-right">
                      <FaFileCode />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="company-slide mission-vission">
                <Row>
                  <Col md={3}>
                    <div className="slider-icon icon-all" data-aos="flip-left">
                      <FaSearchengin />
                    </div>
                  </Col>
                  <Col md={9} className="ps-0">
                    <h5 className='p-0'>{data.service_items?.items[4].title}</h5>
                    <p className='mb-0'> {data.service_items?.items[4].details} </p>
                  </Col>
                </Row>
              </div>
            </Col>

            {data.service_items?.items[5] &&
              <Col md={6}>
                <div className="company-slide mission-vission">
                  <Row>
                    <Col md={9} className="pe-0 text-end">
                      <h5 className='p-0'>{data.service_items?.items[5]?.title}</h5>
                      <p className='mb-0'> {data.service_items?.items[5]?.details} </p>
                    </Col>
                    <Col md={3}>
                      <div className="slider-icon icon-all" data-aos="flip-right">
                        <FaSolarPanel />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            }
            {data.service_items?.items[6] &&
              <Col md={6} >
                <div className="company-slide mission-vission">
                  <Row>
                    <Col md={9} className="pe-0 text-end">
                      <h5 className='p-0'>{data.service_items?.items[6]?.title}</h5>
                      <p className='mb-0'> {data.service_items?.items[6]?.details} </p>
                    </Col>
                    <Col md={3}>
                      <div className="slider-icon icon-all" data-aos="flip-right">
                        <FaScrewdriver />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            }
            {data.service_items?.items[7] &&
              <Col md={6}>
                <div className="company-slide mission-vission">
                  <Row>
                    <Col md={9} className="pe-0 text-end">
                      <h5 className='p-0'>{data.service_items?.items[7]?.title}</h5>
                      <p className='mb-0'> {data.service_items?.items[7]?.details} </p>
                    </Col>
                    <Col md={3}>
                      <div className="slider-icon icon-all" data-aos="flip-right">
                        <FaSoundcloud />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            }

          </Row>
        </Container>
      </section>
      <RecentWork />
      <IndustryExperience />
    </Common>
  );
};

export default Service;