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
        console.log(event);
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
  .component('eventList', {
    template: `

    <div id="section" ng-view>
    <weather-list></weather-list>
</div>

<div id="event-list show hide">

<div id="filter">
<h1>Live the dream</h1>
</div>


<div id= "main-box">
<div id="box2" ng-repeat="item in $ctrl.eventData.events">
<img id="event-list-logo" ng-src= "{{item.logo.original.url}}">
<h3>{{item.name.text}}</h3>

<p>{{item.summary}}</p>

<a id="hide" class="btn btn-primary" ng-click="$ctrl.callEventDetails(item)" href="#!/event-details">Event Details</a> 
 </div>




<section id="gr-event">
<gr-events></gr-events>
</section>



    </section>

`, // or use templateUrl
    controller: EventList,


  });



