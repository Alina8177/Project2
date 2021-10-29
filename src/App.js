import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [productData, setProductData] = useState();

  useEffect(() => {
   fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "29a55ca99emshd4a5fd759a735c3p11eae3jsnf2d5bf9b4f21"
      }
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      setProductData(data.results);
    })
    .catch(err => {
      console.error(err);
    });
    
  }, []);




console.log(productData)
  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;


