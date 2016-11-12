(function () {
    'use strict';

    angular
        .module('blogApp')
        .factory('ProjectService', ProjectService);

    ProjectService.$inject = ['$resource'];

    function ProjectService($resource) {
        var list = $resource('/data/projects.json');

        return {
            list: list
        }
    }
})();