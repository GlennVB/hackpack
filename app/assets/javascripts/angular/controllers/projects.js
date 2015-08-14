angular.module('app.projects', ['ngRoute'])

    .controller('projectsController', ['$scope', 'projectsService', function ($scope, projectsService) {
        $scope.projects = [];
        $scope.menuProjects = [];
        $scope.parentProject = undefined;
        $scope.all_projects = [];

        $scope.refreshProjects = function () {
            projectsService.getProjects().success(function (data) {
                $scope.projects = data;
                $scope.menuProjects = $scope.projects;
                $scope.all_projects = angular.copy($scope.projects);
                angular.forEach($scope.all_projects, function (project) {
                    $scope.childrenOfProject(project, $scope.all_projects);
                    //$scope.all_projects.concat(c);
                });
                console.log($scope.all_projects);
            });
        };

        $scope.childrenOfProject = function (project, all) {
            var children = [];
            if (project.children.length > 0) {
                console.log(all);
                console.log(project.children);
                angular.forEach(project.children, function (child) {
                    all.push(child);
                    $scope.childrenOfProject(child, all);
                });
            } else {
                children = [];
            }

            return children;
        };

        $scope.refreshProjects();

        $scope.loadProject = function (project) {
            $scope.currentProject = project;
            $scope.parentProject = $scope.findProjectById($scope.currentProject.parent_id);
            if ($scope.parentProject != undefined) {
                $scope.menuProjects = $scope.parentProject.children;
            } else {
                $scope.menuProjects = $scope.projects;
            }
        };


        $scope.findProjectById = function (project_id) {
            selectedProject = undefined;
            angular.forEach($scope.all_projects, function (project) {
                if (project.id == project_id) {
                    selectedProject = project;
                }
            });
            return selectedProject;
        }
    }]);