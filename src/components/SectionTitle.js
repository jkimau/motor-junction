import React, { Fragment } from 'react';
import styled from 'styled-components';

import { PINK } from '../colors';

const SectionTitleH2 = styled.h2`
    padding: 15px 0;
    border-top: 1px solid ${PINK};
    border-bottom: 1px solid ${PINK};
`;

export default ({ title }) => (
    <Fragment>
        <SectionTitleH2>{title}</SectionTitleH2>
    </Fragment>
)