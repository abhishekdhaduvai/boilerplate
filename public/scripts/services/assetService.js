(function(){

    'use strict';

    angular.module('predixApp')
           .service('assetService', assetService);

  	assetService.inject = ['$http']

    function assetService($http){
        //TODO: Add your functionality
        console.log('In asset Service');
    }

})();