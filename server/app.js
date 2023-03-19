const express = require('express');
const path = require('path');

const getChatResponse = require('./app-utils/chat-service');

module.exports = function () {
  const app = express();
  app.set('port', process.env.PORT || 3000);

  // for body-parser
  app.use(express.text());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Set up the ChatGPT endpoint
  app.post("/chat", async (req, res) => {
    const { prompt } = JSON.parse(req.body);
    const [question, response] = await getChatResponse(prompt);
    res.status(200).send(JSON.stringify(response));
  });

  // webpack with HMR
  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('../webpack.client.config');

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      noInfo: true,
    }));
    app.use(webpackHotMiddleware(compiler));
  }

  // static routes
  if (process.env.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, '../public/')))
    app.use(express.static(path.join(__dirname, '../dist/')))
  } else if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'))
    app.use(express.static('dist'))
  }

  // routes
  app.get('/', (req, res) => {
    const indexHtmlPath = path.resolve('public/index.html')
    res.sendFile(indexHtmlPath);
  });

  return app;
}