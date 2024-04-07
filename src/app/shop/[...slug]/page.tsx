import React from 'react';

interface PageProps {
  params: { slug: string[] };
}

// catch all router map with /slug1/slug2 not matching the parent router
// catch all optional map with all routers of parent router.

const Page: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  return <div>{slug.join(' - ')}</div>;
};

export default Page;
