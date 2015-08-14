// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require plugins/bootstrap.min

//= require plugins/angular/angular.min.js
// XEDITABLE
//= require plugins/xeditable/xeditable.min
//= require plugins/angular/ui-bootstrap.min
// ANGULAR STUFF
//= require plugins/angular/angular-route.min.js
//= require_self
//= require_tree ./angular/services/
//= require_tree ./angular/controllers/

angular.module('app', [
    'ngRoute',
    'app.projects',
    'app.projectsService',
    'xeditable',
    'ui.bootstrap'
])
    .run(['editableOptions', 'editableThemes', function (editableOptions, editableThemes) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        editableThemes.bs3.inputClass = 'input-sm';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-check fa-fw"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-close fa-fw"></i></button>';
    }]);