/* scripts/services/name.js */

(function() {

    'use strict';

    angular
        .module('nameTracker')
        .factory('name', name);

        function name($resource) {

            // ngResource call to the API with id as a paramaterized URL
            // and setup for the update method
            var Name = $resource('api/name/', {}, {
                update: {
                    method: 'PUT'
                }
            });

            function getName() {
                // $promise.then allows us to intercept the results
                // which we will use later
                return Name.query().$promise.then(function(results) {
                    return results;
                }, function(error) { // Check for errors
                    console.log(error);
                });
            }

            // Grab data passed from the view and send
            // a POST request to the API to save the data
            function saveName(data) {

                return Name.save(data).$promise.then(function(success) {
                    console.log(success);
                }, function(error) {
                    console.log(error);
                });
            }

            function deleteName(id) {
              return Name.delete({id:id}).$promise.then(function(success) {
                console.log(success);
              }, function(error) {
                console.log(error);
              });
            }

            return {
                getName: getName,
                saveName: saveName,
                deleteName: deleteName
            }

            return {};

        }
})();