var app = angular.module("ktnnApp", ['ui.bootstrap']);

app.controller("navCtrl", function ($scope, $modal) {
    console.log('OK');
    $scope.editInfo = function () {
        console.log('ok');
        var modalInstance = $modal.open({
            templateUrl: 'Home/ModalInfo',
            controller: 'ModalCtrl'
        });
    }

});

app.controller('ModalCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});