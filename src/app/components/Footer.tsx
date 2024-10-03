

import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Store Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">HG Fashion Demo Store</h3>
          <p>HG Demo Store PK</p>
          <p>Call Us: 123-456-7898</p>
          <p>Email Us: <a href="mailto:support@fiot.com" className="text-blue-400">Example@gmail.com</a></p>
          <p>Fax: 123456</p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Shop By Size</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Look Book</a></li>
            <li><a href="#" className="hover:text-blue-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-400">Faqs</a></li>
            <li><a href="#" className="hover:text-blue-400">Wishlist</a></li>
            <li><a href="#" className="hover:text-blue-400">Search</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
          <ul className="space-y-2">
            <li>Monday: 2 noon to 22 pm</li>
            <li>Sunday: 2 noon to 22 pm </li>
            <li>Mon - Thu: 10 am to 22 pm</li>
            <li>Fri - Sat: 9 am to 20 pm</li>
            <li>Every Sunday: 1pm - 2pm</li>
          </ul>
        </div>
      </div>

      
      
    </footer>
<footer>
<div className="mt-4 text-center pb-3">
        <p>&copy; {new Date().getFullYear()} Hadiqa Gohar. All Rights Reserved.</p>
      </div>
</footer>
    </div>
  )
}
