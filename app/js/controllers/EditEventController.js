'use strict';

eventsApp.controller('EditEventController',
    function EditEventContoller($scope, eventData) {
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                eventData.save(event)
                .$promise
                .then(function() {console.log('success', response)})
                .catch(function(response) {console.log('failure'), response});
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    }
);