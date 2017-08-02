var app = angular.module("myApp", ['ui.router', 'ui.router.metatags'])

function runBlock($rootScope, MetaTags) {
	$rootScope.MetaTags = MetaTags;
}

function configure(UIRouterMetatagsProvider) {
  UIRouterMetatagsProvider
    .setTitlePrefix('')
    .setTitleSuffix('')
    .setDefaultTitle('Colony West')
    .setDefaultDescription('Getting the right coverages is about more than avoiding risk, it’s about building a strong and resilient business.')
    .setDefaultKeywords('Colony West Insurance')
    .setStaticProperties({})
    .setOGURL(true);
}

app.run(['$rootScope', 'MetaTags', runBlock])

app.config(['UIRouterMetatagsProvider', configure])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./src/views/home.html",
      controller: "homeController",
      metaTags: {
        title: "Colony West",
        description: "Getting the."
      }
    })
})
