var app = angular.module('ZumApp');
app.controller('CorListController', function ($rootScope, $scope, CorService) {
    $scope.cores = [];

    function carregarCores() {
        CorService.query(onSucess, onFail);
    }


    function onSucess(data) {
        $scope.cores = data;
        console.log("acabouuuuuuuuu", $scope.cores);
    }

    function onFail(error) {
        alert('deu erro: ' + error);
    }

    carregarCores();

    $scope.remover = function (id) {
        CorService.remove({id: id}, carregarCores);
    }

});