'use strict';

customerOverviewApp.filter('getAge', function (moment) {
    return function(input) {
        return moment().diff(input, 'years',false);
    }
});

customerOverviewApp.filter('gender', function (moment) {
    return function(input) {
        return input === 'm' ? 'Male' : 'Female';
    }
});