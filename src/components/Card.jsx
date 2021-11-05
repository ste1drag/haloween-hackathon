import React from "react";
import ReactCardFlip from "react-card-flip";

function Card(props){
    return(
        <ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
            <div>
                <img src={props.imgSrc1} alt="frontImage" style={{height:'175px',width:'90px'}} onClick={props.onClick}/>
            </div>
    
            <div>
                <img src={props.imgSrc2} alt="frontImage" style={{height:'175px',width:'90px'}} onClick={props.onClick}/>
            </div>
        </ReactCardFlip>

    );
}

export default Card;

