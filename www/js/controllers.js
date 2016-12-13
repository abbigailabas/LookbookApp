angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', '$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseObject) {
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

}]) // home end


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

}]) // details end




.controller('mostrecentCtrl', ['$scope', '$stateParams','$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseObject) {
var ref = firebase.database().ref().child("mostrecent");
    // download the data into a local object
    var aux = $firebaseObject(ref);
    console.log(aux);
    $scope.mostrecents = aux;
	//^^ step1 you had it like $scope.mostrecent but in your firebase firebase.database().ref().child("mostrecent");
	//returns an array, so i just added the 's' plural so it represents like an array or a collection of
	//mostresent items that step 1
	//step2 in mostresent.html

	// putting a console.log here won't work, see below
    console.log($scope.data);

    // ! scope is how you pass info to the template
}]) //mostrecent end



.controller('uploadpicCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}]) // uploadpic end



.controller('postCtrl', ['$scope', '$stateParams','$firebaseObject', 'CloudSight',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseObject, CloudSight) {
//$scope.ss  = "fff";
$scope.g  =''; //variable used to pass the image response from Cloudsight to where ever we want in LookBook
var ref = firebase.database().ref().child("users");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  console.log(syncObject)
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
  // this handles the response when you upload an image
  // cheking status for 200
  // when the api responds with info this is the code that runs
	var sendImageResponse = function(response){
		  // Response from server
		  console.log('response', response);
		  if(response.status == 200){
				// if the status is not completed it runs searchImageInfo down below
			  if(response.data.status == "not completed"){
				  var token = response.data.token;
				  searchImageInfo(token);
			  }else{
				  // data is already in the obj
			  }

		  }else {
			  //show error msg
		  }
	  };
		// if the status is not completed it runs this
	  var searchImageInfo = function(token){
		var t = token;
		setTimeout(function(){
			CloudSight.getImageInfo({token: t}).then(function(response){
				console.log('getImageInfo',response);
				if(response.data.status== "not completed"){
					searchImageInfo(t);
				}else{
					// this is where the response is going -> g variable in post.html
					$scope.g+= response.data.name+', ';
				}
			});
			// waiting 30 seconds because it needs time to read the image
		}, 30000);

}	//note: we cant check all five at the same time. its too many. so just checking the top 3 items
	//note: it doesnt matter what order you code the images in, it will check whichever one it wants first
	// cheking shoes
	CloudSight.request({image_request:{remote_image_url: 'https://firebasestorage.googleapis.com/v0/b/lookbook-eaea7.appspot.com/o/shoes.jpg?alt=media&token=549699c7-8b36-43e9-8e3b-3d1eb124c997'}}).then(sendImageResponse);
	// cheking pants
	CloudSight.request({image_request:{remote_image_url: 'https://firebasestorage.googleapis.com/v0/b/lookbook-eaea7.appspot.com/o/pants.jpg?alt=media&token=454f6a27-7881-4aaf-af10-e5cd646c2052'}}).then(sendImageResponse);
	// cheking jacket
	CloudSight.request({image_request:{remote_image_url: 'https://firebasestorage.googleapis.com/v0/b/lookbook-eaea7.appspot.com/o/jacket.jpg?alt=media&token=e9688b66-bd9a-4984-8415-cc2ea5eb9052'}}).then(sendImageResponse);



}]) // post end


.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]) //menu end
