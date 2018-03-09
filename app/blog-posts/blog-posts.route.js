(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.blogPosts', {
                    url: "blog-posts",
                    templateUrl: "app/blog-posts/list.html",
                    controller: 'BlogPostsController',
                    controllerAs: 'postListCtrl',
                    resolve: {
                        nav: ['$rootScope', function ($rootScope) {
                            $rootScope.currentNavItem = 'BlogPost'
                        }]
                    }
                })
        }).run(['$rootScope', function ($rootScope) {
            if (!$rootScope.NavMenuList || $rootScope.NavMenuList.length == 0)
                $rootScope.NavMenuList = [];

            $rootScope.NavMenuList.splice(1, 0 ,{
                id: 'blog-posts',
                name: 'Blog Posts',
                url: 'home.blogPosts',
                ariaLabel: 'Blog Posts',
                order: 1
            });
        }]);
})();