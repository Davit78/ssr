import React from 'react';
import Header from '../Header/Header';
import SeoTags from '../SeoTags/SeoTags';

const Layout = ({children, meta, error, tabName, gameId}) => {
  return <div className="Layout">
    {!error && <SeoTags meta={meta}/>}
    <Header
      tabName={tabName}
      gameId={gameId}
    />
    <main>
      {children}
    </main>
  </div>
}

export default Layout;