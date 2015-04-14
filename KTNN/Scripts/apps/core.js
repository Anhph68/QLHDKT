var app = angular.module("ktnnApp", ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'mgcrea.ngStrap']);
'use strict'
app.config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        animation: 'am-fade',
        html: true,
        container: 'body'
    });
})
app.controller("navCtrl", function ($scope) {
});
app.controller('infoModalCtrl', function ($scope, $modal) {
    $scope.modal = { title: "Thay đổi thông tin tài khoản" };
    $scope.showModal = function () {
        myModal.$promise.then(myModal.show);
    };
    $scope.hideModal = function () {
        myModal.$promise.then(myModal.hide);
    };
});
app.controller('passwordModalCtrl', function ($scope, $modal) {
    $scope.modal = { title: "Thay đổi mật khẩu" };
    $scope.showModal = function () {
        myModal.$promise.then(myModal.show);
    };
    $scope.hideModal = function () {
        myModal.$promise.then(myModal.hide);
    };
});