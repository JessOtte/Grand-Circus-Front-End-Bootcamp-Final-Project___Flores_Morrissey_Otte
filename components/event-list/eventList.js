function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.showDetailModule = false;


  ctrl.meetupData = [];
  ctrl.eventData = [];
  ctrl.eventList = [];



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




  //  EventService.getMeetupEvents()
  //  .then((response) => {
  //      ctrl.meetupData = response;

  //      console.log(ctrl.meetupData);
   
  //  });







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
<h1>Filter Events you're interested in based on the current temperature in Grand Rapids, MI</h1>
</div>



<div id="box2" ng-repeat="item in $ctrl.eventData.events">
<h3>{{item.name.text}}</h3>
<img id="event-list-logo" ng-src= "{{item.logo.original.url}}">
<p>{{item.summary}}</p>
<a id="hide" class="btn btn-primary" href="#!/event-details">Event Details</a>
<!-- <button id="hide" class="btn btn-primary" ng-click="$ctrl.callEventDetails(event)" href="#!/event-details">Event Details</button> --> 
</div>




 <!--
 <div class="carousel-item" ng-repeat="item in $ctrl.grEvents">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
  <h3>{{item.destination}}</h3>
  <p>{{item.summary}}</p>
  </div>
</div>
-->

<!--
<div id="box" ng-repeat="item in $ctrl.meetupData">
<h3>{{item.events.name}}</h3>
</div>
-->





    </section>

`, // or use templateUrl
    controller: EventList,


  });



