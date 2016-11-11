(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/",
                    abstract: true,
                    templateUrl: "app/layout/layout.html",
                    controller: 'LayoutController',
                    controllerAs: 'layCtrl'
                })
        });
})();