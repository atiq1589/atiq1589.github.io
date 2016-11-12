(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.landing', {
                    url: "",
                    templateUrl: "app/landing/landing.html",
                    controller: 'LandingController',
                    controllerAs: 'landCtrl',
                    resolve: {
                        nav: ['$rootScope', function ($rootScope) {
                            $rootScope.currentNavItem = 'landing'
                        }]
                    }
                })
        })
        .run(['$rootScope', function ($rootScope) {
            if (!$rootScope.NavMenuList || $rootScope.NavMenuList.length == 0)
                $rootScope.NavMenuList = [];
            $rootScope.NavMenuList.splice(0, 0, {
                id: 'landing',
                name: 'Home',
                url: 'home.landing',
                ariaLabel: 'Home',
                order: 0
            });
        }]);
})();