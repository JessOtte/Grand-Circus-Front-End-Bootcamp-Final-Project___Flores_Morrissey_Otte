function EventService ($http, $q) {
        const service = this;

        service.eventDetails = null;
        service.appid = "016e00dbb08bcaf3c211004b0312d013";

        // http request to get weather info 
        service.fetchWeather = () => {
            return $q(function (resolve, reject) {
                $http({
                    url: `https://api.openweathermap.org/data/2.5/weather/`,
                    method: `GET`,
                    params: {
                        id: '4994358',
                        cnt: 8,
                        units: 'imperial',
                        appid: service.appid,
                    }
                })
                    .then((response) => {
                        let data = response.data;
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        }

        service.fetchForecast = () => {

            // http request to get forescat info

            return $q(function (resolve, reject) {

               $http({
                   url: `https://api.openweathermap.org/data/2.5/forecast/`,
                   method: `GET`,
                   params: {
                       id: '4994358',
                       cnt: 8,
                       units: 'imperial',
                       appid: service.appid
                   }
               })
                   .then((response) => {
                       let data = response.data;
                       resolve(data);
                   })
                   .catch((error) => {
                       reject(error);
                   })
           })
       }

        service.fetchEvents = () => {
    
            // http request to get events info 
    
            return $q(function (resolve, reject) {
               
                $http({
                    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=49503&location.within=30mi&start_date.keyword=this_weekend&expand=venue&token=IYBEWZZEFXT3EA6JODBG`,
                    method: `GET`
                    
                })
                    .then((response) => {
                        let data = response.data;
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        }

        

        service.setDetails = (event) => {
            service.eventDetails = event;
        }

        service.getDetails = () => {
            return service.eventDetails;
        }     
}
    
angular
    .module("WeatherEventApp")
    .service("EventService", ["$http", "$q", EventService]);
