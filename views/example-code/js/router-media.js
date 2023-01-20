router.get('/cogan/random', async (req, res, next) => {
    var result = {
    url: `https://api.smkxt7.my.id/api/cogan/random?apikey=smkxt7`, method: 'GET', encoding: null };
    request(result, function(error, response, body) {
    res.set('Content-Type', 'image/png');
    res.send(body)
    })
    })