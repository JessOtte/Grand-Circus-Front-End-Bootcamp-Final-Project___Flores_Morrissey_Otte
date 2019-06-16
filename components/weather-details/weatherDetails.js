function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.eventData = [];


  EventService.fetchEvents()
  .then((response) => {
      ctrl.eventData = response;
  
    console.log(ctrl.eventData);
    
  
  });

  ctrl.fetchEvents = () => {
    return $q(function(resolve, reject) {
      // Call service, then set our data
      EventService.fetchEvents()
      .then ( (response) => {
        console.log(response);
  
  
            })
   
       });
      }

      ctrl.callEventDetails = (event) => {
        ctrl.showDetailModule = true;
        EventService.setDetails(event)
      }
    
    }
  

  
    angular.module('RecipeApp').component('weatherDetails', {
      template: `
  
      {{$ctrl.eventData.events}}
  
        `, 
      controller: WeatherDetails,
      bindings: {
        moduleFlag: '=',
      }
    });
  