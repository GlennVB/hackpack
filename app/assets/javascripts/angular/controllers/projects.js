angular.module('app.projects', ['ngRoute'])

    .controller('projectsController', ['$scope', 'projectsService', function ($scope, projectsService) {
        $scope.projects = [];

        $scope.refreshProjects = function () {
            projectsService.getProjects().success(function (data) {
                $scope.projects = data;
            });
        };

        $scope.refreshProjects();

        $scope.loadProject = function (project) {
            $scope.currentProject = project;
        }
    }]);