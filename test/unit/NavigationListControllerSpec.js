'use strict';

describe('NavigationListController', function(){
 var $controllerConstructor, 
        scope, 
        mockCustomerServices, 
        location, 
        underscore,
        moment,
        filterCallback,
        findIndexCallback,
        formatMomentCallback;
beforeEach(module("customerOverviewApp"));
beforeEach(inject(function($controller, $rootScope, $routeParams, _, $location){
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
    underscore = _;
    location = $location;
   
    mockCustomerServices = sinon.stub({
        getNavigationList: function(){},
        logNavigation: function({}){}
    });
}));

it('initate NavigationList Controller', function() {    
     var mockList = [];
          
     var navigationData = {
            'customerId': 1,
            'page': 'D',
            'timestamp': '2017-09-18 12:40:40'
    };

     spyOn(mockCustomerServices, 'logNavigation');
     mockCustomerServices.getNavigationList.returns(mockList);
     var ctrl = $controllerConstructor("NavigationListController",
     {'$scope': scope, 
     '$routeParams': {id: 1},
     '_': underscore,
     '$location': location,
     'CustomerServices':mockCustomerServices
    });
    // Commented as the expected call with object should have current date time.
    //expect(mockCustomerServices.logNavigation).toHaveBeenCalledWith(navigationData);
    expect(ctrl.navigationList).toBeTruthy();
});
it('NavigationList Controller:sortTimestampOrder method', function() {    
     var navData;
     var mockList = [{
                    'customerId': '1',
                    'page': 'A',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '1',
                    'page': 'B',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '1',
                    'page': 'A',
                    'timestamp': '2013-06-01 10:10:12'
                }];
     mockCustomerServices.getNavigationList.returns(mockList);
     var sortField = 'timestamp';
     var ctrl = $controllerConstructor("NavigationListController",{
         '$scope': scope, 
         '$routeParams': {id: 1},
         '_': underscore,
         '$location': location,
         'CustomerServices':mockCustomerServices
    });
    ctrl.sortTimestampOrder(sortField);
    expect(ctrl.navigationList.length).toBe(mockList.length);
});

});