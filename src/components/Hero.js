import "./Hero.css";


function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img  alt="HeroImg"src={props.heroImg} />
        </div>

        <div className="hero-text">
             <h1>{props.title}</h1>
             <p>{props.para}</p>
             <a href={props.link} className={props.btnClass}>
                {props.buttonText}
             </a>

        </div>
        
        </>
    );
}

export default Hero;