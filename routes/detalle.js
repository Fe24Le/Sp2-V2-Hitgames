var express = require('express');
var router = express.Router();

/* GET detalle page. */
router.get('/detalle', function(req, res, next) {
  res.render('detalle', { title: 'Detalle' });
});

module.exports = router;