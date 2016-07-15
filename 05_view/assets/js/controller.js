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

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

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

.controller('indexCtrl', function($scope, contactService){
    $scope.contacts = contactService.getAllContacts();
})

/*-----------------------------------
| Add Controller
------------------------------------*/

.controller('addCtrl', function($scope, contactService){

    $scope.contactFormSubmit = function(){
        console.log($scope.contact);
        contactService.registContact($scope.contact);
        $scope.contact = null;
    };
})

/*-----------------------------------
| Contact Controller
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams, contactService){

    console.log($routeParams.id);
    var contact = contactService.getContactByKey($routeParams.id);
    $scope.contact = contact;

})
