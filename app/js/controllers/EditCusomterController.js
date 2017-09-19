'use strict';
customerOverviewApp.controller('EditCusomterController',
 function EditCusomterController($scope, $routeParams, _, $location, CustomerServices) {
    
    var logNavigation = CustomerServices.logNavigation({
            'customerId': $routeParams.id,
            'page': 'B',
            'timestamp': new moment().format("YYYY-MM-DD HH:mm:ss")
    });
   /* Fetch the customer by id from the list of customers*/
    var customers = CustomerServices.getCustomerList();
    var index = _.findIndex(customers, function(data) { 
        return data.id  == $routeParams.id;
    });
    if(index > -1) {    
        this.customer = customers[index];
    }
   /* Save the customer by id with the modified customer object*/
    this.saveCustomer = function() {
        if(index > -1)
            customers[index] = this.customer;
        CustomerServices.saveCustomers(customers);
        $location.url('/overview');
    }
    this.cancel = function(){
        logNavigation = CustomerServices.logNavigation({
            'customerId': $routeParams.id,
            'page': 'C',
            'timestamp': new moment().format("YYYY-MM-DD HH:mm:ss")
    });
        $location.url('/overview');
    }
 });
