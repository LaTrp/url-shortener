const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const cors = require('cors'); 
const validUrl = require('valid-url');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing incoming request url encoded payloads

const urlDatabase = {};

app.post('/urls/shortUrl', (req, res) => {
  
  const { longUrl } = req.body;

  // Validate the URL
  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json('Invalid URL');
  }

  // Check if URL is already shortened
  let shortUrl = Object.keys(urlDatabase).find(key => urlDatabase[key] === longUrl); 
  if (!shortUrl) {
    // Generate a unique short URL
    shortUrl = shortid.generate();
    urlDatabase[shortUrl] = longUrl;
  }

  res.json({ shortUrl });
});

app.get('/urls/longUrl/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl;

  const longUrl = urlDatabase[shortUrl];
  if (longUrl) {
    return res.redirect(longUrl);
  } else {
    return res.status(404).json('URL not found');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
