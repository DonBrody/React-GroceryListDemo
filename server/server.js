const express = require('express');

const app = express();
const router = require('express').Router();

// determine env dir and set view engine
const ENV_DIR = (`${__dirname}/../dist/`);
app.set('views', ENV_DIR);
app.set('view engine', 'ejs');

// setup use of static directories
app.use('*/static', express.static(`${ENV_DIR}/js`));
app.use('*/static', express.static(`${ENV_DIR}/img`));

// setup routing
router.use('/', (req, res) => {
  res.render('index', {
    title: 'Florida Blue Code Sample',
  });
});

router.use('*', (req, res, next) => {
  const e = new Error('Invalid URL');
  e.http_code = 404;
  next(e);
});

app.use('/', router);

// setup global error handling
app.use((err, req, res, next) => {
  if (err.http_code) {
    res.status(err.http_code).send(err.message);
  } else {
    const msg = (err.message) ? err.message : 'Internal Server Error';
    res.status(500).send(msg);
  }
  next();
});

module.exports = app;
