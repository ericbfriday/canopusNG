var express = require( 'express' );
var router = express.Router();
var bands = ['Modest Mouse', 'The Killers', 'Husker', 'Husker Do', 'Husker Don\t', 'Gorillaz'];

router.get('/', function (req, res) {
    console.log('/bands get hit');
    res.send(bands);
});

module.exports = router;