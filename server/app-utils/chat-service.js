const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

// for "text-davinci-002" model
const getOldChatResponse = async (question) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: question,
  });
  const firstResponse = completion.data.choices[0].text;
  return [input, firstResponse];
};

// for "gpt-3.5-turbo"
const getChatResponse = async (question) => {
  const messages = [{
    role: 'user',
    content: question
  }];

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });

    const firstResponse = completion.data.choices[0].message.content;
    const currHistory = [question, firstResponse.trim()];
    return currHistory;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

module.exports = getChatResponse;