function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.showDetailModule = false;
  ctrl.meetupData = [];
  ctrl.eventData = [];
  ctrl.eventList = [];
  ctrl.eventCategories = [];
  
   ctrl.eventLimit = 9; 
  ctrl.selectedCategory = "";

  ctrl.seeMore =() =>{ 
    ctrl.eventLimit += 9;
        };

  ctrl.selectCategory = function(category) {
  //   ctrl.eventData = response;
  // var a = category;
  console.log(category);
  EventService.fetchEvents(category)
  .then((response) => {
      ctrl.eventData = response; 
      console.log(response);
 
  });
  }
  
  EventService.fetchEvents()
  .then((response) => {
      ctrl.eventData = response; 
      console.log(response);
 
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
      EventService.fetchCategories()
      .then((response) => {
          ctrl.eventCategories = response; 
          console.log(response);
      });
    
      // ctrl.fetchEvents = () => {
      //   return $q(function(resolve, reject) {
      //     // Call service, then set our data
      //     EventService.fetchCategories()
      //     .then ( (response) => {
      //       console.log(response);
      
      //           })
      //      });
      //     }

      ctrl.callEventDetails = (event) => {
        console.log('I am fetching the event THE USER selected ==>', event);
        EventService.setDetails(event)
      }

    
    }

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `




<div id="filters">
<div>
<select ng-model="selectedCategory" ng-change= "$ctrl.selectCategory(selectedCategory)" class="custom-select" style="width:200px;">
<option value="" selected="selected">Category</option>
<option ng-repeat="item in $ctrl.eventCategories.categories" value="{{item.id}}">{{item.name}}</option>
</select>
</div>

<div>
<select ng-model="selectCategory" class="custom-select" style="width:200px;">
<option value="" selected="selected">Price</option>
<option value="{{item.is_free}}">{{item.is_free}}</option>
</select>
</div>
<div>

</div>
</div>
<div id="event-results">

<div id="main-box">

<div id="box2" ng-repeat="item in $ctrl.eventData.events | limitTo: $ctrl.eventLimit">

<img id="event-list-logo" ng-src= "{{item.logo.original.url}}">
<h3 class="event-list-name">{{item.name.text}}</h3>

<p class="event-list-name">{{item.venue.name}}</p>

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



