angular.module('app.services', ['app-constants'])

.factory('BlankFactory', [function(){

}])
.factory('CloudSight', ['$http','cloudSightApiKey', function($http,cloudSightApiKey){
    
    var baseurl = 'https://api.cloudsightapi.com/image_requests';
    var baseHeader = {
         'Authorization': 'CloudSight '+ cloudSightApiKey
     };
    return {
      request: function(message){
          message.image_request.locale = 'en-US';
          return $http(
              {
                  headers: baseHeader,
                  url: baseurl,
                  method: "POST",
                  data: message
              }
          );
      },
      getImageInfo: function(message){
          return $http(
              {
                  headers: baseHeader,
                  url: baseurl+'/'+message.token,
                  method: "GET"
              }
          );
      }
      };

}])
.service('BlankService', [function(){

}]);
