function ArticleListView() {
  
  var describe = "ArticleListView takes an article list when instantiated";
  var expect = "<li>Oscars 2020</li>";
  var articlelist = new ArticleList();
  articlelist.addArticle("Oscars 2020", "Ad time to be hacked by protest against lack of female director nods");
  // "Oscars 2020 is the headline"
  var articleListView = new ArticleListView(articlelist);
  assert.isEqual(articleListView.showNewsHeadlinesHTML(), expect, describe);
}


ArticleListView();