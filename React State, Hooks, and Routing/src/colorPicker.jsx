import { useState } from "react";
import './colorPicker.css';
import findComplementaryColor from "./complementaryColor";

export const ColorPicker = () => {
  const [bgColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState(findComplementaryColor(bgColor));
  const handleColor = (event) => {
    setColor(findComplementaryColor(event.target.value));
  }
  const handleBackground = (event) => {
    setBackgroundColor(event.target.value);
  }
  
  return <div id="color-picker-container" style={{backgroundColor: bgColor}}>
    <p style={{color}}>Доорх өнгөний оролтыг <br />ашиглан өнгө сонгоно уу:</p>
    <br />
    <input id="color-input" type="color" onChange={(e) => {handleBackground(e); handleColor(e)}} value={bgColor}/>
  </div>
};