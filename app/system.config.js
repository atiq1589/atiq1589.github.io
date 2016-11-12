(function () {
    'use strict';
    angular
        .module('blogApp')
        .run(['$rootScope', function SystemConfiguration($rootScope) {
            $rootScope.pageLimit = 5;

            $rootScope.ThemeColor = {};

            $rootScope.ThemeColor["HeaderColor"] = { color: 'yellow-A400', 'background': 'green-300' };
            $rootScope.ThemeColor["ListToolBarColor"] = { color: 'red-50', 'background': 'green-300' };
            $rootScope.ThemeColor["FooterColor"] = { color: 'red-A200', 'background': 'grey-A200' };
            $rootScope.ThemeColor["FabButtonColor"] = { color: 'red-50', 'background': 'green-300' };
            $rootScope.ThemeColor["FabChildColor"] = { 'background': 'green-300' };
            $rootScope.ThemeColor["FabChildIconColor"] = { color: 'Grey-900' };
            $rootScope.ThemeColor["FooterIconColor"] = { color: 'red-A200' };

            $rootScope.ColorNames = [
                'red',
                'pink',
                'purple',
                'deep-purple',
                'indigo',
                'blue',
                'light-blue',
                'cyan',
                'teal',
                'green',
                'light-green',
                'lime',
                'yellow',
                'amber',
                'orange',
                'deep-orange',
                'brown',
                'grey',
                'blue-grey'
            ];
            $rootScope.ColorSwatch = [
                '50',
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                '900',
                'A100',
                'A200',
                'A400',
                'A700'
            ];
            /**
             <select ng-options="item for item in ColorNames" ng-model="bcolor"></select>
    <select ng-options="item for item in ColorSwatch" ng-model="bswatch"></select>
    <!--<input type="text" ng-bind="ThemeColor.FooterColor.background = bcolor + '-' + bswatch" ng-model="ThemeColor.FooterColor.background"> <br>-->
    
    <select ng-options="item for item in ColorNames" ng-model="color"></select>
    <select ng-options="item for item in ColorSwatch" ng-model="swatch"></select> 
    <!--<input type="text" ng-bind="ThemeColor.FooterColor.color = color + '-' + swatch" ng-model="ThemeColor.FooterColor.color"> -->
             */


        }]);
})();