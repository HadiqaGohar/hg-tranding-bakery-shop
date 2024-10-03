import Link from "next/link"
import Master from "../components/Master"


export default function Pages (){
    return (
        <main>
     
      <section className="text-center py-8 px-4">
  <div className="container mx-auto">
    <div className="mb-6">
      <img 
        className="w-full h-auto rounded-lg" 
        src="https://ps-backey.myshopify.com/cdn/shop/files/about_us_banner_2_1512x.png?v=1613183805" 
        alt="About Us Banner"
      />
    </div>
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
      </h1>
      <p className="text-base leading-relaxed">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
      </p>
    </div>
  </div>
</section>
<section>
<hr />
        <Master/> 
</section>

         
       
        </main>
    )
}