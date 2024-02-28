const express = require('express');
const mailRouter = require('./mailRouter')
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', mailRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err
  res.status(status).json({ message })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;