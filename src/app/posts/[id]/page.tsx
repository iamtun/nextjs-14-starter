import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  return <div>Post Id {id}</div>;
};

export default Page;
