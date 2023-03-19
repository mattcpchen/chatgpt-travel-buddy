import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from '../organisms/ChatHeader';
import ChatResponse from '../organisms/ChatResponse';

import { fetchChat } from '../../utils/fetchChat';
import { getGeoLocation } from '../../utils/geoLocation';

const ChatContainer = () => {
  const [qaData, setQAData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [geoLonLat, setGeoLonLat] = useState({});
  const [error, setError] = useState(null);
  const chatInputRef = useRef(null);

  useEffect(() => {
    getGeoLocation((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        setGeoLonLat(data);
      }
    })
  }, []);

  const handleSubmitFetch = (questionInShort, question) => {
    setIsLoading(true);
    fetchChat(question)
      .then(data => {
        chatInputRef.current.value = '';
        setQAData({ question: questionInShort, response: data });
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <ChatHeader
        isLoading={isLoading}
        geoLonLat={geoLonLat}
        chatInputRef={chatInputRef}
        handleSubmitFetch={handleSubmitFetch}
      />
      <ChatResponse
        isLoading={isLoading}
        qaData={qaData}
        error={error}
        geoLonLat={geoLonLat}
      />
    </>
  );
}

export default ChatContainer;