angular.module('ChartsApp').controller('descriptionCtrl', function ($scope, bus) {
    'use strict';

    bus.on('updateData', function(data) {
        $scope.data = angular.copy(data);
        console.info($scope.data);
    });

});
