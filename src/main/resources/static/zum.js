/**
 * Created by Willaim on 22/07/2017.
 */
var ZumApp = angular.module('ZumApp', ['ui.router', 'ngResource']);

ZumApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'cadastro/cor/lista.html',
            controller: 'CorListController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('cor-novo', {
            url: '/cor-novo',
            templateUrl: 'cadastro/cor/edita.html',
            controller: 'CorEditController',
            resolve:{
                cor: function () {
                    return {};
                }
            }
        })
    .state('cor-edita', {
            url: '/cor-edita/{id}',
            templateUrl: 'cadastro/cor/edita.html',
            controller: 'CorEditController',
        resolve:{
                cor:function ($stateParams, CorService) {
                    return CorService.get({id:$stateParams.id});
                }
        }
        });

});