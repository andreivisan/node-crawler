var cheerio = require('cheerio');

module.exports.extractData = function(html, config) {

  var $ = cheerio.load(html);

  $(config.article.base).each(function() {
    $(config.article.title, this).each(function(index, element) {
      console.log("Post title: %s", element.attribs.title);
    });

    $(config.article.date, this).each(function(index, element) {
      console.log("Post date: %s", element.attribs.datetime);
    });

  });
}
