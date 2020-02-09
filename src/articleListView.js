(function(exports) {

  function ArticleListView(articlelist) {
    this.articlelist = articlelist;
  }

  ArticleListView.prototype.showHeadlinesHTML = function() {
    var articles = this.articlelist.viewArticles(); // returns articles
    var string = ""; // empty string to add our headline to
    for(var x = 0; x < articles.length; x++){ // loop through the articles array (from ArticleList Model)
      string += "<li>" + articles[x].viewHeadline() + "</li>"; // and add to the string the appropriate html tags 
                                                    // with each element of array embedded and exposing its headline
}
return string;
}

  exports.ArticleListView = ArticleListView;
})(this);