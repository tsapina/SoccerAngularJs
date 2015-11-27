soccerApp.controller('leaguetableController', ['$scope', '$routeParams', 'apiDataService',

function($scope, $routeParams, apiDataService){

	//uzimam trenutni leaguekey
	var leagueKey = $routeParams.key;

	console.log("ovo je " + leagueKey);
	//url koji proslijedujem servisu 
	var url = 'http://api.football-data.org/alpha/soccerseasons/' + leagueKey + '/leagueTable'

	//dobivam objekt sa timovima ovisno o leagueKey
	apiDataService.GetData(url).then( function( data) { 
		if(typeof data == "string"){
			$scope.error = data;
		}
		console.log($scope.LeagueTable = data.standing) 
	});

	
}])