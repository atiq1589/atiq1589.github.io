(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['PostsService', '$state'];

    function PostsController(PostsService, $state) {
        var self = this;
        self.Posts = PostsService.list.query();

        self.go = function(slug){
            $state.go('home.blogPostDetail', {slug: slug});
        }
    }
})();