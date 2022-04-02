import React from 'react'

function Coin({name,price,symbol,iconURL}) {
  return (
    <div className='Coin'>
        <h1>Name: {name}</h1>
        <img src={iconURL}/>
        <h3>Price: {price.toFixed(3)}</h3>
        <h3>Symbol: {symbol}</h3>
    </div>
  )
}

export default Coin