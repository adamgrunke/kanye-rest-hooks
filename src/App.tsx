import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Quote from './components/Quote';
import CageGif from './components/CageGif';
// import {IQuote} from './react-app-env'

const App: React.FC = () => {
const [quote, setQuote] = useState<string>('')
const [cageGif, setCageGif] = useState<string>('')

function handleNewQuote(): void {
  axios.get(`https://api.kanye.rest`)
  .then((res) => {
    console.log(res.data)
    setQuote(res.data.quote)
    setCageGif("https://www.placecage.com/gif/300/300")
    
  })
}

// function handleNewCage(): void {
//   setCageGif("https://www.placecage.com/gif/200/300")
// }

  return (
    <div className="App">
      <button onClick={() => handleNewQuote()}
              // onClick={() => handleNewCage()}
      >Refresh the insanity</button>
      <Quote quote={quote}/>
      <CageGif cageGif={cageGif}/>
    </div>
  );
}

export default App;