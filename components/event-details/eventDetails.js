"use strict";



  angular.module('WeatherEventApp')
    .component('eventDetails', {
      controller: ['EventService',function (EventService) {
        
        console.log(`Is it working: ${EventService.fetchEvents}`);
        
        const ctrl = this;
        ctrl.search = "";
        ctrl.favs = null;

        ctrl.favs = EventService.getFavorites();
        console.log(`favs:`)

        ctrl.removeRecipe = function (key, value) {
            ctrl.favs.splice(key, 1)
        }

        ctrl.callRecipeDetails = (recipe) => {
            // console.log(recipe);
            ctrl.showDetailModule = true;
            EventService.setDetails(recipe)
        }

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
