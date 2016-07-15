(function(){

'use strict';

/**
 * @ngdoc service
 * @name contactApp.index
 * @description
 * # index
 * Service in the contactApp.
 */
angular.module('contactApp')
  .service('indexService', function () {

    this.contactsFromServer ={
      contacts : [
        {name:'1ss1', phone:'ss',email:'1@'},
        {name:'2ww2',phone:'dd',email:'2@'}
      ]
    };

    // 전체 연락처 보기
    this.getAllContacts = function () {
      console.log('service invoked');
      console.log(this.contactsFromServer.contacts);
      return this.contactsFromServer.contacts;
    };

    //연락처 상세보기
    this.getContactByKey = function (id) {
      return this.contactsFromServer.contacts[id];
    };

    // 연락처 등록
    this.registContact = function (contact) {
      console.log(contact);

    };

    this.removeContactByKey=function (id) {

    };
  });

})();
