(function(exports) {

  function ArticleList() {
    this.articles = [];
  }

  
  ArticleList.prototype.addArticle = function(headline, content) {
    article = new Article(headline, content);
    this.articles.push(article);
  }

  ArticleList.prototype.viewArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.viewHeadlines = function() {
    return this.articles[0].headline
  }

  ArticleList.prototype.viewContent = function() {
    return this.articles[0].content
  }

  exports.ArticleList = ArticleList;
})(this);