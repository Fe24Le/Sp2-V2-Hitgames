var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

module.exports = router;