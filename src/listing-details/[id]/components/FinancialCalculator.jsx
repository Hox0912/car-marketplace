import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function FinancialCalculator({carDetail}) {

    const [carPrice, setCarPrice]=useState(0);
    const [interestRate, setInterestRate]=useState(0);
    const [loanTerm, setLoanTerm]=useState(0);
    const [downPayment, setDownPayment]=useState(0);
    const [monthlyPayment, setMonthlyPayment]=useState(0);

    const CalculateMonthlyPayment=()=>{
        const Principal=carPrice-downPayment;
        const MonthlyInterestRate=interestRate/1200

        const MonthlyPayment=(Principal*MonthlyInterestRate*Math.pow(1+MonthlyInterestRate,loanTerm))/
        (Math.pow(1+MonthlyInterestRate,loanTerm)-1);

        setMonthlyPayment(MonthlyPayment.toFixed(2));
    }

  return (
    <div className='p-10 border rounded-xl shadow-md mt-7'>
        <h2 className='font-medium text-2xl'>Kalkulator</h2>
        <div className='flex gap-5 mt-5'> 
            <div className='w-full'>
                <label>Cijena €</label>
                <Input type="number" onChange={(e)=>setCarPrice(e.target.value)} />
            </div>
            <div className='w-full'>
                <label>Kamata</label>
                <Input type="number" onChange={(e)=>setInterestRate(e.target.value)} />
            </div>
        </div>
        <div className='flex gap-5 mt-5'>
            <div className='w-full'>
                <label>Trajanje leasinga (u mjesecima) </label>
                <Input type="number" onChange={(e)=>setLoanTerm(e.target.value)} />
            </div>
            <div className='w-full'>
                <label>Predujam / ucesce</label>
                <Input type="number" onChange={(e)=>setDownPayment(e.target.value)} />
            </div>
        </div>

        {monthlyPayment>0&& <h2 className='font-medium text-2xl mt-5'>Vasa mjesecna rata je: 
        <span className='text-4xl font-bold'>{monthlyPayment} €</span></h2>}
        <Button className="w-full mt-5" size="lg"
        onClick={CalculateMonthlyPayment}
        >Izracunaj</Button>
    </div>
  )
}

export default FinancialCalculator