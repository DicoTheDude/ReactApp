import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/data';
import { homeObjTwo } from '../components/InfoSection/data';
import { homeObjThree } from '../components/InfoSection/data';
import { homeObjFour } from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';





const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
            <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />
                <InfoSection {...homeObjOne} />
                <InfoSection {...homeObjTwo} />
                <InfoSection {...homeObjThree} />
                <Projects />
                <InfoSection {...homeObjFour} />
                <Footer />
            </>
        );
    };

export default Home;