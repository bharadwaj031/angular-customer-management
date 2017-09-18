'use strict';

var customerOverviewApp = angular.module('customerOverviewApp', ['ngResource', 'ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/overview', {
        templateUrl: 'templates/CustomerOverview.html',
        controller: 'CustomerOverviewController',
        controllerAs: 'customerOverview'
    })
    .when('/create', {
        templateUrl: 'templates/AddNewCustomer.html',
        controller: 'AddNewCusomterController',
        controllerAs: 'addCustomer'
    }).when('/edit/:id', {
        templateUrl: 'templates/EditCustomer.html',
        controller: 'EditCusomterController',
        controllerAs: 'editCustomer'
    }).when('/navData/:id', {
        templateUrl: 'templates/NavigationList.html',
        controller: 'NavigationListController',
        controllerAs: 'navigationListCtrl'
    }).otherwise({'redirectTo':'/overview'});
    
})
.factory('moment', function ($window) {
        return $window.moment;
})
.factory('_', function ($window) {
    return $window._;
});
