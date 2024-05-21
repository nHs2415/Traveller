import NavBar from "../NavBar";
import Hero from "../components/Hero";
import ServiceImg from '../images/Services.jpg'
import Footer from '../components/Footer'
import Trip from "../components/Trip"

function Service () {
    return(
        <>
        
            <NavBar />
            <Hero 
            cName="hero-mid"
            heroImg={ServiceImg}
            title="Service"
            />
            <Trip/>
            <Footer/>
        
        </>
    );
}

export default Service;