"use strict";
var app = angular.module('ZumApp');

app.factory('CorService', function ($resource) {
    return $resource('/cores/:id');
})
