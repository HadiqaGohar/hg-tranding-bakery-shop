



import React from 'react'

export default function Master() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-full text">
      <div>

        <img
          src="https://ps-backey.myshopify.com/cdn/shop/files/our_stuff3_017201721_270x270.jpg?v=1613179540"
          className="h-[200px] w-[200px] object-cover"
          alt="Description of the image"
        />
        <h1 className='italic font-extrabold text-xl mt-2'>Thomas Keller </h1>
      </div>
      <div>
       
        <img
          src="https://ps-backey.myshopify.com/cdn/shop/files/our_stuff5_017201721_270x270.jpg?v=1613179540"
          className="h-[200px] w-[200px] object-cover"
          alt="Description of the image"
        />
         <h1 className='italic font-extrabold text-xl mt-2'>Julia Child </h1>
      </div>
      <div>
        
        <img
          src="https://ps-backey.myshopify.com/cdn/shop/files/our_stuff4_017201721_270x270.jpg?v=1613179540"
          className="h-[200px] w-[200px] object-cover"
          alt="Description of the image"
        />
        <h1 className='italic font-extrabold text-xl mt-2'>Gordon Ramsay </h1>
      </div>
      <div>
        
        <img
          src="https://ps-backey.myshopify.com/cdn/shop/files/our_stuff6_017201721_270x270.jpg?v=1613179540"
          className="h-[200px] w-[200px] object-cover"
          alt="Description of the image"
        />
        <h1 className='italic font-extrabold text-xl mt-2'>Alice Waters </h1>
      </div>
    </div>

  )
}
