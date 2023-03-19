import React from 'react';
import styled from 'styled-components';

import './spinLoader.css';

const StyledLoader = styled.div`
  width: 100px;
  margin: 20px auto;
`

const SpinLoader = () => {
  return (
    <StyledLoader>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" />
      </svg>
    </StyledLoader>
  )
};


export default SpinLoader;
