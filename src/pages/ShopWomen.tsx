import React from 'react'
import Filters from '../components/Filters/Filters'
import Shoes from '../components/Shoes/Shoes'

const ShopWomen = () => {
  return (
    <div>
      <p className='text-[4rem] font-bold text-center'>Women's Shoes</p>
      <div className='border-solid border-b-[2px]'></div>
      <div className='flex '>
      <Filters />
      <Shoes/>
      </div>
    </div>
  )
}

export default ShopWomen