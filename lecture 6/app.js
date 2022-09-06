(function (){
'use strict';

angular.module('nameCal',[])

.controller('nameCalCont',function($scope){
 $scope.name =""; 
 $scope.total= 0;

 $scope.displayNumeric= function(){
    var tot=calculatestring($scope.name);
    $scope.total=tot;
 }


function calculatestring(string){
var total=0;
for(var i=0;i<string.length;i++){
    total+=string.charCodeAt(i);
}
return total;
}

}); 

})();