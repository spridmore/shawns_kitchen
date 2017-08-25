var app = angular.module("myApp", ['ui.router', 'ui.router.metatags', 'LocalStorageModule'])

function runBlock($rootScope, MetaTags) {
	$rootScope.MetaTags = MetaTags;
}

function configure(UIRouterMetatagsProvider) {
  UIRouterMetatagsProvider
    .setTitlePrefix('')
    .setTitleSuffix('')
    .setDefaultTitle('Default Title here')
    .setDefaultDescription('Default description here')
    .setDefaultKeywords('Default keywords here')
    .setStaticProperties({})
    .setOGURL(true);
}

app.run(['$rootScope', 'MetaTags', runBlock])

app.config(['UIRouterMetatagsProvider', configure])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
		.state('app', {
			abstract: true,
			url: '',
			templateUrl: '../src/views/app-container.html',
			controller: 'appController'
		})
    .state("app.home", {
      url: "/",
      templateUrl: "../src/views/home.html",
      controller: "loginController",
			// resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
    .state("app.profile", {
      url: "/profile",
      templateUrl: "../src/views/profile.html",
      controller: "loginController",
			resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
    .state("app.login", {
      url: "/login",
      templateUrl: "../src/views/login.html",
      controller: "loginController",
			// resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
    .state("app.recipes", {
      url: "/recipes",
      templateUrl: "../src/views/recipes.html",
      controller: "recipesController",
			// resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
    .state("app.userRecipes", {
      url: "/user/recipes",
      templateUrl: "../src/views/recipes-user.html",
      controller: "recipesController",
			// resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
    .state("app.shoppingLists", {
      url: "/shoppingLists",
      templateUrl: "../src/views/shoppingLists.html",
      controller: "shoppingListController",
			// resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
    .state("app.shoppingList", {
      url: "/shoppingLists/:id",
      templateUrl: "../src/views/shoppingList.html",
      controller: "shoppingListController",
			// resolve: { authenticate: authenticate },
      metaTags: {
        title: "",
        description: ""
      }
    })
})

// Configure every outgoing request with new headers found in authInterceptorService
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptorService');
});

// Load user data into the authService when the app boots up.
app.run(['authService', function (authService) {
    authService.getAuthData();
}]);

function authenticate($q, authService, $state, $timeout) {
	console.log(authService.authentication.isAuth);
  if (authService.authentication.isAuth) {
    // Resolve the promise successfully
    return $q.when()
  }
	else {
    $timeout(function() {
      // This code runs after the authentication promise has been rejected.
      // Go to the log-in page
      $state.go('app.login')
    })

    // Reject the authentication promise to prevent the state from loading
    return $q.reject()
  }
}
