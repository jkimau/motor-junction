import React from 'react';
import { Link } from '@reach/router'
import styled from 'styled-components';

import { media } from '../media';
import { LIGHT_GRAY, PINK, DARK_PINK, WHITE } from '../colors';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const StyledBigBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${LIGHT_GRAY};
`;

const HeroButton = styled.div`
  padding: 10px;
  border-radius: 2px;
  color: ${WHITE};
  background-color: ${PINK};
  cursor: pointer;

  &:hover {
    background-color: ${DARK_PINK};
  }
`;

const BigBox = ({ title, buttonText, to }) => {
  return (
    <StyledBigBox>
      <h2>{title}</h2>
      <div>Image place holder</div>
      <Link to={to}><HeroButton>{buttonText}</HeroButton></Link>
    </StyledBigBox>
  );
};

const Wrapping = () => <BigBox title="Wrapping" buttonText="More about wrapping" to="/wrapping" />
const DashCam = () => <BigBox title="DashCam" buttonText="More about DashCam" to="/dashcam" />

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Home page</h1>
    <HeroSection>
      <Wrapping />
      <DashCam />
    </HeroSection>
  </div>
)
