import React from 'react'
import Button from '../components/Button'



function AboutUs() {
  return (
    <section className="overflow-hidden pt-10 pb-6   lg:pt-[30px] lg:pb-[25px] bg-blue-50">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-1/2">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4 ">
              <div className="py-2 mx-4 sm:py-3 ">
                <img
                  src="https://www.ectechnology.nl/wp-content/uploads/2017/06/4208-1024x684.jpg"
                  alt="img1"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="py-2 mx-4 sm:py-3">
                <img
                  src="https://th.bing.com/th/id/OIP.2O6sLegjbPQGtp8KNz_yywAAAA?rs=1&pid=ImgDetMain"
                  alt="img2"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:px-1">
              <div className="relative z-10 my-4">
                <img
                  src="https://th.bing.com/th/id/OIP.hV_vAHum6prai_r98-uivwAAAA?w=474&h=248&rs=1&pid=ImgDetMain"
                  alt="img3"
                  className="w-full rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 lg:w-1/2">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-4 ml-20 text-2xl font-semibold text-blue-800 ">
              Why Choose Us
            </span>
            <h2 className="mb-5 mr-12 text-3xl font-bold text-dark  sm:text-[30px]  leading-tight">
              We Make Our customers happy by giving services.
            </h2>
            <p className="mb-5 mr-8 text-base text-body-color dark:text-dark-6 ">
            We aims at providing a hassle free and enjoyable shopping experience to shoppers
             across the country with the widest range of brands and products on its portal.
              The brand is making a conscious effort to bring the power of fashion to shoppers with
               an array of the latest and trendiest products available in the country.
            </p>
            <p className="mb-4 mr-7 text-base text-body-color ">
            Fashion-Gate offers apparel, 
            footwear, accessories, lingerie, bags and more from 
            over 1,500 Indian and global brands. Categories include western wear, Indian ethnic fashion, athleisure, streetwear and bridal wear.
            </p>
            <Button href="#">Know More</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs
