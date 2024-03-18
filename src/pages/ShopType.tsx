import { useParams } from 'react-router'
import Filters from '../components/Filters/Filters'
import Shoes from '../components/Shoes/Shoes'

const ShopType = () => {
    let {type} = useParams();
  return (
    <div>
    <p className='text-[4rem] font-bold capitalize text-center'>{type}'s Shoes</p>
    <div className='border-solid border-b-[2px]'></div>
    <div className='flex '>
    <Filters />
    <Shoes/>
    </div>
  </div>
  )
}

export default ShopType