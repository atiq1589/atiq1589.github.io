(function () {
    'use strict';
    angular
        .module('blogApp')
        .factory('GitRepositoryService', GitRepositoryService);

    GitRepositoryService.$inject = ['$resource'];

    function GitRepositoryService($resource) {

        var listUserRepo = $resource('https://api.github.com/users/:username/repos', {username:"@username"},{cache:true})

        return {
            gitUserRepoList: listUserRepo
        }

    }
})();