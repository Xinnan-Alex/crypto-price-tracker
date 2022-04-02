import React from 'react'
import {useNavigate} from "react-router-dom";

function Coin({id,name,price,symbol,iconURL}) {
  const navigate = useNavigate();

  return (
    <div className='Coin' onClick={()=>{
      navigate(`/currency/${id}`);
    }}>
        <h1>Name: {name}</h1>
        <img src={iconURL}/>
        <h3>Price: {price.toFixed(3)}</h3>
        <h3>Symbol: {symbol}</h3>
    </div>
  )
}

export default Coin