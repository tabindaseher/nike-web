
import React from 'react'
import Image from 'next/image';
import pic6 from "@/app/assets/Image (6).png";
import wishlistIcon from "@/app/assets/Vector (1).png"
import delet from "@/app/assets/Frame (8).png";
import topLogo from "@/app/assets/Vector.png"
import Link from 'next/link';
import sign  from "@/app/assets/Frame (9).png"
import logo from "@/app/assets/Frame.png";
import searchIcon from "@/app/assets/Vector (3).png"
import cartIcon from "@/app/assets/Vector (2).png";


 const Cart = () => {
return (
    <>
 {/* Top header */}  
    <div className="flex justify-between py-[10px] pr-[6.13px] pl-3 gap-[15.38px] bg-[#F5F5F5]">
        <Image src={topLogo} alt="toplogo" className="w-[19.2px] h-[17.97px]"/>

        <div className="block md:hidden">
        <button className="text-gray-700 focus:outline-none">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        </button>
  </div>
        <ul className="  gap-[15.38px] hidden sm:flex ">
           <li className="leading-[14px] font-medium text-[11px] pr-2 ">
            <Link href="#">Find a Store</Link>
            <span className="w-[6px] h-[18px] pl-3">|</span>
           </li>
           <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Help</Link>
          <span className="w-[4px] h-[18px] pl-3">|</span>
          </li>
          <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Hi, Rajarshi</Link>
          
          </li>
          <li className="leading-[14px] font-medium text-[11px] pr-2">
          < Image src={sign} alt='signin image'  className='w-[24px] h-[24px]'/>
          </li>
        </ul>

      </div>

       {/*NavBar*/}   
      <div className="flex py-4 justify-between items-center px-4 ">
        <Image src={logo} alt="logo"  className="w-auto h-[40px]"/>

        <div className="block md:hidden">
    <button className="text-gray-700 focus:outline-none">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
        <ul className=" gap-6 text-base font-medium hidden sm:flex">
        <Link href="/allProduct" className="font-medium text-base leading-[24px]" > All Product</Link>
         <Link href="/product" className="font-medium text-base leading-[24px]">Product</Link>
         <Link href="/login" className="font-medium text-base leading-[24px]">Login</Link>
         <Link href="/join" className="font-medium text-base leading-[24px]">Join </Link>
         <Link href="/cart" className="font-medium text-base leading-[24px]">Home</Link>
         <Link href="/checkout" className="font-medium text-base leading-[24px]">CheckOut</Link>
        </ul>
        {/* search */}
        <div className="bg-[#F5F5F5] rounded-[100px] w-[180px] h-10 flex justify-between items-center px-4 py-3 ">
          <Image src={searchIcon} alt="search"  className="w-[16.72px] h-[16.72px] "/>
          <input type="input" placeholder="Search" className="bg-[#F5F5F5] focus-visible:outline-none w-[120px] h-[18px] "/>
        </div>
        <div className="flex gap-3 py-[12px]">
        <Image src={wishlistIcon} alt="wishlist" className="w-[19.5px] h-[16.76px]"/>
        <Image src={cartIcon} alt="cart"  className="w-[16.5px] h-[16.5px]"/>
        </div>
      </div>
 
           {/* hero section */}
        <div className=' flex flex-col sm:flex-row sm:justify-between'>

        {/* left side */}
             <div className='w-full sm:w-[627.38px] p-4'>
        {/* Box */}
            <div className='w-full sm:w-[700.38px]  bg-[#E5E5E5] pl-4 pt-2'>
              <p className='font-medium text-[13px] leading-[14px] tracking-[0.5px]'>Free Delivery</p>
              <p className='font-medium text-[11px] leading-[24px]'>Applies to orders of ₹ 14 000.00 or more.
                <span className='font-medium text-[11px] leading-[24px] underline pl-6'>View details</span>
              </p>
              </div>
      {/* Heading of Bag */}
           <div>
              <h2 className='font-medium text-[22px] leading-[33px] mt-2'>Bag</h2>
      {/* box of Pic, description , details */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 ">
      {/* Image */}
      <div className="flex justify-center">
        <Image src={pic6} alt="Nike Product" className="w-[150px] h-[150px] object-cover rounded-md" />
      </div>
      {/* Deatils */}
      <div className="space-y-2">
      <div className='flex justify-between items-center'>
      <p className="font-medium text-[15px] leading-[28px]">Nike Dri-FIT ADV TechKnit Ultra</p>
      <p className="font-normal text-[15px] leading-[28px]">MRP: ₹ 3 895.00</p>
      </div>
      {/* Description */}
       <p className="font-normal text-[15px] leading-[28px] text-[#757575]">
      Men&apos;s Short-Sleeve Running Top
       </p>
      <p className="font-normal text-[15px] leading-[28px] text-[#757575]">
      Ashen Slate/Cobalt Bliss
      </p>

    {/* Size and Quantity */}
    <div className=" flex flex-col sm:flex-row sm:space-x-4 mt-2">
      <div className="flex items-center space-x-2">
        <p className="font-normal text-[15px] leading-[28px] text-[#757575]">Size:</p>
        <p className="font-normal text-[15px] leading-[28px]">L</p>
      </div>
      <div className="flex items-center space-x-2 sm:pl-10">
        <p className="font-normal text-[15px] leading-[28px] text-[#757575]">Quantity:</p>
        <p className="font-normal text-[15px] leading-[28px]">1</p>
      </div>
    </div>

    {/* Icons */}
    <div className="flex space-x-4 mt-2">
      <Image src={wishlistIcon} alt="Add to Wishlist" className="w-[19.5px] h-[16.76px] cursor-pointer" />
      <Image src={delet} alt="Remove Item" className="w-[19.5px] h-[16.76px] cursor-pointer" />
    </div>
  </div>

</div>


{/* 2nd box of description , details  */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 ">
                   
  {/* Hidden Image */}
  <div>
    <Image src={pic6} alt="Nike Product"  className="w-[150px] h-[150px] object-cover rounded-md hidden" />
  </div>
  {/* details */}
<div className="space-y-2">
<div className='flex justify-between'>
<p className="font-medium text-[15px] leading-[28px]">Nike Air Max 97 SE</p>

<p className="font-normal text-[15px] leading-[28px] ">MRP: ₹ 16 995.00</p>
</div>
{/* Description */}
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">
Men&apos;s Shoes
</p>
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">
Flat Pewter/Light Bone/Black/White
</p>

{/* Size and Quantity */}
<div className=" flex flex-col sm:flex-row sm:space-x-4 mt-2">
<div className="flex items-center space-x-2">
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">Size:</p>
<p className="font-normal text-[15px] leading-[28px]">8</p>
</div>
<div className="flex items-center space-x-2 pl-10">
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">Quantity:</p>
<p className="font-normal text-[15px] leading-[28px]">1</p>
</div>
</div>

{/* Icons */}
<div className="flex space-x-4 mt-2">
<Image src={wishlistIcon} alt="Add to Wishlist" className="w-[19.5px] h-[16.76px] cursor-pointer" />
<Image src={delet} alt="Remove Item" className="w-[19.5px] h-[16.76px] cursor-pointer" />
</div>
</div>

</div>
 </div>
   
    </div>


{/* right side */}
 <div className=" w-full sm:w-[350.67px] mx-auto p-6 sm:p-8 h-auto ">
  {/* Summary Heading*/}
    <div className="space-y-4 mb-auto ">
    <h2 className="text-[21px] font-medium leading-[33px]">Summary</h2>

    {/* Subtotal */}
    <div className="flex justify-between items-center">
      <p className="font-normal text-base">Subtotal</p>
      <p className="font-normal text-base">₹ 20 890.00</p>
    </div>

    {/* Delivery & Handling */}
    <div className="flex justify-between items-center">
      <p className="font-normal text-base">Estimated Delivery & Handling</p>
      <p className="font-normal text-base">Free</p>
    </div>

    {/* Total amount */}
    <div className="flex justify-between items-center border-t pt-4">
      <p className="font-normal text-[14px]">Total</p>
      <p className="font-normal text-[14px]">₹ 20 890.00</p>
      </div>
    
  </div>
  <div className="flex justify-between items-center border-t mt-4">

  {/* Checkout Button */}
  <button className="w-full sm:w-[334px] h-[60px] bg-black text-white font-medium hover:bg-gray-800 rounded-[30px] mt-6">
    <Link href="/checkout">
    Checkout Members</Link></button>
  </div>
</div>
</div>
</>
 )
}
export default Cart

