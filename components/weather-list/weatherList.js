function WeatherList(EventService) {
    const ctrl = this;
    let id = '4994358';
    ctrl.grEvents = [];
    

EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData = response;

    ctrl.grEvents = EventService.recommendEvents(ctrl.weatherData.weather["0"].description)

});



}


angular.module('WeatherEventApp')
  .component('weatherList', {
    template: `





    
    <div id="event-list-colored-box"></div>
      <div class="weather-container">

        <div class = "description">
          <h5 class="data">{{$ctrl.weatherData.main.temp | number:0}}°</h5>

          <h5 class="data" id="weather-conditions">Currently {{$ctrl.weatherData.weather["0"].description}}</h5> 
          <h6 class="grand-rapids"> Grand Rapids - Michigan </h6> 
          <div><img ng-src = "http://openweathermap.org/img/w/{{$ctrl.weatherData.weather[0].icon}}.png" class = "icon">
        </div>
        </div>



        <div class="app-info-text">
          <h3 class="welcome-message-title"> Welcome to WeatherBrite GR </h3>
          <p class="welcome-message-paragraph">Since the current conditions are {{$ctrl.weatherData.weather["0"].description}}, we recommend the following events for your journey today in Grand Rapids, MI.</p>
        </div>
     
        </div>
        <gr-events gr-events="$ctrl.grEvents"></gr-events>

        <event-list></event-list>

    </div>

   







`, // or use templateUrl
    controller: WeatherList,


  });






