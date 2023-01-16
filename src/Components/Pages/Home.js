import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Carousel from '../Carousel';
import Footer from '../Footer';
// import Location from '../Location';

function Home() {
    return (
        <>
            <HeroSection />
            <Carousel />
            {/* <Location /> */}
            {/* <MapContainer>
                center={center}
                zoom={ 10}
                {/* style={{width: '100px', height: '100px'}} }
            </MapContainer> */}
            <Footer />
        </>
    )
}

export default Home;