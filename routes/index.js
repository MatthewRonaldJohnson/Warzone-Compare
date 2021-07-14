const router = require('express').Router();
const axios = require("axios");

router.get('/api/:user/:platform', async (req, res) => {
    console.log('hit api server')
    let { user, platform } = req.params;
    console.log('user', user);
    console.log('platform', platform);
    user = user.replace('#', '%23')
    console.log('user', user);


    const options = {
        method: 'GET',
        url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${user}/${platform}`,
        headers: {
          'x-rapidapi-key': process.env.CODAPIKEY,
          'x-rapidapi-host': process.env.CODAPIHOST
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });
});

module.exports = router;