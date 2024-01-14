import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex flex-1 flex-col gap-[50px]">
        <h2 className="font-semibold text-bg-btn">About Agency</h2>
        <h1 className="font-bold text-[54px]">
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className="text-xl font-light">
          {
            "We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services"
          }
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold text-bg-btn text-2xl">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold text-bg-btn text-2xl">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold text-bg-btn text-2xl">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src={'/about.png'}
          fill
          alt="about"
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default AboutPage;
