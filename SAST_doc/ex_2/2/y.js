const express = require('express');
const router = express.Router()
import {isMatch} from 'super-regex';

router.get("/tstMe", (req, res) => { 
    var r = /([a-z]+)+$/;

    let match = isMatch(r, req.params.id, {timeout: 1000});

    res.render('result', { matchResult: match });    
});


module.exports = router
