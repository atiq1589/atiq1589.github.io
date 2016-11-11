(function () {
    'use strict';

    angular
        .module('blogApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.resume', {
                    url: "resume",
                    templateUrl: "app/resume/resume.html",
                    controller: 'ResumeController',
                    controllerAs: 'resCtrl',
                    resolve:{
                        nav:['$rootScope', function($rootScope){
                            $rootScope.currentNavItem = 'resume'
                        }]
                    }
                })
        });
})();