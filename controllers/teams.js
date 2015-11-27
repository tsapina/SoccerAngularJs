/* 
teamsController

==var leagueKey 
	-> uzimam trenutni leaguekey
	-> pr. link url/teams/351 , vrijednost leagueKey je 351
	-> trebat cemi za url
==var url 
	-> url koji proslijedujem servisu 

==apiDataService
	->servis koji vraća podatke, prima kao parametar gornji url 
	->dobivam objekt sa timovima ovisno o url/leagueKey

==$scope.get_team_id
	->funkcija prima url, tipa http://api.football-data.org/alpha/teams/5" , vraća samo brojeve
	->u ovom slucaju 5, pomocu funkcije match, funkcija math vraća array zato je helper[0]
 */

soccerApp.controller('teamsController', ['$scope', '$routeParams', 'apiDataService',

function($scope, $routeParams, apiDataService){

	var leagueKey = $routeParams.key;

	var url = 'http://api.football-data.org/alpha/soccerseasons/' + leagueKey + '/teams'

	apiDataService.GetData(url).then( function( data) { 

		console.log($scope.teams =  data.teams)
		$scope.max = 0;

		var arrLength = $scope.teams.length;
		console.log(arrLength);
		for (var i = 0; i < arrLength; i++) {
		  // Find Maximum X Axis Value
		  if($scope.teams[i].squadMarketValue != null)
		  {
		  	var currency = Number($scope.teams[i].squadMarketValue.replace(/[^0-9\.]+/g,""));
			  console.log(currency);
			  if (currency > $scope.max)
			  $scope.max = currency;
		  }
		  
		}
		console.log($scope.max);

	} ) ;

	$scope.get_team_id = function( id )
	{
		var helper = id.match(/[0-9]+/g);
		return helper[0];
	}

	$scope.currency_to_numb = function( currency )
	{
		return Number(currency.replace(/[^0-9\.]+/g,""));
	}



	$scope.width = 1200;
	$scope.height = 600;
	
	$scope.yAxis = "Sales";
	$scope.xAxis = "2014"



	
}])
