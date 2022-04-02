import React,{useEffect,useState} from 'react';
import './App.css';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {

  const [listOfCoins,setListOfCoins] = useState([]);
  const [searchWord,setSearchWord] = useState("");

  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then((response)=>{
        setListOfCoins(response.data.coins)
    });
  },[]);

  const filteredCoins = listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className='cryptoHeader'>
        <h1>Welcome to Crypto Land</h1>
        <input type="text" placeholder='Bitcoin...' onChange={(event)=>{
            setSearchWord(event.target.value);
        }}/>
      </div>
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin,key)=>{
          return <Coin key={key} name={coin.name} price={coin.price} symbol={coin.symbol} iconURL={coin.icon} />
        })}
      </div>
    </div>
  );
}

export default App;
