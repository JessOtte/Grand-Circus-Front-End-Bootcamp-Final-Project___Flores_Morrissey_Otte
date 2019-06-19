function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.showDetailModule = false;
  ctrl.meetupData = [];
  ctrl.eventData = [];
  ctrl.eventList = [];
  
  ctrl.eventLimit = 9; 

  ctrl.seeMore =() =>{ 
    ctrl.eventLimit += 9;
        };


  EventService.fetchEvents()
  .then((response) => {
      ctrl.eventData = response;  
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
        console.log('I am fetching the event THE USER selected ==>', event);
        EventService.setDetails(event)
      }

    
    }

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `


<div id="event-results">
<br><br>

<div id="filter">
<h1>Live the dream</h1>
</div>


<div id="main-box">

<div id="box2" ng-repeat="item in $ctrl.eventData.events | limitTo: $ctrl.eventLimit">

<img id="event-list-logo" ng-src= "{{item.logo.original.url}}">
<h3 class="event-list-name">{{item.name.text}}</h3>

<p class="event-list-name">{{item.summary}}</p>

<a id="hide" class="btn btn-primary" ng-click="$ctrl.callEventDetails(item)"href="#!/event-details#event-top" name="top">Event Details</a> 
 </div>

 <br><br>

 </div>
 <div id="see-more-container">
 <a id="see-more" class="btn btn-primary" ng-click="$ctrl.seeMore()">See More</a> 
 </div>


</div>

`, // or use templateUrl
    controller: EventList,


  });



