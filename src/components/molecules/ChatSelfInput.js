import React, { useRef } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { convertSelfInputQuestion } from '../../utils/questionUtil';

const Container = styled(Form)`
  display:flex;
`;

const StyledInput = styled(Form.Control)`
  width: 192px;

  @media screen and (max-width: 450px),
         only screen and (max-device-width: 450px){
    width: 120px;
`;

const StyledSubmitBtn = styled(Button)`
  margin-left: 5px;
`;

function ChatSelfInput(props) {
  const { isLoading, geoLonLat, chatInputRef, handleSubmitFetch } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const inputValue = chatInputRef.current?.value ?? '';
    const [simpleQuestion, dpQuestion] = convertSelfInputQuestion(inputValue, geoLonLat);
    handleSubmitFetch(simpleQuestion, dpQuestion);
  }

  return (
    <Container onSubmit={handleOnSubmit}>
      <StyledInput
        type="text"
        ref={chatInputRef}
        size="sm"
        placeholder="Tell me what you wanna do"
        disabled={isLoading}
      />
      <StyledSubmitBtn
        variant="outline-dark"
        type="submit"
        size="sm"
        disabled={isLoading}
      >Submit</StyledSubmitBtn>
    </Container>
  );
}

export default ChatSelfInput;