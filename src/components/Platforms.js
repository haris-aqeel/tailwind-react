import React from 'react'
import ethImg  from '../assets/eth (1).png' 
import btcImg  from '../assets/btc.png' 
import ordImg  from '../assets/ord.png' 
import uniImg  from '../assets/uni.png' 
const Platforms = () => {
  return (
    <div className='flex justify-between px-8 pt-5'>
        <img src={btcImg}/>
        <img src={ethImg}/>
        <img src={uniImg}/>
        <img src={ordImg}/>
        <img src={btcImg}/>
    </div>
  )
}

export default Platforms