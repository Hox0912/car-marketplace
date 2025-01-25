import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'
import { User } from 'lucide-react'
import { Link } from 'react-router-dom'
// import { User } from './ui/user'

function Header() {
    const {user , isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center p-5 shadow-sm w-full'>
        <img src='/logo.svg' width={150} height={150} alt='Logo'/> 

        <ul className='flex-1 flex justify-center gap-16'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Pretrazi</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Novo</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Rabljeno</li>
        </ul>

        {isSignedIn?
            <div className='flex items-center gap-5'>
                <UserButton />
                <Link to={'/profile'}>
                    <Button>Postavi oglas</Button>
                </Link>
            </div>
            :
            <Button>Postavi oglas</Button>
        }I

    </div>
  )
}

export default Header