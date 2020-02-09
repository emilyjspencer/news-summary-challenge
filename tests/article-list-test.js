function AddArticleToArticleList(){
  var describe = "Articles added to Article list"
  var articleList = new ArticleList();
  articleList.addNewArticle("headline", "summary");
  articleList.addNewArticle("headline", "summary");
  console.log(articleList.viewArticles());
  assert.isTrue(articleList.viewArticles().length === 2, describe);
}

AddArticleToArticleList();