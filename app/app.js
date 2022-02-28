const express = require('express');
const router = require('./routers');

const app = express();

require('./helpers/docHelper')(app);

app.use(express.static('./public'));

app.use(express.json());

app.use(router);

module.exports = app;
