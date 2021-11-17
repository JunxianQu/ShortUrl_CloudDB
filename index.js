const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

// app.get('/url', (req, res) => {
//   //TODO: get a short url by id
// })

// app.get('/:id', (req, res) => {
//   //TODO: redirect to url
//   res.json({
//     message: 'cdg.sh - Short Urls for your code garden'
//   });
// });

// app.post('/url', (req, res) => {
//   //TODO: creat a short url
// });



const port = process.env.PORT || 1337;
app.listen(port, () =>{
  console.log(`Listening at http://localhost:${port}`);
});
