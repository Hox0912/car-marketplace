import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';
  
function CarItem({car}) {
  return (
    <Link to={'/listing-details/'+car?.id}>
        <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
            <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>Novo</h2>
            <img 
                src={car?.images[0]?.imageUrl || 'https://www.torque-gt.co.uk/media/magefan_blog/DSC027444.jpg'} 
                width={'100%'} 
                height={250} 
                className='rounded-t-xl h-[180px] object-cover'
            />
            <div className='p-4'>
                <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
                <Separator/>
                <div className='grid grid-cols-3 mt-5'>
                    <div className='flex flex-col items-center'>
                        <BsFillFuelPumpFill className='text-lg mb-2'/>
                        <h2>{car?.fuelType} </h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SlSpeedometer className='text-lg mb-2'/>
                        <h2>{car?.kilometers} Km </h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGearStickPattern className='text-lg mb-2'/>
                        <h2>{car?.transmission}  </h2>
                    </div>
                </div>
                <Separator className='my-2'/>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>€{car.sellingPrice}</h2>
                    <h2 className='text-primary text-sm flex gap-2 items-center'>
                    
                        Pogledaj detalje <MdOpenInNew /></h2>
                </div>
            </div>
        </div>
    </Link>
    
  )
}

export default CarItem;