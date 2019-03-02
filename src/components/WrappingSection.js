import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import Thumbnail from './Thumbnail';

const FULL_WRAPPING_THUMBNAIL_BASE_URL = "./images/thumbnails/wrapping/full";

const ThumbnailWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Ul = styled.ul`
    ${props => props.listStyle && `list-style: ${props.listStyle}`}
`;

const Li = styled.li``;

export default () => (
    <section id="wrapping">
        <SectionTitle title="Car Wrapping"></SectionTitle>

        <div>
            <h3>Full Wraps</h3>
            <p>For those who want to go the full distance in terms of changing up your vehicle, this is for you. Full car wraps are the most expensive car wrapping option and can take days to complete depending on the material used and the vehicle being wrapped. It is essential to use the most skilled installers for your full wrap. Full car wraps can be used to:</p>
            <Ul>
                <Li>Completely change the whole look and style of your vehicle – the difference is night and day.</Li>
                <Li>Convert your car to a completely different colour, without all of the long delays that can hold back getting your car in shape as well as the extreme costs.</Li>
                <Li>Be unique and take your car to a new level with a textured material.</Li>
                <Li>Protect the vehicle body paintwork and help hold the resale value of your vehicle.</Li>
            </Ul>
            <ThumbnailWrapper>
                <Thumbnail imgUrl={`${FULL_WRAPPING_THUMBNAIL_BASE_URL}/camo-BMW-M4.jpg`} description="test description"/>
                <Thumbnail imgUrl={`${FULL_WRAPPING_THUMBNAIL_BASE_URL}/lamborghini-aventador-2.jpg`} description="test description"/>
                <Thumbnail imgUrl={`${FULL_WRAPPING_THUMBNAIL_BASE_URL}/lamborghini-aventador.jpg`} description="test description"/>
                <Thumbnail imgUrl={`${FULL_WRAPPING_THUMBNAIL_BASE_URL}/lamborghini-gallardo-2.jpg`} description="test description"/>
                <Thumbnail imgUrl={`${FULL_WRAPPING_THUMBNAIL_BASE_URL}/lamborghini-gallardo.jpg`} description="test description"/>
                <Thumbnail imgUrl={`${FULL_WRAPPING_THUMBNAIL_BASE_URL}/lamborghini-murcielago.jpg`} description="test description"/>
            </ThumbnailWrapper>
        </div>

        <div>
            <h3>Partial Wraps</h3>
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
        </div>

        <div>
            <h3>Roof Wraps</h3>
            <p>Roof wraps are used to add patterns to vehicles or to streamline the design and look of the vehicle by adding a dark contrasting colour. Using a finish of carbon fibre can visibly add to the quality and look of a vehicle, especially high end models. Whatever your choice is, though, roof wraps can help:</p>
            <Ul>
                <Li>Change the overall look and feel of your vehicle.</Li>
                <Li>Use colour to add contrast and alter the design of the car.</Li>
                <Li>Use textured materials that interact with light differently.</Li>
                <Li>Provide protection to the paintwork below.</Li>
            </Ul>
        </div>

        <div>
            <h3>PPF (Paint protection film)</h3>
            <p>Paint protection kits are a totally clear and invisible way of protecting your car bodywork from general wear and tear, stone chips and minor abrasions. Suggested applicable area:</p>
            <Ul>
                <Li>Head lights</Li>
                <Li>Door edges</Li>
                <Li>Door cup</Li>
                <Li>Fuel cap lid</Li>
                <Li>Boot area</Li>
            </Ul>
        </div>

        <div>
            <h3>Headlight & Taillight Tinting</h3>
        </div>
    </section>
)