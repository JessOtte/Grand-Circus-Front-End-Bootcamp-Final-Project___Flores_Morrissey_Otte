function EventDetails(EventService, $q) {
  const ctrl = this;

  ctrl.meetupData = [];
  ctrl.eventData = [];

  // Timestamp method
new Date(-6106015800000);

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
<img src="{{$ctrl.eventData.events[2].logo.original.url}}" alt="{{$ctrl.eventData.events[2].name.text}}" style="margin-top: 8vh;" class="center event-details-img">

<div class="event-details-city-and-start-date">
<h3 class="event-details-title">{{$ctrl.eventData.events[2].name.text}}</h3>
<p class="city">{{$ctrl.eventData.location.augmented_location.city}}</p>
<p class="date-time">{{$ctrl.eventData.events[2].start.local}}</p>
<a class="btn btn-primary" id="purchase-tickets" href="{{$ctrl.eventData.events[2].url}}">More Details From EventBrite</a>

</div>

</div>

<div class="event-details-body">
<h3 -webkit-text-stroke: .5px; style="text-align: center;">ABOUT THIS EVENT</h3>
<p class="event-details-paragraph">{{$ctrl.eventData.events[2].description.text}}</p>
</div>


<div class="go-back-btn-container">
<a id="show" href="#!/event-list"><img src="./images/back-arrow-icon.png" alt="back to event results button" class="back-btn-img"></a>
</div>











    </section>

`, // or use templateUrl
    controller: EventDetails,


  });



