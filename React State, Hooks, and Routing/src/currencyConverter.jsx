import { useState, useMemo } from "react";
import './currencyConverter.css';

const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
    MNT: 3579.04
};

const currencyOptions = Object.keys(goodMapping);

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');

  // Шаардлага 6-г хангахын тулд: useMemo-ийн хамаарлуудад (dependencies) зөвхөн amount, startCurrency-ийг оруулсан.
  // targetCurrency өөрчлөгдөхөд энэ блок дахин ажиллахгүй.
  const convertedAmountBase = useMemo(() => {
    if (amount <= 0 || !goodMapping[startCurrency]) {
      // 0 байвал 0 буцаана.
      return 0;
    }

    // Эхлэх мөнгөн тэмдэгтийг USD-д хөрвүүлэх
    const amountInUSD = amount / goodMapping[startCurrency];
    
    // Энэ нь USD-ээрх суурь дүн
    return amountInUSD;
    
  }, [amount, startCurrency]); // ⚡️ Зөвхөн amount, startCurrency өөрчлөгдөхөд дахин тооцоолно. (Шаардлага 6-г хангана)

  // Эцсийн хөрвүүлсэн дүнг targetCurrency-гээр үржүүлж, форматлана.
  // Энэ хэсэг нь үргэлж шинэчлэгдэж байх ёстой (Шаардлага 8-г хангана).
  const finalConvertedAmount = (convertedAmountBase * goodMapping[targetCurrency]).toFixed(2);
    
  const conversionSubtitle = `${startCurrency} → ${targetCurrency} Хөрвүүлэлт`;


  return (
    // Энэ хэсэгт өмнөх CSS-ийг ашигласан.
    <div className="currency-converter-container"> 
      <h1 className="converter-title">Мөнгөн Тэмдэгт Хөрвүүлэгч</h1>
      <p className="conversion-subtitle">{conversionSubtitle}</p>

      {/* Шаардлага 2: Input */}
      <input 
        type="number" 
        className="converter-input" 
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min="0"
      />

      {/* Шаардлага 3: Эхлэх select */}
      <label className="converter-label">Эхлэх Мөнгөн Тэмдэгт:</label>
      <select 
        className="converter-select"
        value={startCurrency}
        onChange={(e) => setStartCurrency(e.target.value)} // Шаардлага 5, 7: Өөрчлөхөд дахин тооцоологдож, текст өөрчлөгдөнө.
      >
        {currencyOptions.map(currency => (
          <option key={currency} value={currency}>{currency}</option> // Шаардлага 4
        ))}
      </select>

      {/* Шаардлага 3: Хөрвүүлэх select */}
      <label className="converter-label">Хөрвүүлэх Мөнгөн Тэмдэгт:</label>
      <select 
        className="converter-select"
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)} // Шаардлага 6, 8: Өөрчлөхөд *тооцоололгүй* (base), зөвхөн текст (targetCurrency) өөрчлөгдөнө.
      >
        {currencyOptions.map(currency => (
          <option key={currency} value={currency}>{currency}</option> // Шаардлага 4
        ))}
      </select>

      {/* Шаардлага 9: Хөрвүүлсэн дүнгийн формат */}
      <div className="converted-amount">
        Хөрвүүлсэн Дүн: {finalConvertedAmount} {targetCurrency}
      </div>
    </div>
  );
}