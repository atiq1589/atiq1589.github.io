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
                    resolve:{
                        nav:['$rootScope', function($rootScope){
                            $rootScope.currentNavItem = 'project-list'
                        }]
                    }
                })
        });
})();