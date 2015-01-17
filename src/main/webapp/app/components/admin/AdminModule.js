var AdminModule = angular.module('AdminModule', ['ui.router']);

AdminModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('admin',{
            url: '/admin',
            templateUrl: '/app/components/admin/AdminView.html',
            resolve: {
                adminData: ['AdminService', function(AdminService) {
                    return AdminService.get().$promise;
                }]
            },
            controller: 'AdminController'
        })
}]);