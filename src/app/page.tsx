'use client'


import Master from './components/Master';
import SaleList from './sale/page';
import OfferList from './offer/page';



export default function Home() {




  return (
    <main>


      <section className='text-center p-6 '>
        <h4 className='text-2xl font-bold text-red-400'>New Collection</h4>
        <h1 className='text-5xl font-bold p-4 text-gray-800'>𝒯𝓇𝒶𝓃𝒹𝒾𝓃𝑔 𝒮𝒶𝓁𝑒</h1>
        <p className='font-bold'>I’ll walk you through how to write a book "description", provide you a template and include</p>
        <div className="flex justify-center items-center h-full w-full">
          <img
            src="https://i.etsystatic.com/37203719/r/il/4cae3e/4140509916/il_570xN.4140509916_o0j1.jpg"
            className="h-[200px] w-[200px] object-cover"
            alt="Description of the image"
          />
        </div>
        <hr />
      </section>

      <section className="py-10 bg-gray-50">
      <h2 className="text-4xl font-bold m-6 text-center text-red-400 ">Our Cakes for Sale</h2>

      
          <SaleList/>

       
        
      </section>

      <section className="py-10 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center ">𝒲𝒶𝓉𝒸𝒽 𝒪𝓊𝓇 𝒱𝒾𝒹𝑒𝑜</h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WwmCc3NwDKY"
              title="YouTube video player"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className='text-center p-6 '>
        <h4 className='text-2xl font-bold text-red-400'>Top Collection</h4>
        <h1 className='text-5xl font-semibold p-4 text-gray-800'>𝒮𝓅𝑒𝒸𝒾𝒶𝓁 𝒪𝒻𝒻𝑒𝓇</h1>
        <p className='font-bold'>I’ll walk you through how to write a book "description", provide you a template and include</p>
        <div className="flex justify-center items-center h-full w-full">
          <img
            src="https://i.etsystatic.com/37203719/r/il/4cae3e/4140509916/il_570xN.4140509916_o0j1.jpg"
            className="h-[200px] w-[200px] object-cover"
            alt="Description of the image"
          />
        </div>
        <hr />
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold m-6 text-center text-red-400 ">Our Cakes for Sale</h2>
      

          <OfferList/>

        </div>
      </section>


      {/* <section className='text-center p-6 '>
        <h4 className='text-2xl font-bold text-red-400'>Best Event</h4>
        <h1 className='text-5xl font-semibold p-4 text-gray-800'>𝐿𝒶𝓉𝑒𝓈𝓉 𝐵𝓁𝑜𝑔 </h1>
        <p className='font-bold'>I’ll walk you through how to write a book "description", provide you a template and include</p>

        <Blog />

      </section> */}

      <section className='text-center p-6 '>

        <h1 className='text-5xl font-semibold p-4 text-gray-800'>𝒪𝓊𝓇 𝑀𝒶𝓈𝓉𝑒𝓇 </h1>
        <p className='font-bold'>I’ll walk you through how to write a book "description", provide you a template and include</p>

        <div className="flex justify-center items-center h-full w-full">
          <img
            src="https://i.etsystatic.com/37203719/r/il/4cae3e/4140509916/il_570xN.4140509916_o0j1.jpg"
            className="h-[200px] w-[200px] object-cover"
            alt="Description of the image"
          />
        </div>
        <hr />

        <Master />


      </section>


    </main>
  );
}
