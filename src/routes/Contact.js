import NavBar from "../NavBar";
import Hero from "../components/Hero";
import ContactImg from '../images/image10.jpg'
import Footer from '../components/Footer';
import ContactForm from "../components/ContactForm";

function Contact () {
    return(
        <>
        
            <NavBar />
            <Hero 
            cName="hero-mid"
            heroImg={ContactImg}
            title="Contact"
            />
            <ContactForm/>
            <Footer/>
        
        </>
    );
}

export default Contact;