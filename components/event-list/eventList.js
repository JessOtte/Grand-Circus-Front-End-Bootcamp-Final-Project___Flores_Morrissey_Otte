function EventList(EventService, $q) {
  const ctrl = this;

  ctrl.names = [
    "Music", 
    "Business & Professional", 
    "Food & Drink",
    "Community & Culture",
    "Health & Wellness",
    "Charity & Causes",
  ];




}

angular.module('WeatherEventApp')
  .component('eventList', {
    template: `
<section id="event-list">
<div id="filter">
<h1>Filter Events you're interested in based on the current temperature in Grand Rapids, MI</h1>

<div> 

<input type="date">

<select ng-model="category" class="custom-select" style="width:200px;">
<option value="" selected="selected">Category</option>
<option ng-repeat="x in $ctrl.names">{{x}}</option>
</select>

<select ng-model="price" class="custom-select" style="width:200px;">
    <option value="" selected="selected">Price</option>
    <option value="peanut-free">Free</option>
    <option value="vegetarian">Paid</option>
</select>
</div>

</div>









    </div>
    </section>

`, // or use templateUrl
    controller: EventList,


  });