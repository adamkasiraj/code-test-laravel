/* scripts/app.js */

(function() {

    'use strict';

    angular
        .module('nameTracker', [
            'ngResource',
            'ui.bootstrap'
        ]);

})();
/* scripts/controllers/NameEntry.js */

(function() {

    'use strict';

    angular
        .module('nameTracker')
        .controller('NameEntry', NameEntry);

        function NameEntry(name) {

            // name is our capture variable
            var vm = this;

            vm.nameentries = [];

            // Submits the name entry that will be called 
            // when we click the "Add Name" button
            vm.logNewName = function() {

                name.saveName({
                    "names":vm.user_name
                }).then(function(success) {
                    getNameEntries();
                    console.log(success);
                }, function(error) {
                    console.log(error);
                });

                getNameEntries();

                vm.user_name = "";

            }

            // Specify the name entry to be deleted and pass it to the deleteNameEntry method on the name service
            vm.deleteNameEntry = function(nameentry) {

                var id = nameentry.id;

                name.deleteName(id).then(function(success) {
                    getNameEntries();
                    console.log(success);
                }, function(error) {
                    console.log(error);
                });      

            }

            // Grab all the name entries saved in the database
            getNameEntries();

            // Fetches the name entries and puts the results
            // on the vm.nameentries array
            function getNameEntries() {
                name.getName().then(function(results) {
                    vm.nameentries = results;
                    //console.log(vm.nameentries);
                }, function(error) {
                    console.log(error);
                });
            }   
        }

})();
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
//# sourceMappingURL=all.js.map
