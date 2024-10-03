
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
              <header className="text-center ">
        <img
         src='https://t3.ftcdn.net/jpg/04/15/87/80/240_F_415878087_9oiQhKAgnPjD1cmmDP0NWzXrTLrdYMMY.jpg'
          // src="https://i.etsystatic.com/37203719/r/il/4cae3e/4140509916/il_570xN.4140509916_o0j1.jpg"
          className="h-[200px] max-w-full mx-auto"
          alt="bakery-logo"
        />
      </header>
      <hr />
      <header className="text-grey-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex titlefont font-medium items-center text-grey-900 mb-4 md:mb-0">
            <div className="flex space-x-4">
              <div className="avatar">
                <div className="w-10 rounded-full relative">
                  <img
                    src="https://banner2.cleanpng.com/20181129/cw/kisspng-bakery-clip-art-cupcake-illustration-silhouette-silhouette-cupcakery-pinterest-diseo-de-lo-1713914819550.webp"
                    alt="hg-logo-picture"
                    className="rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white"></span>
                </div>
              </div>
            </div>
            <span className="ml-3 text-xl font-mono font-bold">Hadiqa Gohar | </span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-red-600 font-semibold" href="/">Home</Link>
            {/* <Link className="mr-5 hover:text-red-600 font-semibold" href="/cart">Cart</Link> */}
            <Link className="mr-5 hover:text-red-600 font-semibold" href="/products">Products</Link>
            {/* <Link className="mr-5 hover:text-red-600 font-semibold" href="/features">Feature</Link> */}
            <Link className="mr-5 hover:text-red-600 font-semibold" href="/pages">Pages</Link>
            <Link className="mr-5 hover:text-red-600 font-semibold" href="/blogs">Blogs</Link>
            
          </nav>
        </div>
      </header>
    </div>
  )
}
