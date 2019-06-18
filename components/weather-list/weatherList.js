function WeatherList(EventService) {
    const ctrl = this;
    let id = '4994358';
    

EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData = response;

});



}


angular.module('WeatherEventApp')
  .component('weatherList', {
    template: `
    <section id="weather-list">
    <div class="weather-container">

                    <div class = "temp-info">
                      <h5><span class="data">{{$ctrl.weatherData.main.temp | number:0}}</span>℉</h5> 
                    </div>

                    <div class = "description">
                      <h5>Currently <span class="data">{{$ctrl.weatherData.weather["0"].description}}</span></h5>
                      <br>
                      <img ng-src = "http://openweathermap.org/img/w/{{$ctrl.weatherData.weather[0].icon}}.png" class = "icon">
                    </div>

                    <div class = "Grand-Rapids">
                      <h6>Grand Rapids <br> Michigan </h6>
                    </div>
                

    </div>
    </section>





`, // or use templateUrl
    controller: WeatherList,


  });






