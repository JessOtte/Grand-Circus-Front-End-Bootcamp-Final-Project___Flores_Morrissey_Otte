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

    <ul class="nav-items">
      <!-- route to favorites -->
      <li class="nav-item"><a href="#!/event-details"><span style="color: rgb(240, 45, 38)">❤</span> Favorites</a></li>
    </ul>
    <span class = "forecast">Extended Forecast: </span>
    <div class = "forecast" ng-repeat="item in $ctrl.weatherData.list">{{item.main.temp | number:0}} ℉ </div>
  

    </div>





`, // or use templateUrl
    controller: WeatherForecast,


  });






