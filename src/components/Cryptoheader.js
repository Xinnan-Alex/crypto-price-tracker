import { useState } from "react";
import React from 'react'

export default function Cryptoheader({mainpage,setSearchWord}) {

    return (
        <div className='cryptoHeader'>
            <h1>Welcome to Crypto Land</h1>
            {mainpage && <input type="text" placeholder='Bitcoin...' onChange={(event)=>{
                setSearchWord(event.target.value)
            }}/>
            }
            
        </div>
    )
}
