function EventService ($http, $q) {
        const service = this;
        // service.favoriteList = [];
        // service.eventDetails = null;
    
        service.appid = "016e00dbb08bcaf3c211004b0312d013";
        // service.APP_ID = "130a79d6";
    
    
        // service.input = null;

        // service.city = null;
        // service.list = null;

        // service.recipeList = [];

        service.fetchWeather = () => {
    
    
            return $q(function (resolve, reject) {
                // service.input = search;
                // service.city = city;
                // service.list = list;
                $http({
                    url: `https://api.openweathermap.org/data/2.5/forecast/`,
                    method: `GET`,
                    params: {
                        id: '4994358',
                        cnt: 8,
                        units: 'imperial',
                        appid: service.appid
                        // city: service.city.name,
                        // list: service.list.main.temp,
                        // list: service.list.main.rain
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
    
        
    
    
    }
    

angular
    .module("WeatherEventApp")
    .service("EventService", ["$http", "$q", EventService]);
