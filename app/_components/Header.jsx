 import React from 'react'
 import Image from 'next/image'
 
 function Header() {
   return (
    
     <div className='p-5 border-b shadow-sm'>
        <div className='flex items-center justify-between'>
            <Image src={'/logo.svg'} width={50} height={30} alt='logo'/>
        </div>
     </div>
   )
 }
 
 export default Header