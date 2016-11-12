(function () {
    'use strict';
    angular
        .module('blogApp')
        .controller('LayoutController', LayoutController);

    function LayoutController() {
        var vm = this;
        vm.footerUrl = 'app/layout/partials/footer.html';
        vm.headerUrl = 'app/layout/partials/header.html';

        vm.User = {
            name: 'md atiqul islam',
            avatar: '/img/avatar.jpg',
            contactInfos: [
                {
                    type: 'Email',
                    info: 'maileto:atiqul.islam1589@gmail.com',
                    icon: 'email',
                    display: 'atiqul.islam1589@gmail.com'

                }, {
                    type: 'Phone',
                    info: 'tel:+8801675392131',
                    icon: 'phone',
                    display: '+880 1675 39 2131'
                }
            ],
            socialLinks: [
                {
                    name: 'Github',
                    url: '//github.com/atiq1589',
                    logo: 'github-circle'
                },
                {
                    name: 'Linkedin',
                    url: '//bd.linkedin.com/in/atiq1589',
                    logo: 'linkedin'
                }
            ]
        }

    }
})();