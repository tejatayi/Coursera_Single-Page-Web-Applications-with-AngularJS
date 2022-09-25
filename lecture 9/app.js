(
    function(){
        'use strict';

        angular.module('DI',[])
        .controller('DIController',DIController);


        function DIController($scope, $filter){
            $scope.name="Teja";
        }
    }




)
();