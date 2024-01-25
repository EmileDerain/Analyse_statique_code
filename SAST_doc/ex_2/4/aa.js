
console.log('WIP')
const express = require('express');
const router = express.Router()
const urlLib = require('url');


router.get('/login',function(req, res){
    let followPath = req.query.path;
    if(req.session.isAuthenticated()){
        res.redirect('http://example.com/'+followPath); //false positive
    }else{
        res.redirect('/');
    }
}); 



router.get('/goto',function(req, res){
    const parsedUrl = new URL(req.query.url);
    if (isValidUrl(parsedUrl)) {
        ctx.redirect(parsedUrl);
    } else {
    ctx.body = 'Invalid target URL';
    }
}); 


function isValidUrl(url) {
    try {
        const parsedUrl = new URL(url);
        const allowlist = ["site1", "site2"];
        if (parsedUrl.protocol !== "https:") {
            return false;
        }
        const allowedPaths = ["/path1", "/path2"];
        if (!allowedPaths.includes(parsedUrl.pathname)) {
            return false;
        }
        if (!allowlist.includes(parsedUrl.hostname)) {
            return false;
        }

        // Ajoutez d'autres vérifications au besoin

        return true;
    } catch (error) {
        return false;
    }
}


module.exports = router
