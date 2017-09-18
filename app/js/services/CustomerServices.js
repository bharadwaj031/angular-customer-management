customerOverviewApp.service('CustomerServices',
function() {
    return {
        initiateDb: function(){
            if(JSON.parse(localStorage.getItem('navigationData')) == null) {
                var navData = [{
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
                },{
                    'customerId': '2',
                    'page': 'C',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '2',
                    'page': 'A',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '2',
                    'page': 'D',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '2',
                    'page': 'B',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '3',
                    'page': 'B',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '3',
                    'page': 'A',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '4',
                    'page': 'D',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '4',
                    'page': 'A',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '5',
                    'page': 'X',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '5',
                    'page': 'A',
                    'timestamp': '2013-06-01 10:10:12'
                },{
                    'customerId': '5',
                    'page': 'B',
                    'timestamp': '2013-06-01 10:10:12'
                }];
                localStorage.setItem('navigationData', JSON.stringify(navData));
            }
            if(localStorage.getItem('customers') == null) {
                var customerOverviewData = [{
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
                                },
                                {
                                    'id': '3',
                                    'firstName': 'Christian',
                                    'lastName': 'Cox',
                                    'birthday': '1991-02-21',
                                    'gender': 'm',
                                    'lastContact': '2013-08-01',
                                    'customerLifetimeValue': '0'
                                },
                                {
                                    'id': '4',
                                    'firstName': 'Roxy',
                                    'lastName': 'Fox',
                                    'birthday': '1979-06-30',
                                    'gender': 'w',
                                    'lastContact': '2012-01-29',
                                    'customerLifetimeValue': '213,12'
                                },
                                {
                                    'id': '5',
                                    'firstName': 'Eric',
                                    'lastName': 'Adam',
                                    'birthday': '1969-11-21',
                                    'gender': 'm',
                                    'lastContact': '2013-03-18',
                                    'customerLifetimeValue': '1019,91'
                                }];
                localStorage.setItem('customers', JSON.stringify(customerOverviewData));
            }
        },
        saveCustomers: function(customers) {
            localStorage.setItem("customers", JSON.stringify(customers))
        },
        getCustomerList: function() {
            return JSON.parse(localStorage.getItem('customers'));
        },
        getNavigationList: function() {
            return JSON.parse(localStorage.getItem('navigationData'));
        },
        logNavigation: function(data) {
            var log = (JSON.parse(localStorage.getItem('navigationData')) == null) ? [] : JSON.parse(localStorage.getItem('navigationData'));
            log.push(data);
            localStorage.setItem('navigationData', JSON.stringify(log));
        }
    }
});