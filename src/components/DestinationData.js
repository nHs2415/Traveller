import Mountain1 from "../images/image9.jpg"
import Mountain2 from "../images/image5.jpg"
import Mountain3 from "../images/image7.jpg"
import Mountain4 from "../images/image8.jpg"
import { Component } from "react";
import "./DestinationsStyles.css"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>   
                        {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
                
                
            </div>

        );
    }
}

export default DestinationData;