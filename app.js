angular.module('alertApp', ['oitozero.ngSweetAlert'])
  .controller('alertCtrl', ['SweetAlert', function (SweetAlert) {

    var vm = this;

    vm.alert = function () {
      SweetAlert.swal("I'm a alert");
    }

  }]);
