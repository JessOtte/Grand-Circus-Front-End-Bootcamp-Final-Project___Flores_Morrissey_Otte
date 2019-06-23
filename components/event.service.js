function EventService ($http, $q, grEvents) {
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

        
// http request for categories 

        service.fetchCategories = () => {
    
            // http request to get events info 
    
            return $q(function (resolve, reject) {
               
                $http({
                    url: `https://www.eventbriteapi.com/v3/categories/?token=ERGFWMEMWJN2BHWUQT7X`,
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
        

        // for recommending events based on weather
        // we need description string from API 
        service.recommendEvents = (string) => {

            //Still working on logic here
            if(string.includes("rain")) {
                return grEvents.outdoor === false;
            }else if(string.includes("snow")) {
                return grEvents.outdoor === false;
            }else if(string.includes("thunderstorm")) {
                return grEvents.outdoor === false;
            }else if(string.includes("drizzle")) {
                return grEvents.outdoor === false;
            }else if(string.includes("sleet")) {
                return grEvents.outdoor === false;
            }else if(string.includes("shower")) {
                return grEvents.outdoor === false;
            }else if(string.includes("tornado")) {
                return grEvents.outdoor === false;
            }else if(string.includes("smoke")) {
                return grEvents.outdoor === false;
            }
            console.log(grEvents);
            //Still testing
            
        }
}
    
angular
    .module("WeatherEventApp")
    .service("EventService", ["$http", "$q", EventService]);
