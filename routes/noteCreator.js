/**
 * Created by andrew.pokorney on 10/12/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('noteCreator', { title: 'noteCreator' });
});

module.exports = router;