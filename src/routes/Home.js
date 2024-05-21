
import NavBar from '../NavBar';
import Destination from '../components/Destinations';
import Hero from '../components/Hero';
import Trip from '../components/Trip';
import HomeImg from '../images/home.jpg'
import "./HomeStyles.css";



function Home () {
    return(
        <>
        <NavBar />
        <Hero 
        cName="homeHero" 
        heroImg={HomeImg} 
        title="Your Journey Your Story" 
        para="Choose Your Favourite Destination"
         
        buttonText="Travel Plan"
        btnClass="show"
        />
        <Destination />
        <Trip />
    
        </>
    );
}

export default Home;