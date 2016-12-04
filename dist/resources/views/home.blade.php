<!DOCTYPE html>
<html lang="en">
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
          <a class="navbar-brand" href="/">Movie Manager</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="/">Splash</a></li>
            <li><a href="/home">Home</a></li>
          </ul>
        </div>

      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="well">
            <h3>Collection</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ultricies ligula. Nullam lacus justo, pretium quis mollis egestas, posuere at nunc. In ac lacinia purus, vitae tempus enim. Maecenas dui ante, congue ac mauris vel, scelerisque aliquam massa. Etiam consectetur lorem a varius euismod.</p>
            <p><a href="#" class="btn btn-default">Add Movie</a></p>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Year</th>
                <th>Length</th>
                <th>Format</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                  <a href="#" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
                </td>
                <td>Top Gun</td>
                <td>1986</td>
                <td>1hr 50min</td>
                <td>VHS</td>
                <td>5 Stars</td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                  <a href="#" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
                </td>
                <td>Warcraft</td>
                <td>2016</td>
                <td>2hr 03min</td>
                <td>Streaming</td>
                <td>4 Stars</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

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
  </body>
</html>