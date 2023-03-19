

export const convertResponse = (response) => {
  let index = 0;
  while (index < response.length) {
    const isStartQuote = response[index] === '[' && response[index] === '[';
    const isEndQuote = response[index] === ']' && response[index] === ']';
    if (isStartQuote || isEndQuote) {
      const str_01 = response.substring(0, index);
      const str_03 = response.substring(index + 2);
      const str_02 = isStartQuote ? `<span style='font-weight:900'>` : '</span>';
      response = str_01 + str_02 + str_03;
      index = str_01.length + str_02.length - 1;
    }
    index++;
  }
  return response;
}