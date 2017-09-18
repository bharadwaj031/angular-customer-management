'use strict';

describe('EditCusomterController', function(){
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
            logNavigation: function(){},
            getCustomerList: function(){},
            saveCustomers: function(){}
        });
    }));

    it('initate EditCusomterController', function() {    
        var mockList = [{
                        'id': '1',
                        'firstName': 'Peter',
                        'lastName': 'Smith',
                        'birthday': '1996-10-12',
                        'gender': 'm',
                        'lastContact': '2013-06-01',
                        'customerLifetimeValue': '191,12'
        }];
        mockCustomerServices.getCustomerList.returns(mockList);
        var ctrl = $controllerConstructor("EditCusomterController",
        {'$scope': scope,
        '$routeParams': {'id': 1},
        '_': underscore,
        '$location': location,
        'CustomerServices':mockCustomerServices
        });
        expect(ctrl.customer).toBe(mockList[0]);
    });

    it('EditCusomterController: saveCustomer', function() {    
        var mockList = [{
                        'id': '1',
                        'firstName': 'Peter',
                        'lastName': 'Smith',
                        'birthday': '1996-10-12',
                        'gender': 'm',
                        'lastContact': '2013-06-01',
                        'customerLifetimeValue': '191,12'
        }];
        var editMockList = [{
                        'id': '1',
                        'firstName': 'Peter S',
                        'lastName': 'Smith',
                        'birthday': '1996-10-12',
                        'gender': 'm',
                        'lastContact': '2013-06-01',
                        'customerLifetimeValue': '191,12'
        }];
        mockCustomerServices.getCustomerList.returns(mockList);
        var ctrl = $controllerConstructor("EditCusomterController",{
            '$scope': scope,
            '$routeParams': {'id': 1},
            '_': underscore,
            '$location': location,
            'CustomerServices':mockCustomerServices
        });
        ctrl.saveCustomer();
    });

});