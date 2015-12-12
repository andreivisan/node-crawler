var cheerio = require('cheerio');

module.exports.extractData = function(html, config) {

  var $ = cheerio.load(html);

  $(config.article.base).each(function() {
    var title = $(config.article.title, this).text();
    console.log("The title of the article is: %s", title);
  });

}
