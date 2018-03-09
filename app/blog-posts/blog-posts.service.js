(function () {
    'use strict';

    angular
        .module('blogApp')
        .factory('PostsService', PostsService);

    PostsService.$inject = ['$resource'];

    function PostsService($resource) {
        var list = $resource('/data/posts.json');

        return {
            list: list
        }
    }
})();