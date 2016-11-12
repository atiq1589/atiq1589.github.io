(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('LayoutController', LayoutController);

    function LayoutController() {
        var vm = this;
        vm.navMenu = [{
            id:'landing',
            name: 'Home',
            url: 'home.landing',
            ariaLabel: 'Home'
        }, {
            id:'git-repo',            
            name: 'My Git Repository',
            url: 'home.git-repo',
            ariaLabel: 'Git Repository'

        },
        {
            id:'resume',
            name: 'Resume',
            url: 'home.resume',
            ariaLabel: 'Resume'
        }]

        vm.footerUrl = 'app/layout/partials/footer.html';
        vm.headerUrl = 'app/layout/partials/header.html';

        vm.User = {
            name: 'md atiqul islam',
            avatar: '/img/avatar.jpg'
        }
       
    }
})();