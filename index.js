const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.post('/createUser', async (req, res) => {

  let user = await store.createUser({
      username: req.body.username,
      password: req.body.password
    });
  res.sendStatus(200);
});

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})
