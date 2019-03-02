import React from 'react';
import { Root, Routes } from 'react-static';

import GlobalStyles from './GlobalStyles';
import HomeContent from './pages/index';

function App() {
  return (
    <Root>
      <GlobalStyles />
      <div>Header</div>
      <div className="content">
        <HomeContent />
      </div>
      <div>Footer</div>
    </Root>
  )
}

export default App
