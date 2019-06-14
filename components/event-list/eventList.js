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

    ctrl.grEvents = [
      {
      destination:"Frederik Meijer Gardens",
      rank:'1',
      googleReview: "4.8",
      summary: "Colorful gardens filled with art & music",
      description: "Sprawling botanical gardens with diverse sculptures hosts indoor art exhibits & summer concerts.",
      },
      {
        destination:"John Ball Zoo",
        rank: "2",
        googleReview: "4.5",
        summary: "Interactive zoo with an aquarium",
        description: "Exhibits include touchable stingrays, feedable parakeets & camel rides, plus aquarium with penguins.",
        },
        {
          destination:"Grand Rapids Public Museum",
          rank: "3",
          googleReview: "4.6",
          summary: "Museum & planetarium in an ex-flour mill",
          description: "Museum offers 3 floors of history in an ex-flour mill plus exhibits, a 1928 carousel & planetarium",
          },
          {
            destination:"Grand Rapids Art Museum",
            rank: "4",
            googleReview: "4.5",
            summary: "Mod space for 19th- & 20th-century art",
            description: "Modern space filled with U.S. & European art offers family-friendly activities & classical concerts.",
            },
            {
              destination:"The Gerald Ford Presidential Museum",
              rank: "5",
              googleReview: "4.6",
              summary: "Interactive exhibits on president's life",
              description: "Museum tells Ford's life story using artifacts, interactive exhibits & a replica of the Oval Office.",
              },
   ];


   console.log(ctrl.grEvents);











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

      ctrl.callEventDetails = (event) => {
        ctrl.showDetailModule = true;
        EventService.setDetails(event)
      }
    
    }

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `
<section id="event-list">

<div id="filter">
<h1>Filter Events you're interested in based on the current temperature in Grand Rapids, MI</h1>
</div>


<div id="box" ng-repeat="item in $ctrl.eventData.events">
<h3>{{item.name.text}}</h3>
<p>{{item.summary}}</p>
<button class="btn btn-primary" ng-click="$ctrl.callEventDetails(event)">Event Details</button>
</div>


<div id="box" ng-repeat="item in $ctrl.grEvents">
<h3>{{item.destination}}</h3>
<p>{{item.summary}}</p>
</div>





    </section>

`, // or use templateUrl
    controller: EventList,


  });



