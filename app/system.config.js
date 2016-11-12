(function () {
    'use strict';
    angular
        .module('blogApp')
        .run(['$rootScope', function SystemConfiguration($rootScope) {
            $rootScope.pageLimit = 10;

            $rootScope.ThemeColor = {};

            $rootScope.ThemeColor["ListToolBarColor"] = {color: 'deep-orange', 'background': 'cyan-800'};
        }]);
})();