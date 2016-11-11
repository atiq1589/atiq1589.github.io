(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.git-repo', {
                    url: "git-repository",
                    templateUrl: "app/git-repository/git-repository.html",
                    controller: 'GitRepositoryController',
                    controllerAs: 'repoCtrl',
                    resolve:{
                        nav:['$rootScope', function($rootScope){
                            $rootScope.currentNavItem = 'git-repo'
                        }]
                    }
                })
        });
})();