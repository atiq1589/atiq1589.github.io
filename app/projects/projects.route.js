(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.project-list', {
                    url: "project-list",
                    templateUrl: "app/projects/list/project-list.html",
                    controller: 'ProjectListController',
                    controllerAs: 'proListCtrl',
                    resolve: {
                        nav: ['$rootScope', function ($rootScope) {
                            $rootScope.currentNavItem = 'project-list'
                        }]
                    }
                })
        }).run(['$rootScope', function ($rootScope) {
            if (!$rootScope.NavMenuList || $rootScope.NavMenuList.length == 0)
                $rootScope.NavMenuList = [];

            $rootScope.NavMenuList.splice(1, 0, {
                id: 'projects',
                name: 'Projects',
                url: 'home.project-list',
                ariaLabel: 'Projects',
                order: 1
            });
        }]);
})();