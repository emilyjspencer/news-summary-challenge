function AddArticleToArticleList(){
  var describe = "Articles added to Article list"
  var articlelist = new ArticleList();
  articlelist.addArticle("Storm Ciara", "Hurricane-force winds batter UK transport network");
  articlelist.addArticle("Coronavirus", "Britons arrive from Wuhan as deathtoll overtakes Sars");
  console.log(articlelist.viewArticles());
  console.log(articlelist.viewArticles()[0]);
  console.log(articlelist.viewArticles()[0].headline); // headline for storm ciara
  console.log(articlelist.viewArticles()[0].content);
  console.log(articlelist.viewArticles()[1].headline); // headline for coronavirus
  console.log(articlelist.viewArticles()[1].content);
  console.log(articlelist.viewArticles()[0].headline === "Storm Ciara");
  console.log(articlelist.viewArticles()[1].content === "Britons arrive from Wuhan as deathtoll overtakes Sars");
  console.log(articlelist.viewArticles().length === 2);
  assert.isTrue(articlelist.viewArticles().length === 2, describe);
  assert.isTrue(articlelist.viewArticles()[0].headline === "Storm Ciara", describe);
  assert.isTrue(articlelist.viewArticles()[1].content === "Britons arrive from Wuhan as deathtoll overtakes Sars", describe);
}

AddArticleToArticleList();