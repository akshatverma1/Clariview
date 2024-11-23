import React from 'react';
import { useState } from 'react';
import "./backgroundChanger.css";
export default function Practisefunction() {

 
    let [Colorc, SetColor] = useState(false);
    let [Colorcrrr, SetColorrr] = useState("white");
    let [btnLetter,SetbtnLetter] = useState("Light");


    let color = () => {
        console.log("button clicked");
        if (Colorc == true) {
            SetColorrr("white");
            SetColor(false);
            SetbtnLetter("Light")
        } else {
            SetColorrr("black");
            SetColor(true);
            SetbtnLetter("Dark");
        }
    }

    return (
        <div style={{backgroundColor:Colorcrrr}} className='mainClass'>
            <button  onClick={color}>{btnLetter}</button>
        </div>
    )
}