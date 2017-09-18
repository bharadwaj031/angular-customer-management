'use strict';
customerOverviewApp.controller('CustomerOverviewController',
 function CustomerOverviewController($scope, CustomerServices, $location, _) {     
    
    var initDb = CustomerServices.initiateDb();
    var logNavigation;
    this.customerOverviewData = [];
    this.selectedfilter = {
        'sortField': 'lastName',
        'sortOrder': false
    };
    this.overviewPageLabels = {
        'title' : 'Customer Overview',
        'addCustomerButton': 'Add New Customer',
        'recordOptions': {
            'edit': 'Edit',
            'delete': 'Delete',
            'navigate': 'Navigate'
        }
    };
    this.customerOverviewData = CustomerServices.getCustomerList();     
    this.sortOrder = function(sortField) {
        if (this.selectedfilter.sortField == sortField) {
            if (!this.selectedfilter.sortDescOrder){            
                this.selectedfilter.sortField = '-'+sortField;
            } else {
                this.selectedfilter.sortField = sortField;
            } 
            this.selectedfilter.sortDescOrder = !this.selectedfilter.sortDescOrder;

        } else {
            this.selectedfilter.sortDescOrder = false;
            this.selectedfilter.sortField = sortField;
        }
    }
    this.addNew = function(){
        $location.url('/create');
    }
    this.editCustomer = function(id) {
        $location.url('/edit/'+id);
    }
    this.navData = function(id) {
        $location.url('/navData/'+id);
    }
    this.deleteCustomer = function(id) {
        var customers = _.filter(CustomerServices.getCustomerList(), function(data){
            return data.id != id;
        });

        CustomerServices.saveCustomers(customers);
        this.customerOverviewData = CustomerServices.getCustomerList();
    }
    
 });