var app = angular.module('ZumApp');
app.controller('CorEditController', function ($rootScope, $scope, CorService, $state, cor) {
    $scope.cor = cor;

    function atribuirCor(cor) {
        $scope.cor = cor;
    }

    $scope.save = function () {
        CorService.save($scope.cor, sucess, erro);

    };

    function sucess(){
        $state.go('home');
    }  ;

    function erro(){
        console.log('deu erro');
    };

});
