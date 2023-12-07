const express = require('express');
require('dotenv').config();

require('./database');

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
