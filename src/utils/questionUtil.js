

export const convertDropdownQuestion = (menuId, geoLonLat) => {
  const hasLonLat = geoLonLat?.lon && geoLonLat?.lat;
  const lonLatString = ` near Longitude = ${geoLonLat?.lon} and Latitude = ${geoLonLat?.lat}. `;
  const linebreakForList = ` Add a line break and list the restaurant's address. Quote the restaurant's name in double square bracket. add a new line for a new list.`

  let shortQuestionStr = '', questionString = '';
  if (menuId === 'food_japanese') {
    shortQuestionStr += 'list some popular Japanese restaurants.';
    shortQuestionStr += hasLonLat ? lonLatString : '';
    questionString = shortQuestionStr + linebreakForList;
  } else if (menuId === 'food_thai') {
    shortQuestionStr += 'list some popular Thai restaurants.';
    shortQuestionStr += hasLonLat ? lonLatString : '';
    questionString = shortQuestionStr + linebreakForList;
  } else if (menuId === 'food_french') {
    shortQuestionStr += 'list some popular French restaurants.';
    shortQuestionStr += hasLonLat ? lonLatString : '';
    questionString = shortQuestionStr + linebreakForList;
  }
  // activities
  else if (menuId === 'activity_shopping') {
    shortQuestionStr += 'list some best places to go shopping.';
    shortQuestionStr += hasLonLat ? lonLatString : '';
    questionString = shortQuestionStr + linebreakForList;
  } else if (menuId === 'activity_hiking') {
    shortQuestionStr += 'list some best places for hiking.';
    shortQuestionStr += hasLonLat ? lonLatString : '';
    questionString = shortQuestionStr + linebreakForList;
  }
  // information
  else if (menuId === 'information_subway') {
    shortQuestionStr += 'Where is the nearby subway station';
    shortQuestionStr += hasLonLat ? lonLatString : '';
    questionString = shortQuestionStr + linebreakForList;
  }

  return [shortQuestionStr, questionString];
}

export const convertSelfInputQuestion = (inputValue, geoLonLat) => {
  const hasLonLat = geoLonLat?.lon && geoLonLat?.lat;
  const lonLatString = ` near Longitude = ${geoLonLat?.lon} and Latitude = ${geoLonLat?.lat}. `;
  const linebreakForList = ` Add a line break and list the restaurant's address.quote the restaurant's name in double square bracket. add a new line for a new list.`

  let shortQuestionStr = '';
  let questionString = '';
  shortQuestionStr += Boolean(inputValue)
    ? `Find somewhere to go for ${inputValue}`
    : 'Suggest any place to go';
  shortQuestionStr += hasLonLat ? lonLatString : '';
  questionString = shortQuestionStr + linebreakForList;
  return [shortQuestionStr, questionString];
}