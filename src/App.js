
import React from 'react';
import styled from 'styled-components';
import ChatContainer from './components/pages/ChatContainer';

const AppContainer = styled.div`
  width: 80%;
  align-items: center;
  margin: 10px auto;
`

const App = () => {
  return (
    <AppContainer>
      <ChatContainer />
    </AppContainer>
  )
};

export default App;