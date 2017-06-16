<!-- resources/views/index.php -->
<html>
    <head>
        <title>Name Tracker</title>
        <link rel="stylesheet" href="css/app.css">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
    </head>

<body ng-app="nameTracker" ng-controller="NameEntry as vm">
    <nav class="navbar navbar-default">
        <div class="container name-entry">

            <div class="name-entry-comment">                
                <form class="form-inline text-center">
                    <div class="input-group">
                        <input class="form-control" ng-model="vm.user_name" placeholder="Enter your Name">
                        </input>
                        <span id="buttonGroup" class="input-group-btn">
                            <button id="addButton" class="btn btn-primary" ng-click="vm.logNewName()">Add</button>
                        </span>
                    </div>
                </form>
            </div>    
        </div>
    </nav>

    <div class="container">
        <div class="col-sm-8 col-sm-offset-2">
            <div class="well nameentry" ng-repeat="name in vm.nameentries">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><i class="fa fa-user"></i> 
                        {{name.names}} </h4>           
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>    

    <!-- Application Dependencies -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://use.fontawesome.com/70f92f9159.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>

    <!-- Application Scripts -->
    <script type="text/javascript" src="scripts/app.js"></script>
    <script type="text/javascript" src="scripts/controllers/NameEntry.js"></script>
    <script type="text/javascript" src="scripts/services/name.js"></script>

</html>