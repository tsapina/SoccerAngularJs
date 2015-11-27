//ROUTES
soccerApp.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl: 'pages/home.html',
		controller : 'homeController'
	})
	.when('/teams/:key', {
		templateUrl: 'pages/teams.html',
		controller : 'teamsController'
	})
	.when('/fixtures/:key', {
		templateUrl: 'pages/fixtures.html',
		controller : 'fixturesController'
	})
	.when('/leaguetable/:key', {
		templateUrl: 'pages/leaguetable.html',
		controller : 'leaguetableController'
	})
	.when('/players/:key', {
		templateUrl: 'pages/players.html',
		controller : 'playersController'
	})
	.when('/teamfixtures/:key', {
		templateUrl: 'pages/teamfixtures.html',
		controller : 'teamfixturesController'
	})
})