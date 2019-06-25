function WeatherForecast(EventService) {
    const ctrl = this;
    let id = '4994358';
  
console.log(true);
 EventService.fetchForecast(id)
.then((response) => {
    ctrl.weatherData = response;

   console.log(ctrl.weatherData);

}

)

EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData2 = response;
});

};




//   <div ng-repeat = "item in $ctrl.weatherData.list">{{item.weather['0']}}</div>
{/* <div><img ng-src = "http://openweathermap.org/img/w/{{$ctrl.weatherData.list[0].weather[0].icon}}.png" class = "icon"></img> */}

angular.module('WeatherEventApp')
  .component('weatherForecast', {
    template: `

    <div class="logo">
      <a href="#!/weather-list"><img id="logo" src="./images/weather-brite-gr-logo.png" alt="WeatherBrite GR Logo"></a>
    </div>


    <div  class="extended">
    <div class = "forecast-title"> Extended Forescast: </div>

<div class="forecast-result-container">
    <div class = "forecast" ng-repeat="item in $ctrl.weatherData.list">
    <div>{{ (item.dt *  1000) | date:'shortTime'}}</div>
    <div>{{item.main.temp | number:0}}°</div>
</div>

   </div>
  </div>






`, // or use templateUrl
    controller: WeatherForecast,


  });






