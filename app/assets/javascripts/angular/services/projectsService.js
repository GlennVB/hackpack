angular.module('app.projectsService', [])
    .service('projectsService', ['$http', function ($http) {
        var urlBase = '/projects';

        this.getProjects = function () {
            return $http.get(urlBase + ".json");
        };
    }]);