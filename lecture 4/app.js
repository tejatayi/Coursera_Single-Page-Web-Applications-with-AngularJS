//implimentation of own login 
(function (){           //IIFE immediately invoked function expression 
'use strict';

angular.module('myFirstApp'/**name of appliction*/,/**list of dependencies*/[])

.controller("myFisrtcontroller",function($scope){
$scope.name="Teja";
$scope.hello=function(){
return "Hello coursera"
};

});

})();
