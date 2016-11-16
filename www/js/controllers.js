angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseObject) {
	var ref = firebase.database().ref().child("posts");
  	// download the data into a local object
  	var aux = $firebaseObject(ref);
  	console.log(aux);
  	$scope.posts = aux;
  	// putting a console.log here won't work, see below
  	console.log($scope.data);
    
    // ! scope is how you pass info to the template
     
    //to show the filter options
    $scope.filter = "display-none";
    $scope.showFilter = function () {
        if ($scope.filter == "display-none") {
            $scope.filter = "";
        } else {
            $scope.filter = "display-none";
        }
    }

    //to show the search bar
    $scope.search = "display-none";
    $scope.showSearch = function () {
        if ($scope.search == "display-none") {
            $scope.search = "";
        } else {
            $scope.search = "display-none";
        }
    }



}]) 
// home end



   
.controller('detailsCtrl', ['$scope', '$stateParams','$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseObject) {
	var ref = firebase.database().ref().child("posts").child($stateParams.postid);
  	// download the data into a local object
  	var aux = $firebaseObject(ref);
  	console.log(aux);
  	$scope.data = aux;
  	// putting a console.log here won't work, see below
  	console.log($scope.data);

}])
// details end


.controller('mOSTRECENTCtrl', ['$scope', '$stateParams','$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseObject) {
var ref = firebase.database().ref().child("mostrecent");
    // download the data into a local object
    var aux = $firebaseObject(ref);
    console.log(aux);
    $scope.mOSTRECENT = aux;
    // putting a console.log here won't work, see below
    console.log($scope.data);
    
    // ! scope is how you pass info to the template
}])
//mostrecent end


.controller('uPLOADPICCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
// uploadpic end

   
.controller('pOSTCtrl', ['$scope', '$stateParams','$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseObject) {
//$scope.ss  = "fff";
var ref = firebase.database().ref().child("users");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  console.log(syncObject)
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
}])
 