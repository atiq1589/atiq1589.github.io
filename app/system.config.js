(function () {
    'use strict';
    angular
        .module('blogApp')
        .run(['$rootScope', function SystemConfiguration($rootScope) {
            $rootScope.pageLimit = 10;

            $rootScope.ThemeColor = {};

            $rootScope.ThemeColor["HeaderColor"] = {color: 'yellow-A400', 'background': 'green-300'};
            $rootScope.ThemeColor["ListToolBarColor"] = {color: 'red-50', 'background': 'green-300'};
            $rootScope.ThemeColor["FooterColor"] = {color: 'deep-orange', 'background': 'grey-A200'};
        }]);
})();