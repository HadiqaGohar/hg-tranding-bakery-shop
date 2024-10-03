import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true, 
  };

  return (
    <div>
      <div className="flex justify-center items-center h-full w-full">
        <img
          src="https://i.etsystatic.com/37203719/r/il/4cae3e/4140509916/il_570xN.4140509916_o0j1.jpg"
          className="h-[300px] w-[300px] object-cover"
          alt="Description of the image"
        />
      </div>
      <hr />
      <div className="mt-8">
        <Slider {...settings}>
          <div>
            <img
              src="https://ps-backey.myshopify.com/cdn/shop/articles/image_4_1512x.jpg?v=1581498399"
              alt="Chocolate Coconut Cake"
              className="object-cover w-full h-[500px] mb-4 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://ps-backey.myshopify.com/cdn/shop/articles/image_2_570x.jpg?v=1581498264"
              alt="Chocolate Coconut Cake"
              className="object-cover w-full h-[500px] mb-4 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://ps-backey.myshopify.com/cdn/shop/articles/157229277_023a01400_570x.jpg?v=1580198796"
              alt="Chocolate Coconut Cake"
              className="object-cover w-full h-[500px] mb-4 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://ps-backey.myshopify.com/cdn/shop/files/image_2_96646c62-3f9e-4037-aac5-c0f4b9bb663a_570x.png?v=1613184370"
              alt="Chocolate Coconut Cake"
              className="object-cover w-full h-[500px] mb-4 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://ps-backey.myshopify.com/cdn/shop/files/image_4_e9635a7f-d000-427c-be18-8f947a6be224_570x.png?v=1613184370"
              alt="Chocolate Coconut Cake"
              className="object-cover w-full h-[500px] mb-4 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://ps-backey.myshopify.com/cdn/shop/files/image_5_eb0d1726-ee0b-4e77-bcda-117b23c6fb82_570x.png?v=1613184370"
              alt="Chocolate Coconut Cake"
              className="object-cover w-full h-[500px] mb-4 rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
