angular.module('ChartsApp', [])
    .run(function(data) {
        data.fetchJsonData().then(function (response) {
        }, console.error);
    });
