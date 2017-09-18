'use strict';

describe('AddNewCusomterController', function(){
 var $controllerConstructor, 
        scope, 
        mockCustomerServices, 
        location
beforeEach(module("customerOverviewApp"));
beforeEach(inject(function($controller, $rootScope, $location){
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
    location = $location;
   
    mockCustomerServices = sinon.stub({
        logNavigation: function(){},
        saveCustomers: function(){}
    });
}));

it('initate AddNewCusomterController Controller', function() {    
     var ctrl = $controllerConstructor("AddNewCusomterController",
     {'$scope': scope, 
     'CustomerServices':mockCustomerServices,
     '$location': location     
    });
});

it('AddNewCusomterController: saveCustomer', function() {    
     var mockData = {
                    'id': '1',
                    'firstName': 'Peter',
                    'lastName': 'Smith',
                    'birthday': '1996-10-12',
                    'gender': 'm',
                    'lastContact': '2013-06-01',
                    'customerLifetimeValue': '191,12'
                };          
     var ctrl = $controllerConstructor("AddNewCusomterController",
     {'$scope': scope, 
     'CustomerServices':mockCustomerServices,
     '$location': location     
    });
    ctrl.customer = {};
    ctrl.customers = [mockData];
    ctrl.successMessage = "Successfully Saved"; 
    ctrl.saveCustomer();
    expect(ctrl.successMessage).toBe("Successfully Saved");
});

});