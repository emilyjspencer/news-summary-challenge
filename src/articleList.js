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



  
  

  exports.ArticleList = ArticleList;
})(this);