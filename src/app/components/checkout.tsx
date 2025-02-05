'use client'


import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../../types/product';
import Link from 'next/link';


const CheckoutPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]); 
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(cart) as IProduct[]
    setProducts(items);

    const total = items.reduce((acc: number, product: IProduct ) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalAmount(total);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 ">

  <h2 className="text-3xl font-bold text-center mb-6 underline">Checkout</h2>

  <div className="flex flex-col space-y-6">
    {products.map((item) => (
      // <div key={item.productName} className="flex flex-col sm:flex-row items-center justify-between p-4 border-b">
      //   <div className="flex items-center gap-4 sm:w-2/3">
      //     <Image 
      //       src={item.imageUrl} 
      //       alt={item.productName}
      //       width={100}
      //       height={100}
      //       className="rounded-lg object-cover" 
      //     />
      //     <p className="text-xl font-semibold sm:text-left text-center">{item.productName}</p>
      //   </div>

      //   <div className="flex flex-col sm:w-1/3 space-y-4 p-4 ">
      //     <div className="flex justify-between items-center">
      //       <p className="font-semibold text-sm text-gray-500">Quantity</p>
      //       <p className="font-medium text-lg text-gray-800">{item.quantity}</p>
      //     </div>
      //     <div className="flex justify-between items-center">
      //       <p className="font-semibold text-sm text-gray-500">Price</p>
      //       <p className="font-medium text-lg text-gray-800">${item.price.toFixed(2)}</p>
      //     </div>
      //     <div className="flex justify-between items-center border-t pt-2">
      //       <p className="font-semibold text-sm text-gray-500">Total Price</p>
      //       <p className="font-medium text-lg text-green-600">${(item.quantity * item.price).toFixed(2)}</p>
      //     </div>
      //   </div>
      // </div>
      //==================================

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 " key={item._id}>
                   
  {/* Hidden Image */}
  <div>
    <Image src={item.imageUrl} alt={item.productName} 
    width={400}
    height={400} className="w-[150px] h-[150px] object-cover rounded-md " />
  </div>
  {/* details */}
<div className="space-y-2">
<div className='flex justify-between'>
<p className="font-bold text-[15px] leading-[28px]">{item.productName}</p>

<p className="font-medium text-[15px] leading-[28px] ">MRP: ₹ ${(item.quantity * item.price).toFixed(2)}</p>
</div>
{/* Description */}
<p className="font-normal text-blue-600 leading-[28px] ">
{item.category}
</p>
<div className=" flex flex-col sm:flex-row sm:space-x-4 mt-2">
<p className="font-medium text-[15px] leading-[28px] ">Colour:</p>
<p className="font-medium text-[15px] leading-[28px] ">
{item.colors}
</p>
</div>

{/* Size and Quantity */}
<div className=" flex flex-col sm:flex-row sm:space-x-4 mt-2">

<div className="flex items-center space-x-2 ">
<p className="font-medium text-[15px] leading-[28px] ">Quantity:</p>
<p className="font-bold text-[15px] leading-[28px]">{item.quantity}</p>
</div>
</div>


</div>

</div>
    ))}
  </div>

 

  <div className="flex justify-between mt-8 font-bold text-2xl bg-gray-200 p-4 rounded-md">
    <span>Total Amount</span>
    <span>${totalAmount.toFixed(2)}</span>
  </div>
  
  <div className="mt-6">
    {/* Add Checkout Form/Payment Gateway */}
    <Link href="/order"><button 
      className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
    >
      Complete Purchase
    </button></Link>
  </div>

  
</div>


  );
};

export default CheckoutPage;