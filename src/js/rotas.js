angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', '$httpProvider',
      function ($stateProvider,   $urlRouterProvider, $httpProvider) {
  var layout = "/src/views/template.html";

            $urlRouterProvider
              .otherwise('/home/index');
          
          $stateProvider



    .state('home', {
        abstract: true,
        url: ('/home'),
        templateUrl: layout,
        controller: 'homeCtrl'
        
    })

  .state("home.index", {
                url: "/index",
                templateUrl: "/src/views/home/index.html",
             //   controller: 'homeCtrl'
            })

  .state("home.galeria", {
              url: "/galeria",
              templateUrl: "/src/views/home/galeria.html",
          })

  .state("home.contato", {
              url: "/contato",
              templateUrl: "/src/views/home/contato.html",
          })


  .state('pages', {
        abstract: true,
        url: ('/pages'),
        templateUrl: layout
    })

  .state("pages.2", {
                url: "/2",
                templateUrl: "/src/views/pages/2.html",

  
            })
  .state("pages.1", {
                url: "/1",
                templateUrl: "/src/views/pages/1.html",

            })



}]);


angular.module('app')
  .run(Run);

  Run.$inject = ['$rootScope', '$state', '$timeout', '$injector'];

  function Run($rootScope, $state, $timeout, $injector){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, $scope, $state, $timeout){




  $(document).ready(function() {
        $('.parallax').parallax();

  $(document).scroll(function() {

     if (jQuery(this).scrollTop() > 50) {
     $("nav").addClass("navbar-shrink");
    } else {
     $("nav").removeClass("navbar-shrink");
    }


  });
  });

 


    });
  }