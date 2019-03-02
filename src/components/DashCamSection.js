import React from 'react';
import styled from 'styled-components';

import { media } from '../media';
import SectionTitle from './SectionTitle';
import Thumbnail from './Thumbnail';
import { H3 } from './WrappingSection';

export const DASHCAM_THUMBNAIL_BASE_URL = "./images/thumbnails/dashcam";

const ThumbnailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    ${media.tablet`
        flex-direction: row;
        align-items: flex-start;
    `}
`;

const Ul = styled.ul`
    list-style-type: none;
    padding-left: 10px;
    
    & > li {
        text-indent: -5px;
    }

    & > li:before {
        content: "- ";
        text-indent: -5px;
    }
`;

const Cls740Spec = () => (
    <Ul>
        <li>2 Channel</li>
        <li>QHD/Full HD (1440p/1080p)</li>
        <li>Wireless connectivity(WiFi)</li>
        <li>32GB Memory card supplied</li>
        <li>128GB Upgradable</li>
        <li>Car Battery Discharge Protection</li>
        <li>Security LED</li>
        <li>Apple iOS/Android compatible</li>
        <li>Autido On/Off</li>
    </Ul>
);

const FxAirSpec = () => (
    <Ul>
        <li>2 Channel</li>
        <li>Full HD/Full HD (1080p/1080p)</li>
        <li>Sony EXMOR CMOS image sensor</li>
        <li>Wireless connectivity(WiFi)</li>
        <li>3.5" Full touch LCD (480*320)</li>
        <li>32GB Memory card supplied</li>
        <li>128GB Upgradable</li>
        <li>Car Battery Discharge Protection</li>
        <li>Security LED</li>
        <li>Apple iOS/Android compatible</li>
        <li>Autido On/Off</li>
    </Ul>
);

const Hx200Spec = () => (
    <Ul>
        <li>2 Channel</li>
        <li>HD/HD (720p/720p)</li>
        <li>3.5" Full touch LCD (480*320)</li>
        <li>16GB Memory card supplied</li>
        <li>128GB Upgradable</li>
        <li>Car Battery Discharge Protection</li>
        <li>Security LED</li>
        <li>Autido On/Off</li>
    </Ul>
);

export default () => (
    <section id="dashcam">
        <SectionTitle title="DashCam"></SectionTitle>

        <div>
            <H3>WINYCAM</H3>
            <p>
                WINYCAM is the longest lasting Car Dashcam brand in Korea where this market maturity is the
                WINYCAM do have the best clear image quality on wide temperature & brightness variation in the world and a reliable system working without failing to record video, audio and special sensor data. Seems to be very simples, but these are critically required for Car Dashcam.
                We proud ourselves low defective rate and high reliable technology, And we have contracted 5 big brands named company as OEM / ODM, which means our product quality is qualified in the market.
                We can gurantee we could satisfy custmers who choose WINYCAM
            </p>
        </div>

        <ThumbnailWrapper>
            <Thumbnail width={200} imgUrl={`${DASHCAM_THUMBNAIL_BASE_URL}/cls-740.png`} subTitle="CLS-740">
                <Cls740Spec />
            </Thumbnail>
            <Thumbnail width={200} imgUrl={`${DASHCAM_THUMBNAIL_BASE_URL}/fx-air.jpg`} subTitle="FX Air">
                <FxAirSpec />
            </Thumbnail>
            <Thumbnail width={200} imgUrl={`${DASHCAM_THUMBNAIL_BASE_URL}/hx-200.png`} subTitle="HX-200">
                <Hx200Spec />
            </Thumbnail>
        </ThumbnailWrapper>
    </section>
)