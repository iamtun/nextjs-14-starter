import Image from 'next/image';
import React from 'react';

const BlogDetailPage = () => {
  return (
    <div className="flex gap-[100px]">
      {/* Image container*/}
      <div className="hidden md:w-1/4 md:relative md:h-[calc(100dvh_-_200px)] md:block">
        <Image
          src={
            'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          }
          fill
          alt="post"
          className="object-cover"
        />
      </div>
      {/* Text container */}
      <div className="w-3/4 flex flex-col gap-[50px]">
        <h1 className="font-bold text-[64px]">Title</h1>
        {/* Detail */}
        <div className="flex gap-5">
          <Image
            src={
              'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            }
            alt="avatar"
            width={50}
            height={50}
            className="rounded-[50%] h-[50px]"
          />
          {/* Author container */}
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">Tuna</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>
        <div className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores
          iusto, odit ullam id libero numquam tempora exercitationem voluptate
          mollitia, in commodi quis vero itaque sed possimus temporibus
          provident sit?
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
