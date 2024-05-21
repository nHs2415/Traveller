import NavBar from "../NavBar";
import Hero from "../components/Hero";
import ServiceImg from '../images/Services.jpg'

function Service () {
    return(
        <>
        
            <NavBar />
            <Hero 
            cName="hero-mid"
            heroImg={ServiceImg}
            title="Service"
            />
        
        </>
    );
}

export default Service;