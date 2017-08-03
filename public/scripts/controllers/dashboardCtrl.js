(function(){

    'use strict';

    angular.module('predixApp')
           .controller('dashboardCtrl', dashboardCtrl);

    dashboardCtrl.inject = ['assetService']

    function dashboardCtrl(assetService){
        //TODO: Add your functionality
        console.log('In dashboard Ctrl');
    }

})();