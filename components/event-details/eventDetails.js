function EventDetails(EventService, $q) {
  const ctrl = this;

  ctrl.meetupData = [];
  ctrl.eventData = [];

  ctrl.fullEvent = null;
  ctrl.fullEvent = EventService.getDetails();


  //  EventService.getMeetupEvents()
  //  .then((response) => {
  //      ctrl.meetupData = response;

  //      console.log(ctrl.meetupData);
   
  //  });


  // EventService.fetchEvents()
  // .then((response) => {
  //     ctrl.eventData = response;
  //     ctrl.fullEvent = EventService.getDetails();
  //   console.log('Logging all the events today ==>', ctrl.eventData);
    
  
  // });

  ctrl.fetchEvents = () => {
    return $q(function(resolve, reject) {
      // Call service, then set our data
      EventService.fetchEvents()
      .then ( (response) => {
        console.log('I am fetching the event the user selected ==>',response);
  
            })
   
       });
      }

      ctrl.callEventDetails = (event) => {
        console.log('NO I AM !!!! I am fetching the event the user selected ==>',event);
        ctrl.showDetailModule = true;
        EventService.setDetails(event)
      }


    
    }

angular.module('WeatherEventApp')
  .component('eventDetails', {
    template: `
<div id="event-details text-center" class="event-details-container">

<div id="event-details-colored-box">
</div>

<div id="box">
<img id="event-top" src="{{$ctrl.fullEvent.logo.original.url}}" alt="{{$ctrl.fullEvent.name.text}}" class="center event-details-img">

<div class="event-details-city-and-start-date">
<h3 class="event-details-title">{{$ctrl.fullEvent.name.text}}</h3>
<p class="city">{{$ctrl.fullEvent.augmented_location.city}}</p>
<p class="date-time">Starts: {{$ctrl.fullEvent.start.local}}</p>
<p class="date-time">Ends: {{$ctrl.fullEvent.end.local}}</p>

<a class="btn btn-primary" id="purchase-tickets" href="{{$ctrl.fullEvent.url}}" target="_blank" >More Details From EventBrite</a>

</div>

</div>

<div class="event-details-body">
<h3 -webkit-text-stroke: .5px; style="text-align: center;">ABOUT THIS EVENT</h3>
<p class="event-details-paragraph">{{$ctrl.fullEvent.description.text}}</p>
</div>


<div class="go-back-btn-container">
<a href="#!/event-list#event-results" ><img src="./images/back-arrow-icon.png" alt="back to event results button" class="back-btn-img"></a>
</div>











    </div>

`, // or use templateUrl
    controller: EventDetails,
    bindings: {
      item: '='
    }

  });



