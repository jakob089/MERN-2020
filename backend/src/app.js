const express = require('express');
const cors = require('cors');
const app = express();
const listEndpoints = require('express-list-endpoints');
const port = 3001;
const route = require('./routes');
const connection = require('./contants');

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err);
    return;
  }
  console.log('Database ' + connection.state);
});

app.use(cors())
app.use('/api', route);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
  console.log('Register Route: \n', listEndpoints(app));
})