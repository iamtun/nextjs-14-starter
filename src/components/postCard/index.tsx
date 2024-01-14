import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = () => {
  return (
    <section className="flex flex-col gap-[20px] mb-5">
      <div className="flex">
        <div className="w-[90%] h-[400px] relative">
          <Image
            src={
              'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            }
            fill
            alt="post"
            className="object-cover"
          />
        </div>
        <time className="text-xs rotate-[270deg] m-auto">01.01.2024</time>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold">title</h1>
        <p className="text-xl font-medium text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          excepturi velit provident, ea exercitationem sunt rerum maxime facilis
          eius vel eum suscipit magni ut magnam illo ex est. Soluta, provident?
        </p>
        <Link href={'/blog/post'} className='underline'>READ MORE</Link>
      </div>
    </section>
  );
};

export default PostCard;
