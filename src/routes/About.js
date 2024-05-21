import NavBar from "../NavBar";
import Hero from "../components/Hero";
import AboutImg from '../images/About.jpg'
import Footer from '../components/Footer';
import AboutUs from "../components/AboutUs";

function About () {
    return(
        <>
        
            <NavBar />
            <Hero 
            cName="hero-mid"
            heroImg={AboutImg}
            title="About"
            />
            <AboutUs/>
            <Footer/>
        
        </>
    );
}

export default About;