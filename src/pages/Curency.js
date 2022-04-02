import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from "react-router-dom";
import Axios  from 'axios';
import Cryptoheader from '../components/Cryptoheader';
import CoinDetails from '../components/CoinDetails';

export default function Curency() {

    const [coinData,setCoinData] = useState({
        id:"",
        icon:"",
        name:"",
        price:0,
        rank:0,
        priceChange1h:0,
        priceChange1d:0,
        priceChange1w:0,
        twitterUrl:"",
        websiteUrl:"",
        totalSupply:0,
        volume:0,
    });

    let {id} = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await Axios.get(`https://api.coinstats.app/public/v1/coins/${id}`);
                console.log(response.data);
                setCoinData({
                    id:response.data.coin.id,
                    icon:response.data.coin.icon,
                    name:response.data.coin.name,
                    price:response.data.coin.price,
                    rank:response.data.coin.rank,
                    priceChange1d:response.data.coin.priceChange1d,
                    priceChange1w:response.data.coin.priceChange1w,
                    priceChange1h:response.data.coin.priceChange1h,
                    twitterUrl:response.data.coin.twitterUrl,
                    websiteUrl:response.data.coin.websiteUrl,
                    totalSupply:response.data.coin.totalSupply,
                    volume:response.data.coin.volume,
                });
            }catch(err){
                console.err(err);
            }
        }
        fetchData();

    },[]);

  return (
      <div>
        <Cryptoheader/>
        <div className='Currency'>
            <CoinDetails 
            name={coinData.name} 
            iconURL={coinData.icon} 
            price={coinData.price} 
            rank={coinData.rank} 
            priceChange1h={coinData.priceChange1h} 
            priceChange1d={coinData.priceChange1d}
            priceChange1w={coinData.priceChange1w}
            twitterURL={coinData.twitterUrl}
            websiteURL={coinData.websiteUrl}
            totalSupply={coinData.totalSupply}
            volume={coinData.volume}
            />
        </div>
      </div>
    
  )
}
