function WeatherList(EventService) {
    const ctrl = this;
    let id = '4994358';

EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData = response;

  // console.log(ctrl.weatherData);
  
//   weatherData.forEach(function (id) {
//     let recipeObj = {
//       id: id

//     }
//     ctrl.recipeList.push(recipeObj);
//   })
});



}


angular.module('WeatherEventApp')
  .component('weatherList', {
    template: `



    <br>
    <br>
    <br>
    <br>



 

    <section id="weather-list">
    <div class="weather-container">

    <!--
                    <div>
                    <h5>Current Temperature: <span class="data">{{$ctrl.weatherData.main.temp | number:0}} </span></h5> 
                    </div>

                    <div>
                    <h5>Current Conditions: <span class="data">{{$ctrl.weatherData.weather["0"].description}} </span></h5>
                    </div>

                    -->







                    <div>
                    <h5>Current Temperature: <span class="data">69 </span></h5> 
                    </div>

                    <div>
                    <h5>Current Conditions: <span class="data">overcast </span></h5>
                    </div>





    </div>
    </section>





`, // or use templateUrl
    controller: WeatherList,


  });






