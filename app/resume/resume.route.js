(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.resume', {
                    url: "resume",
                    templateUrl: "app/resume/resume.html",
                    controller: 'ResumeController',
                    controllerAs: 'resCtrl',
                    resolve: {
                        nav: ['$rootScope', function ($rootScope) {
                            $rootScope.currentNavItem = 'resume'
                        }]
                    }
                })
        }).run(['$rootScope', function ($rootScope) {
            if (!$rootScope.NavMenuList || $rootScope.NavMenuList.length == 0)
                $rootScope.NavMenuList = [];

            $rootScope.NavMenuList.splice(3, 0 ,{
                id: 'resume',
                name: 'Resume',
                url: 'home.resume',
                ariaLabel: 'Resume',
                order: 4
            });
        }]);
})();