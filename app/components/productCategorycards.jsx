import React from 'react'
import Image from 'next/image'

export const ProductCategorycards = () => {
  return (
    <div className='p-2 w-[48%] lg:w-[23%] h-fit border-2 hover:bg-zinc-100 '>
        <div className='ProuctCategoryImage lg:h-62.5 border flex items-center justify-center '>
            <Image src="/logo.png" alt="Logo" width={180} height={250} />
        </div>
        <div className='Productdetails mt-2'>
            <p className='title text-xl font-semibold text-black'> RF & Wave Amplifiers</p>
        <div className='extraDetail w-[90%]'>
            <p className='text-zinc-700 text-xs leading-6 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
        </div>

        <button className='bg-[#232323] w-full p-2 mt-4 hover:bg-zinc-600'>VIEW</button>
       
    </div>
  )
}
