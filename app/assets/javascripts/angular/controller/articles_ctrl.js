app.controller('ArticleCtrl', ['$scope', 'Article','$filter', function($scope, Article,$filter) {
    $scope.articles = Article.all();
    $scope.deleteArticle = function(id,idx) {
	$scope.articles.splice(idx, 1);
	return Article.delete(id);
    };
    $scope.createArticle = function(){
	var attr={};
	attr.title=$filter('uppercase')($scope.newArticle);
	attr.description=$scope.newDesc;
	var newTitle=Article.create(attr);
	$scope.articles.push(newTitle);
	$scope.newArticle=" ";
    };
}]);
