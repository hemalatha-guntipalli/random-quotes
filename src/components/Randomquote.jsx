import React, { useState } from 'react'
import './Randomquote.css'


const Randomquote = () => {

let quotes=[];

async function loadquotes(){
    const response=await fetch("https://type.fit/api/quotes");
    quotes =await response.json();
}


const random=()=>{
    const select=quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select)
}

    const [quote,setQuote]=useState({
        text:"Everything you've ever wanted is sitting on the other side of fear.",
        author:"jhon wolfgan von goethe"
    });
    loadquotes();
  return (
    <div className='container'>
    <div className='quote'>{quote.text}</div>
    <div className="author">
            - {quote.author.split(',')[0]}
        </div>
    <div className="line"></div>
    <div className="bottom">
        
            <div className="icon">
            <img src="./src/assets/reload.png" alt="" onClick={()=>{random()}}/ >
            </div>
    </div>
 </div>
  )
}

export default Randomquote
