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

    <div id="event-list-colored-box">
    </div>



    
    <div id="weather-list">
        
      <div class="weather-container">
      <h6 class="grand-rapids">Grand Rapids - Michigan </h6>

        <div class = "description">
          <h5 class="data">{{$ctrl.weatherData.main.temp | number:0}}℉</h5>

          <h5 class="data" id="weather-conditions">Currently {{$ctrl.weatherData.weather["0"].description}}</h5>  
          <div><img ng-src = "http://openweathermap.org/img/w/{{$ctrl.weatherData.weather[0].icon}}.png" class = "icon">
        </div>
        </div>










                    
        </div>
        <gr-events></gr-events>

    </div>
    <event-list></event-list>







`, // or use templateUrl
    controller: WeatherList,


  });






