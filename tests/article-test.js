

function ArticleHeadline() {
  var describe = "Displays articles headline";
  var expect = "Corona Deaths";
  var article = new Article(expect, content);
  var actual = article.viewHeadline();
  var content = "Number of deaths caused by the Coronavirus rises by 87 in the space of 24 hours";
  assert.isEqual(actual, expect, describe);
}

ArticleHeadline()