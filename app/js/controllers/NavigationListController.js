'use strict';


customerOverviewApp.controller('NavigationListController',
 function NavigationListController($scope, $routeParams, _, $location, CustomerServices) {
    this.sortField = 'timestamp';
    this.sortOrder = false;
    var logNavigation = CustomerServices.logNavigation({
            'customerId': $routeParams.id,
            'page': 'D',
            'timestamp': new moment().format("YYYY-MM-DD HH:mm:ss")
    });

    var customers = JSON.parse(localStorage.getItem('customers'));
    var index = _.findIndex(customers, function(data) { 
        return data.id  == $routeParams.id;
    });
    if(index > -1) {
        this.name = customers[index].firstName +" "+customers[index].lastName;
        this.customer = customers[index];
    }
    
    this.navigationList = _.filter(CustomerServices.getNavigationList(), function(data) {
        return data.customerId == $routeParams.id;
    });
    this.backToOverview = function() {        
        logNavigation = CustomerServices.logNavigation({
            'customerId': $routeParams.id,
            'page': 'X',
            'timestamp': new moment().format("YYYY-MM-DD HH:mm:ss")
        });
        $location.url('/overview');
    }
    this.sortTimestampOrder = function(sortField) {
        var order = this.sortOrder ? 'asc' : 'desc';
        this.navigationList = _.orderBy(this.navigationList, ['timestamp'], [order]);
        this.sortOrder = !this.sortOrder;        
    }
 });