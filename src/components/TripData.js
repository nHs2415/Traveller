import "./Trip.css"
import Mountain5 from "../images/image5.jpg"
import Mountain4 from "../images/image4.jpg"
import Mountain6 from "../images/image6.jpg"

function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img alt="image" src={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData;