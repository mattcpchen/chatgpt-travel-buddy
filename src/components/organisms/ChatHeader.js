import React from 'react';
import styled from 'styled-components';

import ChatDropdown from '../molecules/ChatDropdown';
import ChatSelfInput from '../molecules/ChatSelfInput';

const StyledSearchHeader = styled.div`
  background-color: #eee;
  min-width: 80%;
  border: 1px solid #999;
  border-radius: 10px;
  position: relative;
  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  -ms-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  padding: 10px 20px;
`
const HeaderTitle = styled.div`
  font-size: 10px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 15px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 450px),
         only screen and (max-device-width: 450px){
    flex-direction: column;
    align-items: center;
  }
`;

const LogoImage = styled.div`
  width: 200px;
  height: 50px;
  margin-right: 20px;
  background-image: ${props => 'url("' + props.src + '")'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 450px),
         only screen and (max-device-width: 450px){
          margin-bottom: 10px;
  }
`

const StyledChatDropdown = styled(ChatDropdown)``;

const StyledOr = styled.div`
  text-align: center;
  font-size: 10px;
  font-weight: 900;
  font-style: italic;
  margin: 2px;
`;

const ChatHeader = (props) => {
  const { isLoading, geoLonLat, chatInputRef, handleSubmitFetch } = props;

  return (
    <StyledSearchHeader>
      <HeaderTitle>
        TELL ME WHAT YOU WANTO TO DO, WE TELL YOU WHERE TO DO IT.
      </HeaderTitle>
      <HeaderContent>
        <LogoImage src="/assets/images/chatgptLogo2.webp" />
        <div>
          <StyledChatDropdown
            isLoading={isLoading}
            geoLonLat={geoLonLat}
            handleSubmitFetch={handleSubmitFetch}
          />
          <StyledOr>OR</StyledOr>
          <ChatSelfInput
            isLoading={isLoading}
            geoLonLat={geoLonLat}
            chatInputRef={chatInputRef}
            handleSubmitFetch={handleSubmitFetch}
          />
        </div>
      </HeaderContent>
    </StyledSearchHeader >
  )
}

export default ChatHeader;