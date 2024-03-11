import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  qty:number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    { id: 1, name: "Product 1", price: 10, qty:1 },
    { id: 2, name: "Product 2", price: 15, qty:1 }
  ]);
  
  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleCartItemIncrease = (item:Product)=>{
    setCartItems(
      prevCartItems=> prevCartItems.map(itm=>itm.id === item.id?{...item, qty:item.qty+1}:itm)
    )
  }

  const handleCartItemDecrease = (item:Product)=>{
    setCartItems(
      prevCartItems=> prevCartItems.map(itm=>itm.id === item.id?{...item, qty:item.qty-1}:itm)
    )
  }
  return (
    <div className="md:mx-wmx-auto bg-white shadow-md overflow-hidden rounded-md">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.name}</span>
              <div className='flex gap-2'>
              <button
                onClick={()=>{
                  handleCartItemDecrease(item)
                 }}
              >-</button>
              <span>{item.qty}</span>
              <button
                onClick={()=>{
                 handleCartItemIncrease(item)
                }}
              >+</button>
              </div>
              <span>${item.price}</span>

            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold mt-4">Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
