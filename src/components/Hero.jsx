import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]'>
        <h2 className='text-lg'>Pronadi aute za prodaju u tvojoj blizini!</h2>
        <h2 className='text-[60px] font-bold'>Pronadi auto po svojem budgetu</h2>
        <Search />
        <img src='/honda-test.png' className='mt-10' />
    </div>
  )
}

export default Hero