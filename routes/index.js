var express = require('express');
var router = express.Router();

var fs = require("fs");

var crawler = require('../crawler/index');
var scrapper = require('../scrapper/index')

/* GET home page. */
router.get('/', function(req, res) {
  var filePath = "scrapper/scrapper-config.json";
  var fileContent = fs.readFileSync(filePath);

  crawler.crawl(function(content) {
    scrapper.extractData(content, JSON.parse(fileContent), function(posts) {
      console.log("Posts: %s", JSON.stringify(posts));
    });
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
