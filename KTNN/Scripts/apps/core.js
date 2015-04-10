var app = angular.module("ktnnApp", ['ui.bootstrap', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap']);

app.controller("navCtrl", function ($scope, $modal) {

});

app.config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        animation: 'am-fade',
        html: true
    });
});
app.controller('modalCtrl', function ($scope, $modal) {
    // Controller usage example
    var myModal = $modal({ title: 'Title', content: 'Hello Modal<br />This is a multiline message!', show: true });
    $scope.showModal = function () {
        myModal.$promise.then(myModal.show);
    };
    $scope.hideModal = function () {
        myModal.$promise.then(myModal.hide);
    };

    // Show a basic modal from a controller
    //var myModal = $modal({ title: 'My Title', content: 'My Content', show: true });
    // Pre-fetch an external template populated with a custom scope
    //var myOtherModal = $modal({ scope: $scope, template: 'modal/docs/modal.tpl.demo.html', show: false });
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    //$scope.showModal = function () {
    //    myOtherModal.$promise.then(myOtherModal.show);
    //};
});