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
                    resolve: {
                        nav: ['$rootScope', function ($rootScope) {
                            $rootScope.currentNavItem = 'git-repo'
                        }]
                    }
                })
        }).run(['$rootScope', function ($rootScope) {
            if (!$rootScope.NavMenuList || $rootScope.NavMenuList.length == 0)
                $rootScope.NavMenuList = [];

            $rootScope.NavMenuList.splice(2, 0, {
                id: 'git-repo',
                name: 'My Git Repository',
                url: 'home.git-repo',
                ariaLabel: 'Git Repository',
                order: 2
            });
        }]);
})();