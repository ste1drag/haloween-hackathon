import React, { useState } from "react";
import Card from "./Card";
import backgroundImg from "../images/backgroundImg.png";
import hat from "../images/hat.png";
import candy from "../images/candy.png";
import castle from "../images/castle.png";
import ghost from "../images/ghost.jpg";
import hand from "../images/hand.png";
import happy from "../images/happy.jpg";
import bat from "../images/bat.png";
import pumpkin from "../images/pumpkin.png";


let cardsArray=[{ "id": 1, "imgSrc1": backgroundImg, "imgSrc2": bat, "isFlipped": false, "isMatched": false },
{ "id": 2, "imgSrc1": backgroundImg, "imgSrc2": candy, "isFlipped": false, "isMatched": false },
{ "id": 3, "imgSrc1": backgroundImg, "imgSrc2": ghost, "isFlipped": false, "isMatched": false },
{ "id": 4, "imgSrc1": backgroundImg, "imgSrc2": castle, "isFlipped": false, "isMatched": false },
{ "id": 5, "imgSrc1": backgroundImg, "imgSrc2": hand, "isFlipped": false, "isMatched": false },
{ "id": 6, "imgSrc1": backgroundImg, "imgSrc2": happy, "isFlipped": false, "isMatched": false },
{ "id": 7, "imgSrc1": backgroundImg, "imgSrc2": hat, "isFlipped": false, "isMatched": false },
{ "id": 8, "imgSrc1": backgroundImg, "imgSrc2": pumpkin, "isFlipped": false, "isMatched": false },
];






function Game(){
    const gridContainer={display:'grid',gridGap:'50px',gridTemplateColumns:'auto auto auto auto'};

    const [cards,setCards]=useState([...cardsArray,...cardsArray]);


    function handleClick(id){
        let cardsChange=cards;
        const index=cardsChange.findIndex(card=>card.id===id);
        cardsChange[index].isFlipped=!cardsChange[index].isFlipped;
        setCards([...cardsChange]);
    }



    let rows=[];
    cards.map(card=>rows.push(<Card id={card.id} imgSrc1={card.imgSrc1} imgSrc2={card.imgSrc2} 
        isFlipped={card.isFlipped} isMatched={card.isMatched} onClick={()=>handleClick(card.id)}/>));
    return(
        <div style={gridContainer}>
            {rows}
            
        </div>
    )
}

export default Game;