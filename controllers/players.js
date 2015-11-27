soccerApp.controller('playersController', ['$scope', '$routeParams', 'apiDataService',

function($scope, $routeParams, apiDataService){

	//uzimam trenutni leaguekey
	var teamID = $routeParams.key;
	
	//url koji proslijedujem servisu 
	var url = 'http://api.football-data.org/alpha/teams/' + teamID + '/players';

	//dobivam objekt sa timovima ovisno o leagueKey
	apiDataService.GetData(url).then( function( data) { console.log($scope.Players = data.players) });
	
}])