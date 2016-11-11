(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.landing', {
                    url: "/",
                    templateUrl: "/app/landing/landing.html",
                    controller: 'LandingController',
                    controllerAs: 'landCtrl'
                })
        });
})();