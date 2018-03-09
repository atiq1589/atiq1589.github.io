(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('PostDetailController', PostDetailController);

    PostDetailController.$inject = ['PostsService', '$stateParams'];

    function PostDetailController(PostsService, $stateParams) {
        var self = this;
        self.Posts = PostsService.list.query(function () {
            self.Post = self.Posts.find(function (e) {
                return e.slug == $stateParams.slug
            });
        });
    }
})();
