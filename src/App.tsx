import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
const [quote, setQuote] = useState<String>('')

function handleNewQuote(): void {
  axios.get(`https://api.kanye.rest`)
  .then((res) => {
    console.log(res.data)
    setQuote(res.data.quote)
  })
}

  return (
    <div className="App">
      <button onClick={() => handleNewQuote()}>quotes</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
