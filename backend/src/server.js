const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// API URL and API key
const api_URL = "https://api-football-v1.p.rapidapi.com/v2";
const api_key = "a5bb23d759msh6aa30df992c50c4p196749jsn2b14ca242735";

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Controllers
const matchFixture = require('./controller/matchFixture');

// API calls
matchFixture(app, api_URL, api_key);

app.listen(port, () => console.log(`Football geeks -  listening on port ${port}`));