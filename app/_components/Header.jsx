 import React from 'react'
 import Image from 'next/image'
import { useUser } from '@clerk/clerk-react' 
 function Header() {
  const {user, isSignedIn} = useUser();  
   return (
    
     <div className='p-5 border-b shadow-sm'>
        <div className='flex items-center justify-between'>
            <Image src={'/logo.svg'} width={50} height={30} alt='logo'/>
            <button className='p-2 items-center shadow-md'>Start here!</button>
        </div>
     </div>
   )
 }
 
 export default Header