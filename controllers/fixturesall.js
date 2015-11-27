/* 
fixturesController
->za prikaz svih odigranih utakmica jedne lige

==var leagueKey 
	-> uzimam trenutni leaguekey
	-> pr. link url/teams/351 , vrijednost leagueKey je 351
	-> trebat cemi za url
==var url 
	-> url koji proslijedujem servisu 

==apiDataService
	->dobijem objekt sa svim podacima, trebam ispisat svako kolo u novu tablicu, to radim u for ppetlji

 */


soccerApp.controller('fixturesController', ['$scope', '$routeParams', 'apiDataService',

function($scope, $routeParams, apiDataService){

	//uzimam trenutni leaguekey
	var leagueKey = $routeParams.key;

	//url koji proslijedujem servisu 
	var url = 'http://api.football-data.org/alpha/soccerseasons/' + leagueKey + '/fixtures';
	

	//dobivam objekt sa timovima ovisno o leagueKey
	apiDataService.GetData(url).then( function( data) {  
		console.log(data);
		var firstmatchday = 1;
		$scope.fixtures1 = [[]];
		
		var counter1 = 0;
		var counter2 = 0;
		$scope.fixtures = data.fixtures;

		for(i=0; i<data.fixtures.length; i++)
		{	
			if(data.fixtures[i].matchday == firstmatchday)
			{
				$scope.fixtures1[counter1][counter2++] = data.fixtures[i];
			}
			else
			{	
				counter1++;
				$scope.fixtures1[counter1] = []; // provjerit zasto se ovo radi
				counter2 = 0;
				firstmatchday++;
				$scope.fixtures1[counter1][counter2++] = data.fixtures[i];
				//console.log(data.fixtures[i]);
			}
		}



		
		

	} ) ;
}])