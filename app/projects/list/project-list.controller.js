(function () {
    'use strict';

    angular
        .module('blogApp')
        .controller('ProjectListController', ProjectListController);

    ProjectListController.$inject = ['ProjectService'];

    function ProjectListController(ProjectService) {
        var vm = this;
        vm.Projects = ProjectService.list.query();
    }
})();