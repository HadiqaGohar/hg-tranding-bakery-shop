import Link from "next/link"

export default function Blogs (){
    return (
        <main>
           
            <section className='text-center p-6 '>
        <h4 className='text-2xl font-bold text-red-400'>Best Event</h4>
        <h1 className='text-5xl font-semibold p-4 text-gray-800'>𝐿𝒶𝓉𝑒𝓈𝓉 𝐵𝓁𝑜𝑔 </h1>
        <p className='font-bold'>I’ll walk you through how to write a book "description", provide you a template and include</p>
        
           
               <div className="flex justify-center items-center h-full w-full">
          <img
            src="https://i.etsystatic.com/37203719/r/il/4cae3e/4140509916/il_570xN.4140509916_o0j1.jpg"
            className="h-[200px] w-[200px] object-cover"
            alt="Description of the image"
          />
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "> 
        <img
            src="https://ps-backey.myshopify.com/cdn/shop/articles/image_4_1512x.jpg?v=1581498399"
            alt="Chocolate Coconut Cake"
            className="object-cover mb-4 rounded-lg"
          />
             <img
            src="https://ps-backey.myshopify.com/cdn/shop/articles/image_2_570x.jpg?v=1581498264"
            alt="Chocolate Coconut Cake"
            className="object-cover mb-4 rounded-lg"
          />
             <img
            src="https://ps-backey.myshopify.com/cdn/shop/articles/157229277_023a01400_570x.jpg?v=1580198796"
            alt="Chocolate Coconut Cake"
            className="object-cover mb-4 rounded-lg"
          />
              <img
            src="https://ps-backey.myshopify.com/cdn/shop/files/image_2_96646c62-3f9e-4037-aac5-c0f4b9bb663a_570x.png?v=1613184370"
            alt="Chocolate Coconut Cake"
            className=" object-cover mb-4 rounded-lg"
          />
         
          <img
            src="https://ps-backey.myshopify.com/cdn/shop/files/image_4_e9635a7f-d000-427c-be18-8f947a6be224_570x.png?v=1613184370"
            alt="Chocolate Coconut Cake"
            className="object-cover mb-4 rounded-lg"
          />
         
          <img
            src="https://ps-backey.myshopify.com/cdn/shop/files/image_5_eb0d1726-ee0b-4e77-bcda-117b23c6fb82_570x.png?v=1613184370"
            alt="Chocolate Coconut Cake"
            className="object-cover mb-4 rounded-lg"
          />
            
          </div>
         
      </section>
      
        </main>
    )
}