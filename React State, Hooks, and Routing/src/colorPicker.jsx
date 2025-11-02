import { useState } from "react";
import './colorPicker.css';

export const ColorPicker = () => {
  const [bgColor, setBackgroundColor] = useState("#ffffff");
  const handleBackground = (event) => {
    setBackgroundColor(event.target.value);
  }
  return <div id="color-picker-container" style={{backgroundColor: bgColor}}>
    <p>Доорх өнгөний оролтыг ашиглан өнгө сонгоно уу:</p>
    <br />
    <input id="color-input" type="color" onChange={handleBackground} value={bgColor}/>
  </div>
};