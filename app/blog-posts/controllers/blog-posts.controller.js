(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['PostsService'];

    function PostsController(PostsService) {
        var self = this;
        self.Posts = PostsService.list.query();
    }
})();