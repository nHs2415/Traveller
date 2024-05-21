import "./Trip.css"
import TripData  from "./TripData";
import Mountain5 from "../images/image5.jpg"
import Mountain4 from "../images/image4.jpg"
import Mountain6 from "../images/image6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>
            You can discover unique destinations using Google Maps.
            </p>

            <div className="tripcard">
                <TripData
                image={Mountain4}
                heading="Trip in Sigiriya"
                text="Another productive way to use this tool to 
                begin a daily writing routine. One way is to generate 
                a random paragraph with the intention to try to rewrite 
                it while still keeping the original meaning. The purpose 
                here is to just get the writing started so that when 
                the writer goes onto their day's writing projects, 
                words are already flowing from their fingers."
                />

                <TripData
                image={Mountain5}
                heading="Trip in Jungle Beach"
                text="Another productive way to use this tool to 
                begin a daily writing routine. One way is to generate 
                a random paragraph with the intention to try to rewrite 
                it while still keeping the original meaning. The purpose 
                here is to just get the writing started so that when 
                the writer goes onto their day's writing projects, 
                words are already flowing from their fingers."
                />

                <TripData
                image={Mountain6}
                heading="Trip in Temple of the tooth"
                text="Another productive way to use this tool to 
                begin a daily writing routine. One way is to generate 
                a random paragraph with the intention to try to rewrite 
                it while still keeping the original meaning. The purpose 
                here is to just get the writing started so that when 
                the writer goes onto their day's writing projects, 
                words are already flowing from their fingers."
                />
            </div>

        </div>
    );
}

export default Trip;