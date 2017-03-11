window.populateCategories = function(articles) {
  var categories = [];
  articles.forEach(function(article) {
    if (!categories.includes(article.section)) {
      categories.push(article.section);
    }
  })
  return categories;
}