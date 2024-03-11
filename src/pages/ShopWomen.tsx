import React from 'react'
import Filters from '../components/Filters/Filters'
import Shoes from '../components/Shoes/Shoes'

const ShopWomen = () => {
  return (
    <div className='flex'>
      <Filters/>
      <Shoes/>
    </div>
  )
}

export default ShopWomen