import React from 'react'
import {useNavigate} from "react-router-dom";

export default function CoinDetails({name,iconURL,price,rank,priceChange1h,priceChange1d,priceChange1w,twitterURL,websiteURL,totalSupply,volume}) {

    let navigate = useNavigate();

  return (
    <div className='CoinDetails'>
        <div className="iconContainer">
            <img src={iconURL}/>
            <h1>{name}</h1>
        </div>
        <h2>Price: {price}</h2>
        <h2>Rank: {rank}</h2>
        <h2>Price change(1 day): <span style={priceChange1d>0?{color:"green"}:{color:"red"}} >{priceChange1d}%</span></h2>
        <h2>Price change(1 hour): <span style={priceChange1h>0?{color:"green"}:{color:"red"}} >{priceChange1h}%</span></h2>
        <h2>Price change(1 week): <span style={priceChange1w>0?{color:"green"}:{color:"red"}} >{priceChange1w}%</span></h2>
        <h2>Twitter: <a href={twitterURL} target="_blank">{twitterURL}</a></h2>
        <h2>Website: <a href={websiteURL} target="_blank">{websiteURL}</a></h2>
        <h2>Total Supply: {totalSupply}</h2>
        <h2>Volume: {volume}</h2>
        <button onClick={()=>{
            navigate("/");
        }}>Back</button>
    </div>
    
  )
}
