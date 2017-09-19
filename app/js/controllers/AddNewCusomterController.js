'use strict';
customerOverviewApp.controller('AddNewCusomterController',
 function AddNewCusomterController($scope, CustomerServices, $location) {
     var vm = this;
     /* Log the navigation when user enters add customer controller */
     var logNavigation = CustomerServices.logNavigation({
            'page': 'Add New',
            'timestamp': new moment().format("YYYY-MM-DD HH:mm:ss")
        });
     this.successMessage = "";
    /* Saving customer using HTML5 local storage*/
     vm.saveCustomer = function() {     
         var customers = (localStorage.getItem("customers") !== null) ? JSON.parse(localStorage.getItem("customers")) : [];    
         vm.customer.id = customers.length + 1;       
         customers.push(vm.customer);
         CustomerServices.saveCustomers(customers);
         this.successMessage = "Successfully Saved";
         $location.url('/overview');
     };
     /* Navigate to cancel */
     vm.cancel = function() {
         $location.url('/overview');
     };
     
 });
