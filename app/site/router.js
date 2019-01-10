const express = require('express');
const join = require('path').join;

const router = new express.Router()

router.use(express.static(join(__dirname, '../../wwwroot')));

router.get('/', (req, res) => {
  res.render('site/index');
});

router.get('/team', (req, res) => {
  res.render('site/team', { active: 'team' });
});

router.get('/how-it-works', (req, res) => {
  res.render('site/how-it-works', { active: 'how-it-works' });
});

router.get('/exchanges', (req, res) => {
  res.redirect(301, '/');
  // res.render('site/exchanges', { active: 'exchanges' });
});

router.get('/careers', (req, res) => {
  res.render('site/careers', { active: 'careers' });
});

// Redirect old site URLs
router.get('/index.html', (_, res) => res.redirect(301, '/'));
router.get('/team.html', (_, res) => res.redirect(301, '/team'));
router.get('/how-it-works.html', (_, res) => res.redirect(301, '/how-it-works'));
router.get('/exchanges.html', (_, res) => res.redirect(301, '/exchanges'));
router.get('/careers.html', (_, res) => res.redirect(301, '/careers'));

module.exports = router;
