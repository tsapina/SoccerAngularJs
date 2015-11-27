/* 
HomeController

==$scope.seasons
	-> popis sezona za ispis u home.html kod odabira sezone
	-> Ispis <select  ng-model="getseason" class="form-control" ng-options="season  as 'Season '+ season + '/' + seasonaddone(season)  for season in seasons"></select>

==$scope.getseason
	-> postavljam pocetnu vrijednost na ng-model="getseason" da bi izbjegao prazan prvi option u selectu

==$scope.seasonaddone
	->	kod ispisa odabira sezone pr. 2013/2014 , 2013 uzima iz arraya seasons a 2014 iz funkcije seasonaddone
	->  uvecava dobicenu vrijednost za 1 i vraca novu

==$scope.$watch('getseason')
	-> gleda svaku promjenu vrijednosti ng-model, ng-model se mjenja promjenom option-a
	-> promjenom updejta podatke koje saljem u view

==$scope.leagueKey(url)
	-> funkcija vraća key iz url-a
	-> primjerurla/teams/321 vratit će samo 321

 */
soccerApp.controller('homeController', ['$scope','apiDataService','getSeasonService',

function($scope, apiDataService, getSeasonService){

	$scope.seasons = [2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005];
	
	$scope.getseason = getSeasonService.season();

	
	$scope.seasonaddone = function(season){
		return ++season;
	}

	$scope.leagueKey = function(url){
		var helper = url.match(/[0-9]+/g);
		return helper[0];
	}
	
	$scope.$watch('getseason',function(){

		// u slucaju da odemo sa pocetne da pamti zadnju odabranu sezonu
		// da toga nema stavio ng-model na 2014
		getSeasonService.updateseason($scope.getseason);

		//url api-a,koji se mjenja ovisno o odabranoj sezoni
		var url = 'http://api.football-data.org/alpha/soccerseasons/?season=' + $scope.getseason;
		
		//servis za dobavljanje podataka, podatke proslijedujem u home.html
		apiDataService.GetData(url).then( function( data) { 
			$scope.allleagues =  data;
			console.log($scope.allleagues);
			// array liga petica
			var lige = ["BL1", "FL1", "PD", "SA", "PL"];
			// varijabla koja sadrži broj elemenata arraya
			var arrLength = $scope.allleagues.length;
			
			//u ovaj array punimo samo podatke iz liga petica
			$scope.leagues = []; 
			var brojac = 0;
			
			//Filtriranje podataka
			for (var i = 0; i < arrLength; i++) 
			{
				if(lige.indexOf($scope.allleagues[i].league) != -1)
				{
					console.log($scope.allleagues[i].league);
					$scope.leagues[brojac] = $scope.allleagues[i];
					brojac++;
				}
			}
			console.log($scope.leagues);
		});
	});



}])