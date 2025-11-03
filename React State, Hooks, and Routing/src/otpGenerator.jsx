import { useState, useEffect, useRef } from "react";
import "./otpGenerator.css";

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("Click 'Generate OTP' to get a code");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const timerRef = useRef(null); // ⏱️ Таймерийн ID-г хадгалах ref

  const generateNewOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimeLeft(5);
    setIsGenerating(true);
  };

  useEffect(() => {
    if (isGenerating && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isGenerating) {
      setIsGenerating(false);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeLeft, isGenerating]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp}</h2>
      <p id="otp-timer" aria-live="polite">
        {isGenerating && timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : !isGenerating && otp !== "Click 'Generate OTP' to get a code"
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateNewOtp}
        disabled={isGenerating}
      >
        Generate OTP
      </button>
    </div>
  );
};
