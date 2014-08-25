app.factory('Article', ['$resource', function($resource) {
  function Article() {
    this.service = $resource('/api/articles/:articleId', {articleId: '@id'});
  };
  Article.prototype.all = function() {
    return this.service.query();
  };
  Article.prototype.delete = function(aId) {
    this.service.remove({articleId: aId});
  };
  Article.prototype.create = function(attr) {
   alert(123);
 return this.service.save(attr);
  }
  return new Article;
}]);
