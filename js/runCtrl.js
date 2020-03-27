app.controller("runCtrl", function($scope) {
    $scope.firstName = "Anthony";
    $scope.lastName= "Williams";
    $scope.hours= '';
    $scope.minutes = '';
    $scope.seconds = '';
    $scope.distance = '';
    $scope.unit = "miles";
    $scope.pace_hours= '';
    $scope.pace_minutes = '';
    $scope.pace_seconds = '';
    $scope.pace_unit = "per mile";
    $scope.speed = '';
    $scope.speed_unit = "mph";
    $scope.double = function(value) { return value * 2; };
    $scope.calculateSpeed = function() {
      var time_hrs = $scope.hours + (1/60) * $scope.minutes + (1/(60*60)) * $scope.seconds;
      if ( ($scope.unit==="miles" && $scope.speed_unit==="mph") || ($scope.unit==="km" && $scope.speed_unit==="km/h") ){
        return ($scope.distance / time_hrs).toFixed(2);
      } else if ($scope.unit==="miles" && $scope.speed_unit==="km/h")  {
        return (($scope.distance * 1.609344) / time_hrs).toFixed(2);
      } else if ($scope.unit==="km" && $scope.speed_unit==="mph")  {
        return (($scope.distance * 0.621371) / time_hrs).toFixed(2);
      } else {
        return 0;
      }

    };
    $scope.calculatePace = function() {
      if ( ($scope.speed_unit==="mph" && $scope.pace_unit==="per mile") || ($scope.speed_unit==="km/h" && $scope.pace_unit==="per km") ){
        var pace_sec = 3600 / $scope.speed;
      } else if ( $scope.speed_unit==="mph" && $scope.pace_unit==="per km" ){
        var pace_sec = 3600 / ($scope.speed * 1.609344);
      } else if ( $scope.speed_unit==="km/h" && $scope.pace_unit==="per mile" ){
        var pace_sec = 3600 / ($scope.speed * 0.621371);
      } else {
        return 0;
      }
      $scope.pace_hours = Math.floor((pace_sec/3600) % 60);
      $scope.pace_minutes = Math.floor((pace_sec/60) % 60);
      $scope.pace_seconds = (pace_sec % 60).toFixed(2);
    };

    $scope.toggle_miles = false;
    $scope.toggle_km = true;
    $scope.toggle_per_mile = false;
    $scope.toggle_per_km = true;
    $scope.toggle_mph = false;
    $scope.toggle_kmh = true;

    $scope.clearScreen = function() {
      $scope.hours= '';
      $scope.minutes = '';
      $scope.seconds = '';
      $scope.distance = '';
      $scope.pace_hours= '';
      $scope.pace_minutes = '';
      $scope.pace_seconds = '';
      $scope.speed = '';
    }
});
