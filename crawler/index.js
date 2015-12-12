var Crawler = require('simplecrawler');

module.exports.crawl = function(callback) {
  var myCrawler = Crawler.crawl("http://programminglife.io/");

  var urls = [];

  myCrawler.on("crawlstart", function() {
    console.log("Crawler started!");
  });

  myCrawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
      callback(responseBuffer);
  });

  myCrawler.start();
}
