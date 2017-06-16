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

                //Basic form validation
                if(!vm.user_name) {
                    alert("You must enter a name");
                    return;
                  }

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