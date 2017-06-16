<!-- resources/views/index.php -->
<html>
    <head>
        <title>Name Tracker</title>
        <link rel="stylesheet" href="css/app.css">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
    </head>

<body ng-app="nameTracker" ng-controller="NameEntry as vm">
    <nav class="navbar navbar-default">
        <div class="container name-entry" style="padding:20px">

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

    <!-- Consolidated JS -->
    <script src="js/all.js"></script>

    <!-- Font Awesome -->
    <script src="https://use.fontawesome.com/70f92f9159.js"></script>
    

</html>