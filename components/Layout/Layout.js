import React from 'react';
import Header from '../Header/Header';
import SeoTags from '../SeoTags/SeoTags';

const Layout = ({children, meta}) => {
  return <div className="Layout">
    <SeoTags meta={meta}/>
    <Header />
    <main>
      {children}
    </main>
  </div>
}

export default Layout;