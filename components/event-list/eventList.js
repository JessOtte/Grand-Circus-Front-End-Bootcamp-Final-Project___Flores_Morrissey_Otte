function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.showDetailModule = false;
  ctrl.meetupData = [];
  ctrl.eventData = [];
  ctrl.freeEvents = [];
  ctrl.paidEvents = [];
  ctrl.eventList = [];
  ctrl.eventCategories = [];
  ctrl.priceSelection = null;
  
   ctrl.eventLimit = 6; 
  ctrl.selectedCategory = "";

  ctrl.seeMore =() =>{ 
    ctrl.eventLimit += 6;
        };

  ctrl.selectCategory = function(category) {
  //   ctrl.eventData = response;
  // var a = category;
  console.log(category);
  EventService.fetchEvents(category)
  .then((response) => {
      ctrl.eventData = response; 
      
     // create two arrays, one with free events, and one with events that cost money
     ctrl.freeEvents = (response.events).filter(function(item) {
      return item.is_free === true;
    })

    ctrl.paidEvents = (response.events).filter(function(item) {
      return item.is_free !== true;
    })
  });
  }

ctrl.selectPrice = function(price) {
  if (price === "free") {
    ctrl.eventData.events = ctrl.freeEvents;
  } else if (price === "paid") {
    ctrl.eventData.events = ctrl.paidEvents;
  }
}
  
  EventService.fetchEvents()
  .then((response) => {
    ctrl.eventData = response; 
    console.log(response);


    // create two arrays, one with free events, and one with events that cost money
    ctrl.freeEvents = (response.events).filter(function(item) {
      return item.is_free === true;
    })

    ctrl.paidEvents = (response.events).filter(function(item) {
      return item.is_free !== true;
    })

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

      ctrl.callEventDetails = (event) => {
        console.log('I am fetching the event THE USER selected ==>', event);
        EventService.setDetails(event)
      }

    
    }

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `



    <div class="filter-title-container">
    <h3 class="filter-title">Filter Options:</h3>
    </div>
<div id="filters">



  <div class="filter-category">
  <select   ng-model="selectedCategory" ng-change= "$ctrl.selectCategory(selectedCategory)" class="custom-select" style="width:13vw; height:6vh; color:white; background-color:#2E4057;  font-size:0.9em;">
    <option value="" selected="selected">Category</option>
    <option ng-repeat="item in $ctrl.eventCategories.categories" value="{{item.id}}">{{item.name}}</option>
  </select>
</div>

  <div class="filter-category">
    <select ng-model="priceSelection" class="custom-select" ng-change="$ctrl.selectPrice(priceSelection)" style="width:13vw; height:6vh; color:white; background-color:#2E4057;  font-size:0.9em;">
      <option value="" selected="selected">Price</option>  
      <option value="free" selected="free">Free Events</option>
      <option value="paid" selected="paid">Paid Events</option>
    </select>
  </div>

</div>


<div id="event-results">

<div id="main-container">

<div id="event-list-container" ng-repeat="item in $ctrl.eventData.events | limitTo: $ctrl.eventLimit">

<div class="event-img-container">
<img id="event-list-logo" ng-src= "{{item.logo.original.url}}">
<h3 class="event-list-name">{{item.name.text}}</h3>
</div>
<div class="event-card-info">
<p class="event-list-venue">{{item.venue.name}}</p>

<p class="event-list-date-time"><strong>Starts:</strong> {{item.start.local  | date:'shortTime'}}
{{item.start.local  | date:'fullDate'}}</p>

<p class="event-list-date-time"><strong>Ends:</strong> {{item.end.local  | date:'shortTime'}}
{{item.end.local  | date:'fullDate'}}</p>

<p class="event-list-free"><strong>Free Event:</strong> {{item.is_free}}</p>


<a id="event-list-btn" class="btn btn-primary" ng-click="$ctrl.callEventDetails(item)"href="#!/event-details#event-top" name="top">Event Details</a> 
</div> 
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



