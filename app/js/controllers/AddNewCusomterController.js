'use strict';
customerOverviewApp.controller('AddNewCusomterController',
 function AddNewCusomterController($scope, CustomerServices, $location) {
     var vm = this;
     var logNavigation = CustomerServices.logNavigation({
            'page': 'Add New',
            'timestamp': new moment().format("YYYY-MM-DD HH:mm:ss")
        });
     this.successMessage = "";

     vm.saveCustomer = function() {     
         var customers = (localStorage.getItem("customers") !== null) ? JSON.parse(localStorage.getItem("customers")) : [];    
         vm.customer.id = customers.length + 1;       
         customers.push(vm.customer);
         CustomerServices.saveCustomers(customers);
         this.successMessage = "Successfully Saved";
         $location.url('/overview');
     };
     
     vm.cancel = function() {
         $location.url('/overview');
     };
     
 });