(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('GitRepositoryController', GitRepositoryController);

    GitRepositoryController.$inject = ['GitRepositoryService'];

    function GitRepositoryController(GitRepositoryService) {
        var vm = this;
        vm.userRepoList = GitRepositoryService.gitUserRepoList.query({username:'atiq1589'});
    }
})();