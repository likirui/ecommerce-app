import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Explore Now
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4"> Discover Latest Trends<br />
          <span className="font-light flex justify-end">New Collection</span></h1>
          <Link to={'/'} className='uppercase font-semibold border-primary mr-4 flex justify-end'>Shop Now</Link>


        </div>
      </div>
    </section>
  );
};

export default Hero;
