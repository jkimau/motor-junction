import React from 'react'
import styled from 'styled-components';

import { media } from '../media';
import { LIGHT_GRAY, MID_GRAY } from '../colors';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const StyledBigBox = styled.div `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${LIGHT_GRAY};
`;

const BigBox = ({ title, buttonText }) => {
  return (
    <StyledBigBox>
      <h2>{title}</h2>
      <div>Image place holder</div>
      <button>{buttonText}</button>
    </StyledBigBox>
  );
};

const Wrapping = () => <BigBox title="Wrapping" buttonText="More about wrapping" />
const DashCam = () => <BigBox title="DashCam" buttonText="More about DashCam" />

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Home page</h1>
    <HeroSection>
      <Wrapping />
      <DashCam />
    </HeroSection>
  </div>
)
