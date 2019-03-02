import React from 'react';
import styled from 'styled-components';

import { media } from '../media';
import { LIGHT_GRAY, PINK, DARK_PINK, WHITE } from '../colors';
import { DASHCAM_THUMBNAIL_BASE_URL } from './DashCamSection';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const StyledBigBox = styled.div`
  max-width: 360px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${LIGHT_GRAY};
`;

const HeroButton = styled.a`
  padding: 10px;
  border-radius: 2px;
  color: ${WHITE};
  background-color: ${PINK};
  cursor: pointer;

  &:hover {
    background-color: ${DARK_PINK};
  }
`;

const BigBoxTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
`;

const BigBoxDescription = styled.div`
  margin: 0;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
`;

const BigBox = ({ title, description, imgUrl, buttonText }) => {
    const href = title === "Wrapping" ? "#wrapping" : "#dashcam";

    return (
        <StyledBigBox>
            <div>
                <BigBoxTitle>{title}</BigBoxTitle>
                {description && <BigBoxDescription>{description}</BigBoxDescription>}
            </div>
            <Img src={imgUrl} />
            <HeroButton href={href}>{buttonText}</HeroButton>
        </StyledBigBox>
    );
};

const Wrapping = () => <BigBox title="Wrapping" imgUrl="./images/alfaromeo.jpg" description="Car wrapping" buttonText="Go Wrapping" />
const DashCam = () => <BigBox title="DashCam" imgUrl={`${DASHCAM_THUMBNAIL_BASE_URL}/cls-740.png`} description="Sales & Installation" buttonText="Go DashCam" />

export default () => (
    <HeroSection>
        <Wrapping />
        <DashCam />
    </HeroSection>
);