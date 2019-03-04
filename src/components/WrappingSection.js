import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import Thumbnail from './Thumbnail';
import { media } from '../media';

export const WRAPPING_THUMBNAIL_BASE_URL = "./images/thumbnails/wrapping";

const ThumbnailWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${media.tablet`
        justify-content: flex-start;
    `}
`;

const Ul = styled.ul`
    ${props => props.listStyle && `list-style: ${props.listStyle}`}
`;

const Li = styled.li``;

export const H3 = styled.h3`
    text-decoration: underline;
`;

export default () => (
    <section id="wrapping">
        <SectionTitle title="Car Wrapping"></SectionTitle>

        <div>
            <H3>Full Wraps</H3>
            <p>For those who want to go the full distance in terms of changing up your vehicle, this is for you. Full car wraps are the most expensive car wrapping option and can take days to complete depending on the material used and the vehicle being wrapped. It is essential to use the most skilled installers for your full wrap. Full car wraps can be used to:</p>
            <Ul>
                <Li>Completely change the whole look and style of your vehicle</Li>
                <Li>Convert your car to a completely different colour, without all of the long delays that can hold back getting your car in shape as well as the extreme costs.</Li>
                <Li>Be unique and take your car to a new level with a textured material.</Li>
                <Li>Protect the vehicle body paintwork and help hold the resale value of your vehicle.</Li>
            </Ul>
            <ThumbnailWrapper>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/full/camo-bmw-m4.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/full/lamborghini-aventador-2.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/full/lamborghini-aventador.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/full/lamborghini-gallardo-2.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/full/lamborghini-gallardo.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/full/lamborghini-murcielago.jpg`} description=""/>
            </ThumbnailWrapper>
        </div>

        <div>
            <H3>Partial Wraps</H3>
            <p>Suggested applicable area:</p>
            <Ul>
                <Li>Side mirrors</Li>
                <Li>Spoiler or Boot lip</Li>
            </Ul>
            <p>A partial wrapping an quick and affordable car mod. Getting a partially wrapping can:</p>
            <Ul>
                <Li>Transform the style of your car by giving you an extra layer of colour compared to similar vehicles.</Li>
                <Li>Add a simple contrast to the look of your car without going over the top and making your car seem too loud.</Li>
                <Li>Add minor texturing to your vehicle styling with a finish such as carbon fibre to really add another layer of class to the overall design.</Li>
            </Ul>
            <ThumbnailWrapper>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/partial/partial-maserati.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/partial/partial-wrap.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/partial/partial-wrap-2.jpg`} description=""/>
            </ThumbnailWrapper>
        </div>

        <div>
            <H3>Roof Wraps</H3>
            <p>Roof wraps are used to add patterns to vehicles or to streamline the design and look of the vehicle by adding a dark contrasting colour. Using a finish of carbon fibre can visibly add to the quality and look of a vehicle, especially high end models. Whatever your choice is, though, roof wraps can help:</p>
            <Ul>
                <Li>Change the overall look and feel of your vehicle.</Li>
                <Li>Use colour to add contrast and alter the design of the car.</Li>
                <Li>Use textured materials that interact with light differently.</Li>
                <Li>Provide protection to the paintwork below.</Li>
            </Ul>
            <ThumbnailWrapper>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/roof/roof-rangerover.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/roof/roof-stinger.jpg`} description=""/>
            </ThumbnailWrapper>
        </div>

        <div>
            <H3>PPF (Paint protection film)</H3>
            <p>Paint protection kits are a totally clear and invisible way of protecting your car bodywork from general wear and tear, stone chips and minor abrasions. Suggested applicable area:</p>
            <Ul>
                <Li>Full front package available which includes bonnet, bumper bar and guards</Li>
                <Li>Head lights</Li>
                <Li>Door edges</Li>
                <Li>Door cup</Li>
                <Li>Fuel cap lid</Li>
                <Li>Boot area</Li>
            </Ul>
            <ThumbnailWrapper>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/ppf/ppf-jaguar.jpg`} description=""/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/ppf/ppf-porsche.jpg`} description=""/>
            </ThumbnailWrapper>
        </div>

        <div>
            <H3>Headlight & Taillight Tinting</H3>
            <ThumbnailWrapper>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/tinting/taillight-tinting-before.jpg`} description="Before"/>
                <Thumbnail imgUrl={`${WRAPPING_THUMBNAIL_BASE_URL}/tinting/taillight-tinting-after.jpg`} description="After"/>
            </ThumbnailWrapper>
        </div>
    </section>
)