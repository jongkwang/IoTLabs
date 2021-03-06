var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.user) {
        res.redirect('/board');
    }
    else {
        let err = {};
        if (req.query.error == "loginFailed") {
            err = { err : 'Login Failed' };
        }
        res.render('index', err);
    }
});

module.exports = router;
