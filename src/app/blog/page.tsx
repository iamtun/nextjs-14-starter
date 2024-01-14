import { PostCard } from '@/components';
import React from 'react';

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="md:w-[45%] lg:w-[30%] w-[100%]">
        <PostCard />
      </div>
      <div className="md:w-[45%] lg:w-[30%] w-[100%]">
        <PostCard />
      </div>
      <div className="md:w-[45%] lg:w-[30%] w-[100%]">
        <PostCard />
      </div>
      <div className="md:w-[45%] lg:w-[30%] w-[100%]">
        <PostCard />
      </div>
      <div className="md:w-[45%] lg:w-[30%] w-[100%]">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
