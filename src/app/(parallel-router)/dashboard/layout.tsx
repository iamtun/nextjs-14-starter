import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}

//Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout. 
//They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites.
const Layout: React.FC<LayoutProps> = ({ children, team, analytics }) => {
  return (
    <div>
      {team}
      {analytics}
      {children}
    </div>
  );
};

export default Layout;
