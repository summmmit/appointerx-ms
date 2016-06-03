'use strict';

class NavbarController {
  constructor(Auth, $state, $rootScope) {
    var vm = this;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    vm.userName = {};
    this.getCurrentUser(function (user) {
      vm.userName = user.first_name + " " + user.last_name;  
    });
    
    $rootScope.$state = $state;
  }
}

angular.module('eventx')
  .controller('NavbarController', NavbarController);
