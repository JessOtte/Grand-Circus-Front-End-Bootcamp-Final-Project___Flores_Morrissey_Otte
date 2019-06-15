function EventService ($http, $q) {
        const service = this;

        service.eventDetails = null;

    
        service.appid = "016e00dbb08bcaf3c211004b0312d013";



        service.fetchWeather = () => {
    
    
            return $q(function (resolve, reject) {
                // service.input = search;
                // service.city = city;
                // service.list = list;
                $http({
                    url: `https://api.openweathermap.org/data/2.5/weather/`,
                    method: `GET`,
                    params: {
                        id: '4994358',
                        cnt: 8,
                        units: 'imperial',
                        appid: service.appid,
                        // city: service.city.name
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

  
        // service.getMeetupEvents = () => {
        //     // const token = "bb51a837f084bd2b9e54bbc406c6b5e6";
        //     // const res = await fetch(`https://api.meetup.com/find/upcoming_events?access_token=bb51a837f084bd2b9e54bbc406c6b5e6`);
          
        //     // if (!res.ok) throw res.status;
          
        //     // // parse and return the event data
        //     // const data = await res.json();
        //     // return data.events;

        //     return $q(function (resolve, reject) {
               
        //         $http({
        //             url: `https://api.meetup.com/find/upcoming_events?access_token=bb51a837f084bd2b9e54bbc406c6b5e6`,
        //             method: `GET`
        //             // params: {
        //             //     categories: '103' // example - music category 
                      
        //             // }
        //         })
        //             .then((response) => {
        //                 let data = response.data;
        //                 console.log(data);

        //                 resolve(data);
        //             })
        //             .catch((error) => {
        //                 reject(error);
        //             })


        //     })







        //   };





        // let events_tokken = IYBEWZZEFXT3EA6JODBG; 

        service.fetchEvents = () => {
    
    
            return $q(function (resolve, reject) {
               
                $http({
                    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=49503&location.within=30mi&start_date.keyword=this_weekend&token=IYBEWZZEFXT3EA6JODBG`,
                    method: `GET`
                    // params: {
                    //     categories: '103' // example - music category 
                      
                    // }
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
