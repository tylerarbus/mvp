window.populateCategories = function(articles) {
  var categories = [];
  articles.forEach(function(article) {
    if (!categories.includes(article.category) && article.category) {
      categories.push(article.category);
    }
  })
  return categories;
}