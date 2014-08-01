(function(angular, remark) {
   var app = angular.module('remarkrApp', []);

   app.controller('AppCtrl', function($scope, $http, $location) {
        
       function init() {
           var file = $location.search().file || 'slides.md';
            $http.get(file)
                .success(function(data) {
                    console.log(data);

                    remark.create({ source: data }); 
                });

        }

        init();

   });
})(angular, remark);
