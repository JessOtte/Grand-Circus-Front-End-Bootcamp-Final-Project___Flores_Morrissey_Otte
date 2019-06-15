"use strict";



  angular.module('WeatherEventApp')
    .component('eventDetails', {
      controller: ['EventService',function (EventService) {
        
        console.log(`Is it working: ${EventService.fetchEvents}`);
        



    }],
    template: `

    <div class="card" id="detail-module" style="width: 40vw">


    <div id="module-body" class="card-body">
    <div class="module-title-bar">
    <a class="closeButton" id="cancel" ng-click="$ctrl.closeModule()">X</a>           

      <h2 id="module-title" id="class="card-title">{{$ctrl.fullEvent.label}}</h2>
      <p><small class="text-muted">{{$ctrl.fullEvent.ingredients}} Ingredients |
      Calories: {{$ctrl.fullEvent.calories | number:0}}
      </div>


       </small> 
       </p>

  </div>


      `, 
    controller: EventDetails,
    bindings: {
      moduleFlag: '=',
    }
  });
