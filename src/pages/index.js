import React from 'react';
import styled from 'styled-components';

import HeroSection from '../components/HeroSection';
import WrappingSection from '../components/WrappingSection';
import DashCamSection from '../components/DashCamSection';

const HiddenH1 = styled.h1`
  visibility: hidden;
  margin: 0;
`;

const CompanyDescription = styled.p`
  max-width: 600px;
  margin: 0 auto 50px auto;
  text-align: center;
`;

const HomeContentWrapper = styled.div`
  margin-top: -50px;
`;

const Gutter = styled.div`
    height: 50px;
`;

export default () => (
    <HomeContentWrapper>
      <HiddenH1>Motor Junction</HiddenH1>
      <CompanyDescription>Automotive Workshop , Quality Vinyl Wrapping, 2 Channel Dash Cam Sale & Installation in Moorabbin
Opening at 08:00 on Monday</CompanyDescription>
      <HeroSection />
      <Gutter />
      <WrappingSection />
      <Gutter />
      <DashCamSection />
    </HomeContentWrapper>
)
