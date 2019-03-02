import React from 'react';
import styled from 'styled-components';

import { LIGHT_GRAY } from '../colors';

const ThumbnailBox = styled.div`
    box-sizing: border-box;
    max-width: 320px;
    padding: 10px;
`;

const ImgPlaceHolder = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${LIGHT_GRAY};
`; 

export default ({ imgUrl, subTitle, description }) => {
    const ImageWrapper = imgUrl ? <img src={imgUrl} /> : <ImgPlaceHolder />;
    console.log('ImageWrapper : ', ImageWrapper)

    return (
        <ThumbnailBox>
            {ImageWrapper}
            <div>
                <h3>{subTitle}</h3>
                <p>{description}</p>
            </div>
        </ThumbnailBox>
    );
}