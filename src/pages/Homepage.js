import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import Coin from '../components/Coin';
import Cryptoheader from '../components/Cryptoheader';
import '../App.css';

export default function Homepage() {
    const [listOfCoins,setListOfCoins] = useState([]);
    const [searchWord,setSearchWord] = useState("");

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100");
                // console.log(response.data);
                setListOfCoins(response.data.coins);
            }catch(err){
                console.error(err);
            }
        }
        fetchData();
    },[]);

    const filteredCoins = listOfCoins.filter((coin)=>{
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });

  return (
    <div>
        <Cryptoheader mainpage={true} setSearchWord={setSearchWord}  /> 
       
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin,key)=>{
          return <Coin key={key} id={coin.id} name={coin.name} price={coin.price} symbol={coin.symbol} iconURL={coin.icon} />
        })}
      </div>
    </div>
  )
}
