import React, { useEffect, useState } from "react";
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


let cardsArray=[{ "id": 1,"key":1,"imgSrc1": backgroundImg, "imgSrc2": bat, "isFlipped": false, "isMatched": false },
{ "id": 2,"key":2, "imgSrc1": backgroundImg, "imgSrc2": candy, "isFlipped": false, "isMatched": false },
{ "id": 3,"key":3, "imgSrc1": backgroundImg, "imgSrc2": ghost, "isFlipped": false, "isMatched": false },
{ "id": 4, "key":4,"imgSrc1": backgroundImg, "imgSrc2": castle, "isFlipped": false, "isMatched": false },
{ "id": 5, "key":5,"imgSrc1": backgroundImg, "imgSrc2": hand, "isFlipped": false, "isMatched": false },
{ "id": 6,"key":6, "imgSrc1": backgroundImg, "imgSrc2": happy, "isFlipped": false, "isMatched": false },
{ "id": 7,"key":7, "imgSrc1": backgroundImg, "imgSrc2": hat, "isFlipped": false, "isMatched": false },
{ "id": 8,"key":8, "imgSrc1": backgroundImg, "imgSrc2": pumpkin, "isFlipped": false, "isMatched": false },
{ "id": 9, "key":1,"imgSrc1": backgroundImg, "imgSrc2": bat, "isFlipped": false, "isMatched": false },
{ "id": 10,"key":2, "imgSrc1": backgroundImg, "imgSrc2": candy, "isFlipped": false, "isMatched": false },
{ "id": 11,"key":3, "imgSrc1": backgroundImg, "imgSrc2": ghost, "isFlipped": false, "isMatched": false },
{ "id": 12,"key":4, "imgSrc1": backgroundImg, "imgSrc2": castle, "isFlipped": false, "isMatched": false },
{ "id": 13,"key":5, "imgSrc1": backgroundImg, "imgSrc2": hand, "isFlipped": false, "isMatched": false },
{ "id": 14,"key":6, "imgSrc1": backgroundImg, "imgSrc2": happy, "isFlipped": false, "isMatched": false },
{ "id": 15,"key":7, "imgSrc1": backgroundImg, "imgSrc2": hat, "isFlipped": false, "isMatched": false },
{ "id": 16,"key":8, "imgSrc1": backgroundImg, "imgSrc2": pumpkin, "isFlipped": false, "isMatched": false },
];







function Game(){
    const gridContainer={display:'grid',gridGap:'50px',gridTemplateColumns:'auto auto auto auto'};

    const [cards,setCards]=useState([]);
    const [timer,setTimer]=useState(null);
    const [isStarted,setStarted]=useState(false);
    const [clicks,setClicks]=useState(0);
    const [username,setUsername]=useState("");
    const [points,setPoints]=useState(0);
    const [ranking,setRanking]=useState([]);


    function handleClick(id){
        if(!isStarted){
            return;
        }
        let cardsChange=cards;
        const index=cardsChange.findIndex(card=>card.id===id);
        if(cards[index].isMatched || cards[index].isFlipped){
            return;
        }
        cardsChange[index].isFlipped=!cardsChange[index].isFlipped;
        setCards([...cardsChange]);
        setClicks(clicks+1);
    }

    function startGame(){
        cardsArray.forEach(card=>card.isFlipped=false);
        cardsArray.forEach(card=>card.isMatched=false);
        setCards([...cardsArray].sort((a,b)=>0.5-Math.random()));
        setStarted(true);
        setTimer(45);
        setClicks(0);
        setPoints(0);
    }

    useEffect(()=>{
        if(isStarted){
            let filteredCards=cards;
            let cardsClone=cards;
            if(clicks===2){
                const [a,b]=filteredCards.filter(card=>card.isFlipped && !card.isMatched);
                if(a.key===b.key){
                    const i1=cardsClone.findIndex(card=>card.id===a.id);
                    const i2=cardsClone.findIndex(card=>card.id===b.id);
                    cardsClone[i1].isMatched=true;
                    cardsClone[i2].isMatched=true;
                    setCards([...cardsClone]);
                    setClicks(0);
                    setPoints(points+1);
                }
                else{
                    const i1=cardsClone.findIndex(card=>card.id===a.id);
                    const i2=cardsClone.findIndex(card=>card.id===b.id);
                    setTimeout(()=>{
                        cardsClone[i1].isFlipped=false;
                        cardsClone[i2].isFlipped=false;
                        setCards([...cardsClone]);
                    },650);
                    setClicks(0);
                    
                }

            }
        }
        
    },[clicks]);


    useEffect(()=>{
        if(!isStarted){
            return;
        }

        if(timer===0){
            setStarted(false);
            return;
        }
        if(points===8){
            let rank=ranking;
            rank.push({user:username,score:points});
            setRanking([...rank]);
            setStarted(false);
            return;
        }
            setTimeout(()=>{

                setTimer(timer-1);
    
            },1000)
        

    },[timer]);

    let rows=[];

    cards.map(card=>rows.push(<Card id={card.id} imgSrc1={card.imgSrc1} imgSrc2={card.imgSrc2} 
        isFlipped={card.isFlipped} isMatched={card.isMatched} onClick={()=>handleClick(card.id)}/>));

    return(
        <div>
            {isStarted ?
             <div>
                <div>
                   {username}
                </div>
                <div>
                    {points}
                </div>
                <div>
                    {timer}
                </div>
                <div style={gridContainer}>
                   {rows}
                </div>
            </div>
             : 
             <div>

                 <input type="text" onChange={(e)=>setUsername(e.target.value)} />
                 <button onClick={()=>startGame()}>Zapocni igru</button>

                 <div>
                    <h3>Rang lista</h3>
                    {ranking.map(rank=>{
                        <li>{rank.user} {rank.score}</li>
                    })}
                </div>

             </div> 
             }
        
        </div>
    )
}

export default Game;