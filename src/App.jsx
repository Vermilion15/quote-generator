import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./Component/Quote";

const randomQuote = (quote) => {
  return quote[Math.floor(Math.random() * quote.length)];
};

const App = () => {
  const [quote, setQuote] = useState([]);
  const [random, setRandom] = useState();
  // Fetch Api
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setRandom(data[0]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getRandomQuote = () => {
    setRandom(randomQuote(quote));
  };

  return (
    <div className="container">
      <Quote 
      onHandleRandom={ getRandomQuote } 
      data={ random } 
      />
    </div>
  );
};

export default App;
