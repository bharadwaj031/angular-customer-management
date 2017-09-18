'use strict';

describe('CustomerOverviewComtroller', function(){
 var $controllerConstructor, 
        scope, 
        mockCustomerServices, 
        location, 
        underscore;
beforeEach(module("customerOverviewApp"));
beforeEach(inject(function($controller, $rootScope, $routeParams, _, $location){
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
    underscore = _;
    location = $location;
   
    mockCustomerServices = sinon.stub({
        getCustomerList: function(){},
        saveCustomers: function(){},
        initiateDb: function(){}
    });
}));

it('initate CustomerOverviewController', function() {    
     var mockList = [];
     var ctrl = $controllerConstructor("CustomerOverviewController",
     {'$scope': scope, 
     'CustomerServices':mockCustomerServices,
     '$location': location,
     '_': underscore
    });
});

it('CustomerOverviewController: deleteCustomer', function() {    
    var mockData= [{
                'id': '1',
                'firstName': 'Peter',
                'lastName': 'Smith',
                'birthday': '1996-10-12',
                'gender': 'm',
                'lastContact': '2013-06-01',
                'customerLifetimeValue': '191,12'
            },
            {
                'id': '2',
                'firstName': 'Anna',
                'lastName': 'Hopp',
                'birthday': '1987-05-03',
                'gender': 'w',
                'lastContact': '2013-07-08',
                'customerLifetimeValue': '50,99'
    }];
    var list = [{
                'id': '1',
                'firstName': 'Peter',
                'lastName': 'Smith',
                'birthday': '1996-10-12',
                'gender': 'm',
                'lastContact': '2013-06-01',
                'customerLifetimeValue': '191,12'
            }];
    mockCustomerServices.getCustomerList.returns(list);
     var ctrl = $controllerConstructor("CustomerOverviewController",
     {'$scope': scope, 
     'CustomerServices':mockCustomerServices,
     '$location': location,
     '_': underscore
    });
    ctrl.deleteCustomer(2);
    expect(ctrl.customerOverviewData).toBe(list);
});

});