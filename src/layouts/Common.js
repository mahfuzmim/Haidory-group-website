import React from 'react';
import Footer from '../common/Footer';
import Navtop from '../common/Navtop';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Common = (props) => {
    return (
        <div>
         <Navtop/>
             {props.children}
             <Footer/>
        </div>
    );
};

export default Common;