var Crawler = require('simplecrawler');

module.exports.crawl = function() {
  var myCrawler = Crawler.crawl("http://programminglife.io/");

  var urls = [];

  myCrawler.maxDepth = 3;

  myCrawler.on("crawlstart", function() {
    console.log("Crawler started!");
  });

  // myCrawler.on("queueadd", function(queueItem) {
  //   console.log("New url added to the queue: %s", JSON.stringify(queueItem));
  // });
  //
  // myCrawler.on("queueerror", function(errorData, URLData) {
  //   console.log("Item %s could not be added to the queue because: %s", URLData, errorData);
  // });
  //
  // myCrawler.on("fetcherror", function(queueItem, response) {
  //   console.log("Information could not be fetched from %s due to error", queueItem);
  // });

  myCrawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
      console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
      urls.push(queueItem);
  });

  myCrawler.start();
}
