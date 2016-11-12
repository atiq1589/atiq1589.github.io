(function () {
    'use strict';
    angular
        .module('blogApp')
        .run(['$rootScope', function SystemConfiguration($rootScope) {
            $rootScope.pageLimit = 5;

            $rootScope.ThemeColor = {};

            $rootScope.ThemeColor["HeaderColor"] = {color: 'yellow-A400', 'background': 'green-300'};
            $rootScope.ThemeColor["ListToolBarColor"] = {color: 'red-50', 'background': 'green-300'};
            $rootScope.ThemeColor["FooterColor"] = {color: 'deep-orange', 'background': 'grey-A200'};
            $rootScope.ThemeColor["FabButtonColor"] = {color: 'red-50', 'background': 'green-300'};
            $rootScope.ThemeColor["FabChildColor"] = {'background': 'green-300'};
            $rootScope.ThemeColor["FabChildIconColor"] = {color: 'Grey-900'};
        }]);
})();