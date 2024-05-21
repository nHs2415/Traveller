import Mountain1 from "../images/image9.jpg"
import Mountain2 from "../images/image5.jpg"
import Mountain3 from "../images/image7.jpg"
import Mountain4 from "../images/image8.jpg"
import "./DestinationsStyles.css"
import DestinationData from "./DestinationData"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot within a time frame.</p>


        <DestinationData 
        className="first-des"
            heading="It had been a late night. To be more correct"
            text="It had been a late night. To be more correct, 
            it had been an early morning. It was now 3:00 AM and 
            George was just getting home. He wasn't sure if it had 
            been worth it. He was supposed to have been finished 
            by 10:00 PM, but his boss had implored him to stay and 
            help when it was clear they weren't going to meet the 
            10:00 PM target time. So, he had stayed an extra 5 hours 
            and lost a good night's sleep for something he didn't 
            really believe in, but he did anyway because 
            he was afraid if he refused he might lose his job. "
            img1={Mountain1}
            img2={Mountain2}
        />

<DestinationData 
className="first-des-reverse"
            heading="Generating random paragraphs can be an excellent"
            text="Generating random paragraphs can be an excellent way 
            for writers to get their creative flow going at the beginning 
            of the day. The writer has no idea what topic the random 
            paragraph will be about when it appears. This forces the writer 
            to use creativity to complete one of three common writing challenges. 
            The writer can use the paragraph as the first one of a short story 
            and build upon it. A second option is to use the random paragraph 
            somewhere in a short story they create. The third option is to have 
            the random paragraph be the ending paragraph in a short story. 
            No matter which of these challenges is undertaken, the writer is forced 
            to use creativity to incorporate the paragraph into their writing."
            img1={Mountain3}
            img2={Mountain4}
        />

        </div>
    );
}


export default Destination;