// Modal Service for all the popups
app.factory('modalService', ['$uibModal', function($uibModal){
  	return {
      openMenuModal: function(templateUrl,title, fullpic, description, link, download, tech) {
        var modalObj = $uibModal.open({
          templateUrl: templateUrl,
          backdrop: 'static',
          keyboard: true,
          size: 'lg',
          windowClass: 'modal-window',
          controller: function($scope, $modalInstance){
            $scope.title = title;
            $scope.fullpic = fullpic;
            $scope.description = description;
            $scope.link = link;
            $scope.download = download;
            $scope.tech = tech;

            $scope.ok = function(){
              //Process Close Button Click
              $modalInstance.close();
            }
            $scope.cancel = function(){
              $modalInstance.dismiss('cancel');
            }

            // go to next selection on click
         /*   $scope.Next = function(){
              $scope.theArray = $scope.Array;
              $scope.Items = $scope.Array[++$scope.index];
              if($scope.Items === undefined){
                return;
              }else{
               $scope.title = $scope.Items.name;
                $scope.description = $scope.Items.description;
                $scope.thumb = $scope.Items.image;
              }
            };*/

            // go to Previous selection on click
          /*  $scope.Prev = function(){
              $scope.theArray = $scope.Array;
              $scope.Items = $scope.Array[--$scope.index];
              if($scope.Items === undefined){
                return;
              }else{
               $scope.title = $scope.Items.name;
                $scope.description = $scope.Items.description;
                $scope.thumb = $scope.Items.image;
              }
            };*/

          },
          keyboard: true
        });
      }
    };

  }]);
