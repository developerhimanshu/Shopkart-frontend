import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProduct {
  _id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
  brand:string;
}

const Shoes = () => {

  const [shoes, setShoes] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then((response)=>{
      setShoes(response.data)
    })
  }, [])
  console.log(shoes);
  
  return (
    <div className="mx-4 my-2 flex gap-4 h-[450px]">
      {shoes.map((shoe:IProduct)=>{
        return(
          <Link to={`/product/shoes/${shoe?._id}`}>
            <div className="bg-gray-200 px-2 py-4 rounded-lg">
              <img src={shoe?.image[0]} alt={shoe.name} className="w-[300px] h-[320px] "/>
              <p className="font-semibold text-lg">{shoe?.name}</p>
              <p className="font-thin text-xs">{shoe.type=="male"?"men's shoe":"women's shoe"}</p>
              <p className="font-semibold">₹ {shoe?.price}</p>
              <button>Add to cart</button>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Shoes