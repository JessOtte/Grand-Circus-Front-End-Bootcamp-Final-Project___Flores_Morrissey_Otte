"use strict";
function MeetTheTeam() {
  const ctrl = this;


}
angular.module('WeatherEventApp')
  .component('meetTheTeam', {
    template: `

    <div id="gr-event-list-colored-box"></div>

<div class="meet-the-team" id="team-top">

<div class ="meet-the-team-title-container">
  <h1 class="meet-the-team-title">Meet the Team</h1>
  <p class ="meet-the-team-paragraph">We are a group of front end web developers newly graduated from Grand Circus.</p>
</div>

<div class="meet-the-team-container">

    <div class="card team-card" style="width: 18rem;">
  <img class="card-img-top" src="./images/humberto-flores.jpg" alt="Jessica Otte">
  <div class="card-body">
    <h5 class="card-title">Humberto Flores</h5>
    <p class="card-text">Front-End Developer || Scrum Master || Software QA Fanatic</p>
    <a href="https://www.linkedin.com/in/hfloressoto/" target="_" class="btn btn-primary">Let's Connect</a>
  </div>
</div>

<div class="card team-card" style="width: 18rem;">
<img class="card-img-top" src="./images/will-morrissey.jpg" alt="Jessica Otte">
<div class="card-body">
  <h5 class="card-title">Will Morrissey</h5>
  <p class="card-text">Front-End Web Developer Student</p>
  <a href="https://www.linkedin.com/in/will-morrissey/" target="_" class="btn btn-primary">Let's Connect</a>
</div>
</div>

<div class="card team-card" style="width: 18rem;">
<img class="card-img-top" src="./images/jessica-otte.jpg" alt="Jessica Otte">
<div class="card-body">
  <h5 class="card-title">Jessica Otte</h5>
  <p class="card-text">Designer || Developer || Marketer</p>
  <a href="https://www.linkedin.com/in/jessotte/" target="_" class="btn btn-primary">Let's Connect</a>
</div>
</div>


</div>

</div>

    

`, // or use templateUrl
    controller: MeetTheTeam,


  });