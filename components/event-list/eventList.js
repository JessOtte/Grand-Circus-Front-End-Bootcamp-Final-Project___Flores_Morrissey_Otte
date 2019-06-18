function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.showDetailModule = false;
  ctrl.meetupData = [];
  ctrl.eventData = [];
  ctrl.eventList = [];
  
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

      $(document).ready(function(){
        $("#hide").click(function(){
          $("p").hide();
        });
        $("#show").click(function(){
          $("p").show();
        });
      });

    
    }

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `

<section id="section" ng-view>
<weather-list></weather-list>
</section>

<section id="event-list">
<div id="filter">
<h1>Live the dream</h1>
</div>


<div id= main-box>

<div id="box2" ng-repeat="item in $ctrl.eventData.events">

<img id="event-list-logo" ng-src= "{{item.logo.original.url}}">

<h3 id:"title-name" >{{item.name.text}}</h3>
<p id= "summary">{{item.summary}}</p>
<a id="hide" class="btn btn-primary" href="#!/event-details">Event Details</a>
<!-- <button id="hide" class="btn btn-primary" ng-click="$ctrl.callEventDetails(event)" href="#!/event-details">Event Details</button> --> 
</div>

<section id="gr-event">
<gr-events></gr-event>
</section>

</section>

`, // or use templateUrl
    controller: EventList,


  });



