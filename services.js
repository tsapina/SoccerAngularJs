//SERVICES
soccerApp.service('apiDataService', function($http){

	this.GetData = function(url)
	{
		var req = {
		 method: 'GET',
		 url: url,
		 headers: { 'X-Auth-Token': '6c63d6d88ff24b0295ff00cc925c3685' },
		}

		var request =  $http(req);
		return (request.then(handleSuccess, handleError));
	}

    function handleSuccess( response ) {

        return( response.data );

    }

    function handleError( response ) {
        var error;
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) {

            return( error = "The resource you are looking for does not exist!" );

        }
        return( error = "The resource you are looking for does not exist" );

    }
});


soccerApp.service('getSeasonService', function($http){

    var season = 2015;

    this.season = function(){
        return season;
    }

    this.updateseason = function(a){
        season = a;
    }
    
    this.getSeason = function(a){
        a = typeof a !== 'undefined' ? a : 2014;
        return a;
    }
    
});


