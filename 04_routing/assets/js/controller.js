angular.module('contactApp', ['ngRoute'])

/*-----------------------------------
| Routes
------------------------------------*/

.config(function($routeProvider){

    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('/edit-contact/:id', {
        controller: 'editCtrl',
        templateUrl: 'assets/partials/edit.html'
    })

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

    // This is optional
    //$locationProvider.html5Mode(true);

})

/*-----------------------------------
| Truncate Filter
------------------------------------*/

.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

/*-----------------------------------
| Index Controller
------------------------------------*/

.controller('indexCtrl', function($scope){
    console.log('in the index controller')
})

/*-----------------------------------
| Add Controller
------------------------------------*/

.controller('addCtrl', function($scope){

})

.controller('editCtrl', function($scope, $routeParams){

})

/*-----------------------------------
| Contact Controller
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams){

});
