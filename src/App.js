import React from 'react';
import { Root, Routes } from 'react-static';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import { media } from './media';
import HomeContent from './pages/index';

const LogoWrapper = styled.div`
  padding: 20px 0;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 300px;

  ${media.tablet`
    max-width: 400px;
  `}
`

function App() {
  return (
    <Root>
      <GlobalStyles />
      <LogoWrapper><Logo src="./images/logo.png" /></LogoWrapper>
      <div className="content">
        <HomeContent />
      </div>
      <div>Footer</div>
    </Root>
  )
}

export default App
