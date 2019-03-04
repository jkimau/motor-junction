import React from 'react';
import styled from 'styled-components';

import { LIGHT_GRAY } from '../colors';
import { media } from '../media';

const ThumbnailBox = styled.div`
    box-sizing: border-box;
    max-width: 320px;
    padding: 10px;
`;

const ImgPlaceHolder = styled.div`
    width: ${props => props.width ? props.width : '300'}px;
    height: ${props => props.width ? props.width : '300'}px;;
    background-color: ${LIGHT_GRAY};
`;

const ImgWrapper = styled.div`
    ${media.tablet`
        min-height: 250px;
    `}
`;

const Img = styled.img`
    width: 100%;
`;

export default ({ width, imgUrl, subTitle, description, children }) => {
    const ImageWrapper = imgUrl ? <ImgWrapper><Img src={imgUrl} alt={description} /></ImgWrapper> : <ImgPlaceHolder width={width}/>;

    return (
        <ThumbnailBox>
            {ImageWrapper}
            <div>
                {subTitle && <h3>{subTitle}</h3>}
                {description && <p>{description}</p>}
                {children}
            </div>
        </ThumbnailBox>
    );
}