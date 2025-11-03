import { useState, useEffect } from "react";
import "./fruitsSearch.css";

const allFruits = [
  "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry",
  "Cherry", "Coconut", "Cranberry", "Date", "Dragonfruit", "Durian",
  "Fig", "Grape", "Grapefruit", "Guava", "Kiwi", "Lemon", "Lime",
  "Lychee", "Mango", "Melon", "Nectarine", "Orange", "Papaya",
  "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Raspberry",
  "Strawberry", "Tangerine", "Watermelon"
];
export function FruitsSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    // 💡 Энд хайлт хийх функц ажиллаж байна.
    const runSearch = () => {
      // 1. Хайлтын утгыг жижиг үсгээр хөрвүүлэх
      const lowerCaseQuery = query.toLowerCase();

      // 2. allFruits жагсаалтыг шүүх (filter)
      const filteredFruits = allFruits.filter(fruit => {
        // Жимсний нэрийг жижиг үсгээр хөрвүүлэх
        const lowerCaseFruit = fruit.toLowerCase();
        
        // Жимсний нэр дотор хайлтын утга орсон эсэхийг шалгах
        // .includes() нь 'энэ дотор байгаа юу?' гэж шалгадаг.
        return lowerCaseFruit.includes(lowerCaseQuery);
      });
      
      // 3. Үр дүнг хувьсагчид хадгалах
      setResults(filteredFruits);
    };

    // Та timeout-ыг хэвээр үлдээгээд, дотор нь хайлтаа хийнэ.
    const timeoutId = setTimeout(runSearch, 100);
    
    return () => clearTimeout(timeoutId);
  }, [query]);    

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results">
        {results.length > 0 ? (
          results.map(item => (
            <p key={item} className="result-item">{item}</p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}