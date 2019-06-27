function WeatherList(EventService) {
    const ctrl = this;
    let id = '4994358';
    ctrl.grEvents = [];
    

EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData = response;

    ctrl.grEvents = EventService.recommendEvents(ctrl.weatherData.weather["0"].description)

});

window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
  document.getElementById('current-time').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
    setTimeout(clock, 1000);
    }
}

}


angular.module('WeatherEventApp')
  .component('weatherList', {
    template: `


    <div class="hero">
    <div class="hero-inner">

    </div>
</div>



    <div id="event-list-colored-box"></div>
      <div class="weather-container">

      <div>
      <h1 id="current-time"></h1>
    </div>
    

        <div class = "description">
        <h5 class="data">{{$ctrl.weatherData.main.temp | number:0}}°</h5>

          <div>
            <h5 class="data" id="weather-conditions">Currently {{$ctrl.weatherData.weather["0"].description}}
            <img ng-src = "http://openweathermap.org/img/w/{{$ctrl.weatherData.weather[0].icon}}.png" class = "icon">

            </h5>
          </div>
           
        </div>



        <div class="app-info-text">
          <h3 class="welcome-message-title">Some days you have to create your own sunshine</h3>
          <p class="welcome-message-paragraph">
          
          If you're new in town, just passing through or call yourself 
          a local, we have recommended activities based on the weather to help you venture out into 
          Grand Rapids today...
          </p>
          <br>
        </div>
     
        </div>
        <gr-events gr-events="$ctrl.grEvents"></gr-events>

        <event-list></event-list>

    </div>

   







`, // or use templateUrl
    controller: WeatherList,


  });






