import React, { useState, useEffect, useMemo } from 'react';

// 💡 Monxansh API-ийн хаяг
const MONGOLBANK_API_URL = 'https://monxansh.appspot.com/xansh.json';
const FALLBACK_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'MNT'];

// ⚠️ CSS-ийг JavaScript-д оруулсан (Inline styles-ийг хялбар болгох үүднээс)
const styles = {
    // 1. Container-ын ерөнхий загвар
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        backgroundColor: '#1a1a2e', /* Хар хөх дэвсгэр */
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        color: '#e0e0e0',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    title: {
        fontSize: '1.8em',
        marginBottom: '5px',
        fontWeight: '700',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: '1.1em',
        marginBottom: '25px',
        color: '#a0a0b0',
    },
    // 2. Input, Select загвар
    input: {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '6px',
        border: '1px solid #3c3c5c',
        backgroundColor: '#2a2a4c',
        color: '#ffffff',
        fontSize: '1.1em',
        boxSizing: 'border-box',
    },
    label: {
        display: 'block',
        textAlign: 'left',
        marginTop: '15px',
        marginBottom: '5px',
        fontSize: '0.9em',
        color: '#a0a0b0',
        fontWeight: '600',
    },
    // 3. Хөрвүүлсэн дүнгийн загвар
    amountDisplay: {
        marginTop: '30px',
        padding: '15px',
        fontSize: '1.3em',
        fontWeight: '700',
        color: '#76ff03', /* Тод ногоон өнгө */
        backgroundColor: '#1a3e0322',
        borderRadius: '8px',
    },
    // 4. Нэмэлт ханшийн мэдээллийн загвар
    rateInfo: {
        marginTop: '25px',
        paddingTop: '15px',
        borderTop: '1px solid #3c3c5c',
        textAlign: 'left',
        fontSize: '0.9em',
        color: '#a0a0b0',
    },
    infoItem: {
        margin: '5px 0',
    },
    infoValue: {
        fontWeight: 'bold',
        color: '#ffffff',
    }
};

export function CurrencyConverterTugrik() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('MNT');
  
  // ⚡️ Ханшийн үндсэн мэдээлэл (Хөрвүүлэлтэд ашиглагдана)
  const [mntRates, setMntRates] = useState({ MNT: 1 }); 
  // ⚡️ Бүх API-аас ирсэн түүхий мэдээлэл (Дэлгэцэн дээр харуулахад ашиглагдана)
  const [rawRatesData, setRawRatesData] = useState([]); 
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Monxansh API-аас ханшийг татаж авах
  useEffect(() => {
    // ... (fetchRates функц өмнөхтэй ижил)
    const fetchRates = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(MONGOLBANK_API_URL);
            if (!response.ok) {
                throw new Error('API-аас мэдээлэл ирэхгүй байна.');
            }
            
            const data = await response.json(); 
            setRawRatesData(data); // Түүхий мэдээллийг хадгалах
            
            const newRates = { MNT: 1 };
            data.forEach(item => {
                newRates[item.code] = item.rate_float; 
            });
            
            setMntRates(newRates);

        } catch (e) {
            setError(`Ханш татаж чадсангүй. ${e.message}.`);
            setMntRates({ MNT: 1, USD: 3579.04, EUR: 4126.81, JPY: 23.32 }); 
        } finally {
            setIsLoading(false);
        }
    };

    fetchRates();
  }, []);

  // 2. Хөрвүүлэх логик
  const convertedAmount = useMemo(() => {
    if (amount <= 0 || !mntRates[startCurrency] || !mntRates[targetCurrency] || isLoading) {
      return 0;
    }

    const amountInMNT = amount * mntRates[startCurrency];
    const result = amountInMNT / mntRates[targetCurrency];
    
    return result.toFixed(2);
  }, [amount, startCurrency, targetCurrency, mntRates, isLoading]);

  // 3. Сонгосон валютын дэлгэрэнгүй мэдээллийг олох
  const selectedRateInfo = rawRatesData.find(item => item.code === startCurrency);
    
  const currencyOptions = Object.keys(mntRates).length > 1 ? Object.keys(mntRates).sort() : FALLBACK_CURRENCIES;
  const conversionSubtitle = `${startCurrency} → ${targetCurrency} Хөрвүүлэлт`;


  // 4. UI
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Монголбанкны Шууд Ханштай Хөрвүүлэгч</h1>
      <p style={styles.subtitle}>{conversionSubtitle}</p>

      {/* Ачаалах болон Алдааны мэдээлэл */}
      {isLoading && <div style={{ color: '#76ff03', marginBottom: '15px' }}>Ханшийг татаж байна...</div>}
      {error && <div style={{ color: 'red', marginBottom: '15px', padding: '10px', border: '1px solid red', borderRadius: '4px' }}>⚠️ {error}</div>}
      
      {/* Input */}
      <input 
        type="number" 
        style={styles.input} 
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min="0"
        disabled={isLoading}
      />

      {/* Эхлэх мөнгөн тэмдэгт */}
      <label style={styles.label}>Эхлэх Мөнгөн Тэмдэгт:</label>
      <select 
        style={styles.input} /* Input-тай ижил загвар ашигласан */
        value={startCurrency}
        onChange={(e) => setStartCurrency(e.target.value)}
        disabled={isLoading}
      >
        {currencyOptions.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>

      {/* Хөрвүүлэх мөнгөн тэмдэгт */}
      <label style={styles.label}>Хөрвүүлэх Мөнгөн Тэмдэгт:</label>
      <select 
        style={styles.input} 
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
        disabled={isLoading}
      >
        {currencyOptions.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>

      {/* Хөрвүүлсэн дүн */}
      <div style={styles.amountDisplay}>
        Хөрвүүлсэн Дүн: <br />{convertedAmount} {targetCurrency}
      </div>

      {/* 5. Сонгосон валютын дэлгэрэнгүй мэдээлэл (Таны хүссэн хэсэг) */}
      {selectedRateInfo && (
        <div style={styles.rateInfo}>
          <div style={styles.infoItem}>
            **Мөнгөн тэмдэгт:** <span style={styles.infoValue}>{selectedRateInfo.name} ({selectedRateInfo.code})</span>
          </div>
          <div style={styles.infoItem}>
            **Эхний ханш:** <span style={styles.infoValue}>{selectedRateInfo.rate} MNT</span>
          </div>
          <div style={styles.infoItem}>
            **Ханш шинэчлэгдсэн:** <span style={styles.infoValue}>{selectedRateInfo.rate_date}</span>
          </div>
          <div style={styles.infoItem}>
            **API-д шинэчлэгдсэн:** <span style={styles.infoValue}>{selectedRateInfo.last_date}</span>
          </div>
        </div>
      )}
    </div>
  );
}