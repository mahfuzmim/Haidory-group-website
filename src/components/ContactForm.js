import React from 'react';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { FaArrowRight, FaCommentAlt, FaCommentDots, FaMobileAlt, FaUserAlt } from 'react-icons/fa';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const ContactForm = () => {

  return (
    <div className="get-touch-form">
      <Form>
        <div className="mb-3 me-0 sch-block">
          <h3 className="h3-schedule mb-1"> <strong>Lets Discuss Your Project</strong> </h3>
          <p className="mb-5">Guaranteed Response within One Business Day!</p>
        </div>
        <Form.Group className="mb-4 pos-re"> <span>
          <FaUserAlt />
        </span>
          <Form.Control placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-4 pos-re" controlId=""> <span>
          <FaCommentAlt />
        </span>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-4 pos-re"> <span>
          <FaMobileAlt />
        </span>
          <Form.Control type="text" placeholder="Contact Number" />
        </Form.Group>
        <Form.Group className="mb-4 pos-re" controlId="exampleForm.ControlTextarea1"> <span className='comspan'>
          <FaCommentDots />
        </span>
          <Form.Control as="textarea" className="textform" placeholder="Comment" rows={2} />
        </Form.Group>
        <Col md={12} className="text-center mt-4">
          <Button variant="primary btn-custom mt-3 btn-big">Submit
            <FaArrowRight className="ms-5" />
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default ContactForm;