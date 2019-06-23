function WeatherForecast(EventService) {
    const ctrl = this;
    let id = '4994358';
  
console.log(true);
 EventService.fetchForecast(id)
.then((response) => {
    ctrl.weatherData = response;

   console.log(ctrl.weatherData);

}


)};

//   <div ng-repeat = "item in $ctrl.weatherData.list">{{item.weather['0']}}</div>

angular.module('WeatherEventApp')
  .component('weatherForecast', {
    template: `
    <div class="nav-container">

    <div>
      <a id="show" class="logo" href="#!/weather-list">WeatherBrite GR</a>
    </div>

    <div  class="extended">
    <span class = "forecast"> Extended Forescast: </span>
    
   <div class = "forecast" ng-repeat="item in $ctrl.weatherData.list">
    <div>{{ (item.dt *  1000) | date:'shortTime'}}</div>
    <div>{{item.main.temp | number:0}} ℉</div>
   </div>
  </div>

    </div>





`, // or use templateUrl
    controller: WeatherForecast,


  });






