(
    function(){
        'use strict';

        angular.module('ajModule',[])

        .controller('controller1',controller1);

        controller1.$inject=['$scope'];
        
        function  controller1($scope){
            
            $scope.str;

            $scope.onclick=function(){
                
                var c=0;
                $scope.msg;
                
                if($scope.str==undefined)
                {
                    $scope.msg="Please enter data first";
                }
                
                
                else{
                for(let i=0 ; i<$scope.str.length;i++)
                {
                
                    if($scope.str[i]=="," && $scope.str[i+1]!= undefined)
                    c++;
                    
                }
               c++
                
               
                if(c>2)
                {
                    $scope.msg="Too much!";
                }
                else if (c<=2 && c>=0)
                {
                    $scope.msg="Enjoy!";
                }
            }
                   
    
            };  



           

        }
    }
)();