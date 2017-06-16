var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});

elixir(function(mix) {
    mix.scripts([
    	'./public/bower_components/jquery/dist/jquery.js',
    	'./public/bower_components/angular/angular.js',
    	'./public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    	'./public/bower_components/angular-resource/angular-resource.js',
    	'./public/scripts/app.js',
        './public/scripts/controllers/NameEntry.js',
        './public/scripts/services/name.js',
    ]);
});
