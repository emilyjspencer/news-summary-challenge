

(function(exports) {

  function Article(headline, content) {
    this.headline = headline;
    this.content = content;
  }

  Article.prototype.viewHeadline = function() {
    return this.headline;
  };

  Article.prototype.viewContent = function() {
    return this.content;
  };

  
  exports.Article = Article;
})(this);