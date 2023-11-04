import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollTop";
import Contact from "./pages/Contact";
import Aboutus from "./pages/about/Aboutus";

import Home from "./pages/home/Home";

import Challengers from "./pages/services/Challengers";
import Haidory from "./pages/services/Haidory";
import AlTayaba from "./pages/services/AlTayaba";
import ModernAir from "./pages/services/ModernAir";
import Kaniz from "./pages/services/Kaniz";

const Routing = () => {
  return (
    <HashRouter hashType="noslash">
      <ScrollToTop />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="home" element={<Home />} />

          <Route path="challengers" element={<Challengers />} />
          <Route path="haidory" element={<Haidory />} />

          <Route path="contact" element={<Contact />} />

          <Route path="about-us" element={<Aboutus />} />
          <Route path="al-tayaba" element={<AlTayaba />} />
          <Route path="modern-air" element={<ModernAir />} />
          <Route path="kaniz-travels" element={<Kaniz />} />
        </Route>
      </Routes>
    </HashRouter>
    // <HashRouter hashType='noslash'>
    //   <ScrollToTop />
    //   <Routes>
    //     <Route>
    //       <Route index element={<Home />} />
    //       <Route path="home" element={<Home />} />
    //       <Route path="angular" element={<Angularjs />} />
    //       <Route path="reactjs" element={<ReactJs />} />
    //       <Route path="python" element={<Python />} />
    //       <Route path="aspnet" element={<Aspnet />} />
    //       <Route path="vuejs" element={<VueJs />} />
    //       <Route path="php" element={<Php />} />
    //       <Route path="nodejs" element={<NodeJs />} />
    //       <Route path="laravel" element={<Laravel />} />
    //       <Route path="magento" element={<Magento />} />
    //       <Route path="wordpress" element={<Wordpress />} />
    //       <Route path="developmentcompany" element={<Offshore />} />
    //       <Route path="full-stack-development" element={<Development />} />
    //       <Route path="software-outsourcing-company" element={<SoftwareOutsourcing />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="free-quote" element={<FreeQuote />} />
    //       <Route path="blog" element={<Blog />} />
    //       <Route path="blog-details" element={<Blogdetails />} />
    //       <Route path="portfolio" element={<Portfolio />} />
    //       <Route path="about-us" element={<Aboutus />} />
    //       <Route path="team" element={<Team />} />
    //       <Route path="amazon-web-services" element={<Amazonweb />} />
    //       <Route path="it-consulting-services" element={<Itconsulting />} />
    //       <Route path="software-maintenance-support-services" element={<SoftwareMaintenance />} />
    //       <Route path="software-qa-and-testing-services" element={<SoftwareQaTestingServices />} />
    //       <Route path="ui-ux-design" element={<UIUXDesign />} />
    //       <Route path="database-management-services" element={<DatabaseManagementServices />} />
    //       <Route path="cyber-security" element={<CyberSecurity />} />
    //       <Route path="progressive-web-app-development" element={<Progressivewebapp />} />
    //       <Route path="erp-software-development-services" element={<ErpSoftwareDevelopment />} />
    //       <Route path="java-development" element={<JavaDevelopment />} />
    //       <Route path="hire-dedicated-software-developers-programmers" element={<HireDedicated />} />
    //       <Route path="vision" element={<Vision />} />
    //       <Route path="mission" element={<Mission />} />

    //     </Route>
    //   </Routes>
    // </HashRouter>
  );
};

export default Routing;
