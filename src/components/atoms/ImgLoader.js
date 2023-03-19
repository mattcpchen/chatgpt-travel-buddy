import React from 'react';
import styled from 'styled-components';


const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`

const ImgLoader = () => {
  const imgSrc = '/assets/images/loader.svg';
  return (
    <StyledImage src={imgSrc} />
  )
};


export default ImgLoader;
