import NavBar from "../NavBar";
import Hero from "../components/Hero";
import AboutImg from '../images/About.jpg'

function About () {
    return(
        <>
        
            <NavBar />
            <Hero 
            cName="homeHero"
            heroImg={AboutImg}
            title="About"
            />
        
        </>
    );
}

export default About;