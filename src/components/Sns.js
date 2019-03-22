import React from "react";
import styled from "styled-components";

const SnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IconWrapper = styled.a`
  margin: 0 5px;
`;

const Facebook = () => (
  <IconWrapper
    href="https://www.facebook.com/motorjunctionmoorabbin/"
    target="_blank"
  >
    <img
      style={{ width: "46px" }}
      src="./images/thumbnails/sns/flogo_RGB_HEX-72.png"
      alt="facebook icon"
    />
  </IconWrapper>
);
const Instagram = () => (
  <IconWrapper
    href="https://www.instagram.com/motorjunction_official/"
    target="_blank"
  >
    <img src="./images/thumbnails/sns/IG_Glyph_Fill.png" alt="facebook icon" />
  </IconWrapper>
);

export default () => (
  <SnsWrapper>
    <Facebook />
    <Instagram />
  </SnsWrapper>
);
