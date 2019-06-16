function WeatherForecast(EventService) {
    const ctrl = this;
    let id = '4994358';

 EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData = response;

   console.log(ctrl.weatherData);


}
)};


angular.module('WeatherEventApp')
  .component('weatherForecast', {
    template: `
    <nav class="nav-container">

    <div ng-repeat="item in $ctrl.weatherData.list">{{item.main.temp}}</div>

    </nav>





`, // or use templateUrl
    controller: WeatherForecast,


  });






