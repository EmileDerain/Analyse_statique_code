const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {
    const { name }  = sanitize(req.query);
    const nameHello = '<h1> Hello :'+ name +"</h1>"
    res.render('hello', {htmlhello: nameHello})
})

router.get('/greet-template', (req,res) => {
    name = req.query.name
    res.render('index', { user_name: name});
})

module.exports = router
