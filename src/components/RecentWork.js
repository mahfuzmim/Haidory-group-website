import React from 'react';
// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import worka from '../assets/images/worka.png';
import workb from '../assets/images/workb.png';
import workc from '../assets/images/workc.png';
import workd from '../assets/images/workd.png';
import worke from '../assets/images/worke.png';
import workf from '../assets/images/workf.png';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';



const RecentWork = () => {

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
      }
    },
  };


  return (
    <section className="all-company-feature bg-deep-gray mt-5 pt-5">
      <Container>
        <Row>
          <Col md={12} className="text-start mt-4 mb-4">
            <h2>Our Recent Works</h2>
          </Col>
        </Row>
        <Row>
          <OwlCarousel className='owl-theme slider-custom' {...options2} loop margin={20} nav>

            <div class='item'>
              <div className='work-block-slide'> <img className='img-width-full' src={worka} alt="worka" /> </div>
            </div>
            <div class='item'>
              <div className='work-block-slide'> <img className='img-width-full' src={workb} alt="workb" /> </div>
            </div>
            <div class='item'>
              <div className='work-block-slide'> <img className='img-width-full' src={workc} alt="workc" /> </div>
            </div>
            <div class='item'>
              <div className='work-block-slide'> <img className='img-width-full' src={workd} alt="workd" /> </div>
            </div>

            <div class='item'>
              <div className='work-block-slide'> <img className='img-width-full' src={worke} alt="worke" /> </div>
            </div>
            <div class='item'>
              <div className='work-block-slide'> <img className='img-width-full' src={workf} alt="workf" /> </div>
            </div>

          </OwlCarousel>

        </Row>
      </Container>
    </section>
  );
};

export default RecentWork;