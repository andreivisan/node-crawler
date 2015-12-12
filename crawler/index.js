var Crawler = require('simplecrawler');

module.exports.crawl = function(callback) {
  var myCrawler = Crawler.crawl("http://programminglife.io/");

  var urls = [];

  myCrawler.on("crawlstart", function() {
    console.log("Crawler started!");
  });

  myCrawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
      //console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
      callback(responseBuffer);
  });

  myCrawler.start();
}
