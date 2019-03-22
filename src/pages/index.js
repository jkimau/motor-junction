import React from 'react';
import styled from 'styled-components';

import HeroSection from '../components/HeroSection';
import WrappingSection from '../components/WrappingSection';
import DashCamSection from '../components/DashCamSection';
import Sns from '../components/Sns';
import { GLOBAL_GOLD } from '../colors';

const HiddenH1 = styled.h1`
  visibility: hidden;
  margin: 0;
`;

const CompanyDescription = styled.p`
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
`;

const HomeContentWrapper = styled.div`
  margin-top: -50px;
`;

const Gutter = styled.div`
    height: 50px;
`;

const ContacSection = styled.div`
  font-size: 45px;
  margin: 20px 0 30px 0;
  text-align: center;

  a {
    color: ${GLOBAL_GOLD};
  }
`;

const Address = styled.div`
  font-size: 16px;
`;

export default () => (
    <HomeContentWrapper>
      <HiddenH1>Motor Junction</HiddenH1>
      <CompanyDescription>One stop Automotive Workshop.<br/>All mechanical works, Quality Vinyl Wrapping, 2 Channel Dash Cam Sale & Installation
      <br/>opening from 8am to 5pm, Monday to Friday</CompanyDescription>
      <ContacSection>
        <a href="tel:03 9553 1344">03 9553 1344</a>
        <Address>81 Keys Rd Moorabbin VIC 3189</Address>
      </ContacSection>
      <Sns />
      <HeroSection />
      <Gutter />
      <WrappingSection />
      <Gutter />
      <DashCamSection />
    </HomeContentWrapper>
)
