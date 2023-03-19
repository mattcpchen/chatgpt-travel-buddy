import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Loader from '../atoms/IconSpinLoader';
import { convertResponse } from '../../utils/responseUtils';

const ChatResponseBox = styled(Card)`
  white-space: pre-wrap;
  margin-top: 10px;
  padding: 10px;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1em;
`;

const ResponseQA = styled.div`
`;

const ResponseQ = styled.div`
  margin-bottom: 20px;
  font-weight: 900;
`;

const ResponseA = styled.div`
  max-height: 320px;
  overflow-y: scroll;
`;

const HeaderTitle = styled.div`
  font-size: 10px;
  text-align: center;
  font-weight: 900;
`;

const CardFooter = styled(Card.Footer)`
  margin-top: 20px;
`;

const ChatResponse = (props) => {
  const { isLoading, error, qaData, geoLonLat } = props;
  const { question, response } = qaData;
  const displayLoading = isLoading;
  const displayData = !isLoading && Boolean(response) && !error;
  const displayError = !isLoading && !response && Boolean(error);
  const hasContent = displayLoading || displayData || displayError;
  const lonLatDisplayText = (geoLonLat?.lon && geoLonLat?.lat)
    ? `Your current location is @ lon=${geoLonLat.lon} lat=${geoLonLat.lat}`
    : 'Loading your current geoloading now ...';

  const responseWithStyle = convertResponse(response || '');
  return (
    <ChatResponseBox>
      {displayLoading && (<Loader />)}
      {displayData && (
        <ResponseQA>
          <ResponseQ>{`Q: ${question}`}</ResponseQ>
          <ResponseA dangerouslySetInnerHTML={{ __html: responseWithStyle }} />
        </ResponseQA>
      )}
      {displayError && (error)}
      {!hasContent && (
        <HeaderTitle>{lonLatDisplayText}</HeaderTitle>
      )}
      {hasContent && (
        <CardFooter>
          <HeaderTitle>{lonLatDisplayText}</HeaderTitle>
        </CardFooter>
      )}
    </ChatResponseBox>
  )
}

export default ChatResponse;