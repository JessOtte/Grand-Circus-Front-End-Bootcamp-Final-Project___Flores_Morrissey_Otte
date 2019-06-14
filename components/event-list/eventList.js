function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.eventData = [];

  ctrl.names = [
    "Music", 
    "Business & Professional", 
    "Food & Drink",
    "Community & Culture",
    "Health & Wellness",
    "Charity & Causes",
  ];

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
          // do something with this data
          // attach to template one by one
  
          // Get children from data
          // let children = response.data.data.children;
  
          // Same as 
          //  <ng-repeat="child in children">
  
          // Organize in to objects for each one
            // children.forEach( function(child, index) {
            //   let childObj = {
            //     title: child.data.title,
            //     img: child.data.thumbnail,
            //     permalink: child.data.permalink
            //   }
  
              // Add to feed array
              // ctrl.feed.push(childObj);
  
              // if ( index === (children.length -1) ){
              //   // Run .then() from inside caller
              //   resolve();
              // }
  
  
            })
   
       });
      }
    
    }

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `
<section id="event-list" >
<div id="filter">
<h1>Filter Events you're interested in based on the current temperature in Grand Rapids, MI</h1>

<div> 


<select ng-model="category" class="custom-select" style="width:200px;">
<option value="" selected="selected">Category</option>
<option ng-repeat="category in $ctrl.eventData.events">{{category.sub_category}}</option>
</select>

<select ng-model="price" class="custom-select" style="width:200px;">
    <option value="" selected="selected">Price</option>
    <option value="free">Free</option>
    <option value="paid">Paid</option>
</select>
</div>

</div>

<div>
</div>


<div>

<div id="box" ng-repeat="item in $ctrl.eventData.events">
<h3>{{item.name.text}}</h3>
<p>{{item.summary}}</p>

</div>


</div>

    </div>
    </section>

`, // or use templateUrl
    controller: EventList,


  });



