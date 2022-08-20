import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
;
    return (
        <div >
            <Banner data-aos="zoom-in-up" ></Banner>
            <Services></Services>
          <Business></Business>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;