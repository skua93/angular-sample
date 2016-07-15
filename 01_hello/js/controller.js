/**
 * Created by 김순곤 on 2016-07-09.
 */

angular.module('myApp',[]).controller('appCtrl', function ($scope) {

    var vm = {name:'안녕'};
    $scope.name = 'world';
    $scope.btnHandler = function () {
        $scope.name = vm.name;

        alert($scope.name);
    };

});


