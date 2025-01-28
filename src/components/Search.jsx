import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from './ui/separator'
import { FaSearch } from "react-icons/fa"
import Data from '@/Shared/Data'


function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full 
	flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] md:w-max'>
		<Select>
		<SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
			<SelectValue placeholder="Automobili" />
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="light">Novo</SelectItem>
			<SelectItem value="dark">Rabljeno</SelectItem>
		</SelectContent>
		</Select>
		<Separator orientation='vertical' className="hidden md:block"/>
		<Select>
		<SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
			<SelectValue placeholder="Marka automobila" />
		</SelectTrigger>
		<SelectContent>
			{Data.CarMakes.map((maker, index) => (
				<SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
			))}
			
		</SelectContent>
		</Select>
		<Separator orientation='vertical' className="hidden md:block"/>
		<Select>
		<SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
			<SelectValue placeholder="Cijene" />
		</SelectTrigger>
		<SelectContent>
			{Data.Pricing.map((price, index) => (
				<SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
			))}
		</SelectContent>
		</Select>
		<div>
			<FaSearch className='text-[50px] bg-primary rounded-full 
			p-3 text-white hover:scale-105 transition-all cursor-pointer'/>
		</div>
		
	</div>
  )
}

export default Search