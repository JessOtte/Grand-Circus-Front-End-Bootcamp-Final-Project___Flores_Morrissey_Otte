function WeatherList(EventService) {
    const ctrl = this;
    let id = '4994358';

EventService.fetchWeather(id)
.then((response) => {
    ctrl.weatherData = response;

  console.log(ctrl.weatherData);
  
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



    

 


    <section id="weather-list">
                    <div ng-repeat="item in $ctrl.weatherData.list">{{item.main.temp}}</div>
    </section>


`, // or use templateUrl
    controller: WeatherList,


  });