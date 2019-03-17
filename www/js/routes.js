angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.eleccionesLaRioja2019', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eleccionesLaRioja2019.html',
        controller: 'eleccionesLaRioja2019Ctrl'
      }
    }
  })

  .state('menu.DNdeVoto', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/DNdeVoto.html',
        controller: 'DNdeVotoCtrl'
      }
    }
  })

  .state('menu.acercaDeINNOVALaRioja', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeINNOVALaRioja.html',
        controller: 'acercaDeINNOVALaRiojaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.QuElegimos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuElegimos.html',
        controller: 'QuElegimosCtrl'
      }
    }
  })

  .state('menu.QuDeboSaberAntesDeVotar', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuDeboSaberAntesDeVotar.html',
        controller: 'QuDeboSaberAntesDeVotarCtrl'
      }
    }
  })

  .state('menu.QuDeboHacerElDADeLaElecciN', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuDeboHacerElDADeLaElecciN.html',
        controller: 'QuDeboHacerElDADeLaElecciNCtrl'
      }
    }
  })

  .state('menu.datosEInfoDeInterS', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosEInfoDeInterS.html',
        controller: 'datosEInfoDeInterSCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});