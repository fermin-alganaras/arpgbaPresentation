(function(){
	'use strict';

	angular
	.module('ARPGBA', [
		'ui.router',
		'ARPGBA.main'
		])

	.config(function config($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('main', {
			url: '',
			views: {
				'navBar': {
					templateUrl: 'app/common/navBar/templates/navBar-tmpl.html', 
					controller: 'navBarController as navBarController'
				},
				'content': {
					templateUrl: 'app/main/templates/mainContent-tmpl.html',
					controller: 'mainController as mainController'
				}
			}
		})

		$urlRouterProvider.otherwise('')
	})
})();