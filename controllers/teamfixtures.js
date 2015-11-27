soccerApp.controller('teamfixturesController', ['$scope', '$routeParams', 'apiDataService',

function($scope, $routeParams, apiDataService){

	//uzimam trenutni leaguekey
	var teamID = $routeParams.key;

	console.log(teamID);
	
	//url koji proslijedujem servisu 
	var url = 'http://api.football-data.org/alpha/teams/' + teamID + '/fixtures';

	//dobivam objekt sa timovima ovisno o leagueKey
	apiDataService.GetData(url).then( function( data) { console.log( $scope.fixtures = data.fixtures) });
	
}])
