const Router = require('express').Router;
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');

var newsRouter = module.exports = exports = Router();

newsRouter.get('/news', (req, res) => {
  console.log('watsoN:  ' + process.env. );
  request.get('https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json' +
  '&return=enriched.url.url,enriched.url.title,enriched.url.publicationDate.date,' +
  'enriched.url.image,enriched.url.text&start=now-30d&end=now&q.enriched.url.title=' +
  'A[seattle^gun]&q.enriched.url.text=A[seattle^gun^violence]&return=enriched.url.title&apikey=' +
  'KEY')

  .end((err, data) => {
    console.log(data);
    if (err) return eH(err);
    res.status(200).json(data);
  });
});
