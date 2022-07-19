import React from 'react';
import LinearProgress from '@mui/material/LinearProgress'
import styled from 'styled-components';

const Bar = styled.div`
    width: 100%;
    & > * + * {
        margin-top: 16px;
    }
`

export default () => {
    return (
        <Bar>
            <LinearProgress />
        </Bar>
    );
};