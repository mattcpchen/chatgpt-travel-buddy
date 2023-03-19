import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

import { convertDropdownQuestion } from '../../utils/questionUtil';

const DropdownToggle = styled(Dropdown.Toggle)`
  width: 100%;
`;

function ChatDropdown(props) {
  const { className, isLoading, geoLonLat, handleSubmitFetch } = props;

  const handleOnSelect = (eventKey, event) => {
    event.preventDefault();
    const [simpleQuestion, dpQuestion] = convertDropdownQuestion(eventKey, geoLonLat);
    handleSubmitFetch(simpleQuestion, dpQuestion);
  }

  return (
    <Dropdown className={className} onSelect={handleOnSelect}>
      <DropdownToggle
        variant="dark"
        id="dropdown-basic"
        size="sm"
        disabled={isLoading}
      >
        Choose what you wanna do
      </DropdownToggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="food_japanese">
          Find best Japanese restaurants near me
        </Dropdown.Item>
        <Dropdown.Item eventKey="food_thai">
          Find best Thai restaurants near me
        </Dropdown.Item>
        <Dropdown.Item eventKey="food_french">
          Find best French restaurants near me
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item eventKey="activity_shopping">
          Find best places to go shopping
        </Dropdown.Item>
        <Dropdown.Item eventKey="activity_hiking">
          Find best places for hiking
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item eventKey="information_subway">
          Find the nearby subway station
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ChatDropdown;