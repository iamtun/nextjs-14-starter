import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <section className="flex gap-[100px]">
      {/* Text container */}
      <div className="flex flex-1 flex-col gap-[50px]">
        <h1 className="text-[96px] font-bold">Creative throughts Agency.</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          sit dolores doloribus. Deleniti ipsum cumque, laborum similique magni
          itaque amet numquam maiores vitae officia a sunt, mollitia dolorem
          rerum aliquid!
        </p>
        {/* Button group */}
        <div className="">
          <button className="p-5 min-w-5 cursor-pointer border-none rounded-lg bg-white text-bg-soft-color font-medium mr-2 bg-bg-btn text-white">
            Learn more
          </button>
          <button className="p-5 min-w-5 cursor-pointer border-none rounded-lg bg-white text-bg-soft-color font-medium">
            Contact
          </button>
        </div>

        {/* Brands */}
        <div className="w-[500px] h-[50px] relative grayscale-[1]">
          <Image
            src={'/brands.png'}
            fill
            alt="brands"
          />
        </div>
      </div>

      {/* Image container */}
      <div className=" flex-1 relative">
        <Image
          src={'/hero.gif'}
          fill
          alt="hero"
        />
      </div>
    </section>
  );
};

export default HomePage;
