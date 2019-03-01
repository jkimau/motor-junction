import React from 'react'
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction && props.direction || 'row'};
`;

const BigSection = ({ title, buttonText }) => {
  return (
    <Flex direction="column">
      <h2>{title}</h2>
      <div>Image place holder</div>
      <button>{buttonText}</button>
    </Flex>
  );
};

const Wrapping = () => <BigSection title="Wrapping" buttonText="More about wrapping" />
const DashCam = () => <BigSection title="DashCam" buttonText="More about DashCam" />

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Home page</h1>
    <Flex>
      <Wrapping />
      <DashCam />
    </Flex>
  </div>
)
