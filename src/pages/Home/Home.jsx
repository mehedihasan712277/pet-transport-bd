import React from 'react'
import Banner from './Banner';
import About from './../About/About';
import Service from './../Service/Service';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';


const Home = () => {
        return (
                <>
                        <Banner></Banner>
                        <About></About>
                        <Service></Service>
                        <Contact></Contact>
                        <Footer></Footer>
                </>
        )
}

export default Home