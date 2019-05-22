const express = require('express');
const join = require('path').join;

const router = new express.Router()

router.use(express.static(join(__dirname, '../../wwwroot')));

router.get('/index.html', (req, res) => {
  res.render('site/index');;
});

router.get('/team.html', (req, res) => {
  res.render('site/team');
});

router.get('/how-it-works.html', (req, res) => {
  res.render('site/how-it-works');
});

router.get('/exchanges.html', (req, res) => {
  res.render('site/exchanges');
});

router.get('/careers.html', (req, res) => {
  res.render('site/careers');
});

router.get('/status.html', (req, res) => {
  res.render('site/status');
});

router.get('/download.html', (req, res) => {
  res.render('site/download');
});

router.get('/token-profile.html', (req, res) => {
  res.render('site/token-profile');
});


router.get('/', (_, res) => res.redirect(301, '/index.html'));

module.exports = router;
