(function () {
    'use strict';

    angular
        .module('blogApp')
        .factory('PostsService', PostsService);

    PostsService.$inject = ['$resource'];

    function PostsService($resource) {
        var list = $resource('/data/posts.json');

        return {
            list: list,
            get: function(slug){
                var obj = {};
                var list = this.list.query(function(){
                    obj = list.find(function(e){
                        return e.slug === slug;
                    });
                });
                return obj;
            }
        }
    }
})();