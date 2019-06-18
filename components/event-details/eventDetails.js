function EventDetails(EventService, $q) {
  const ctrl = this;

  ctrl.meetupData = [];
  ctrl.eventData = [];

  ctrl.fullEvent = null;
  




  //  EventService.getMeetupEvents()
  //  .then((response) => {
  //      ctrl.meetupData = response;

  //      console.log(ctrl.meetupData);
   
  //  });







  EventService.fetchEvents()
  .then((response) => {
      ctrl.eventData = response;
      ctrl.fullEvent = EventService.getDetails();
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
        console.log(event);
        ctrl.showDetailModule = true;
        EventService.setDetails(event)
      }

      $(document).ready(function(){
        $("#hide").click(function(){
          $("#event-list").hide();
        });
        $("#show").click(function(){
          $("#event-list").show();
        });

      });
    
    }

angular.module('WeatherEventApp')
  .component('eventDetails', {
    template: `
<section id="event-details text-center" class="event-details-container">

<div id="event-details-colored-box">
</div>

<div id="box">
<img src="{{$ctrl.fullEvent.logo.original.url}}" alt="{{$ctrl.fullEvent.name.text}}" style="margin-top: 8vh;" class="center event-details-img">

<div class="event-details-city-and-start-date">
<h3 class="event-details-title">{{$ctrl.fullEvent.name.text}}</h3>
<p class="city">{{$ctrl.fullEvent.augmented_location.city}}</p>
<p class="date-time">{{$ctrl.fullEvent.start.local}}</p>
<a class="btn btn-primary" id="purchase-tickets" href="{{$ctrl.fullEvent.url}}">More Details From EventBrite</a>

</div>

</div>

<div class="event-details-body">
<h3 -webkit-text-stroke: .5px; style="text-align: center;">ABOUT THIS EVENT</h3>
<p class="event-details-paragraph">{{$ctrl.fullEvent.description.text}}</p>
</div>


<div class="go-back-btn-container">
<a id="show" href="#!/event-list"><img src="./images/back-arrow-icon.png" alt="back to event results button" class="back-btn-img"></a>
</div>











    </section>

`, // or use templateUrl
    controller: EventDetails,
    bindings: {
      item: '='
    }

  });



