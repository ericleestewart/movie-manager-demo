<!DOCTYPE html>
<html lang="en" ng-app="MovieManager">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Movie Manager Demo</title>

    <!-- Bootstrap -->
    <link href="/modules/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Page Styles -->
    <link href="/css/main.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/home#/">Movie Manager</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="/">Splash</a></li>
            <li><a href="/home#/">Movie List</a></li>
          </ul>
        </div>

      </div>
    </nav>

    <!-- Angular view insertion point. -->
    <div ng-view></div>

    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <p class="text-center">
              <small>&copy; 2016 Eric Lee Stewart</small><br>
              <small>A work product example for SANS Institute.</small>
            </p>
          </div>
        </div>
      </div>  
    </footer>
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="/modules/bootstrap/js/bootstrap.min.js"></script>
    <!-- bootstrap-notify 3.1.3 -->
    <script src="/modules/bootstrap-notify/bootstrap-notify.min.js"></script>
    <!-- angular 1.5.9 -->
    <script src="/modules/angular/angular.min.js"></script>
    <!-- angular-route 1.5.9 -->
    <script src="/modules/angular-route/angular-route.min.js"></script>
    <!-- angular-messages 1.5.9 -->
    <script src="/modules/angular-messages/angular-messages.min.js"></script>
    <!-- movie-manager - application -->
    <script src="/modules/movie-manager/app.js"></script>
    <!-- movie-manager - routes -->
    <script src="/modules/movie-manager/routes.js"></script>
    <!-- movie-manager - controllers -->
    <script src="/modules/movie-manager/controllers/movie-create.js"></script>
    <script src="/modules/movie-manager/controllers/movie-list.js"></script>
    <script src="/modules/movie-manager/controllers/movie-update.js"></script>
    <!-- movie-manager - services -->
    <script src="/modules/movie-manager/services/notifications.js"></script>

  </body>
</html>