app.controller("tdktCtrl", function ($scope, $filter) {
    $scope.today = function () {
        $scope.dt = $filter('date')(Date.now(), 'dd/MM/yyyy');
    };
    $scope.today();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.dateOptions = {
        startingDay: 1
    };
});