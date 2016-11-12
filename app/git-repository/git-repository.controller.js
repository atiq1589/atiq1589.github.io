(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('GitRepositoryController', GitRepositoryController);

    GitRepositoryController.$inject = ['GitRepositoryService', '$rootScope'];

    function GitRepositoryController(GitRepositoryService, $rootScope) {
        var vm = this;
        vm.userRepoList = GitRepositoryService.gitUserRepoList.query({ username: 'atiq1589' });
    }
})();