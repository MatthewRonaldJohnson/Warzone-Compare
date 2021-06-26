const router = require('express').Router();
const unirest = require("unirest");

router.get('/api/:user/:platform', async (req,res)=>{
    let {user, platform} = req.params;
    user = user.replace('#', '%23')
    const foreignReq = unirest("GET", `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${user}/${platform}`);
    foreignReq.headers({
        "x-rapidapi-key": process.env.CODAPIKEY,
        "x-rapidapi-host": process.env.CODAPIHOST,
        "useQueryString": true
    });
    foreignReq.end(function (data) {
        if (data.error) {
            res.json(data.error);
        }
    
        res.json(data.body)
    });
});

module.exports = router;