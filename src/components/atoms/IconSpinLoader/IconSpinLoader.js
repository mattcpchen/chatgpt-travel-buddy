import React from 'react';
import styled from 'styled-components';

import './iconSpinLoader.css';

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  padding: 30px;
`

const IconSpinLoader = () => {
  const imgSrc = '/assets/images/chatgptLogo.svg';
  return (
    <StyledImage className="rotate" src={imgSrc} />
  )
};


export default IconSpinLoader;
