const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('../frontend'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
