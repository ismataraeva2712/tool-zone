import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

import Tools from './Tools';
import Info from './Info';
import Business from './Business';
import ExtraSec from './ExtraSec';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Info></Info>
            <Tools></Tools>
            <ExtraSec></ExtraSec>
            <Business></Business>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;