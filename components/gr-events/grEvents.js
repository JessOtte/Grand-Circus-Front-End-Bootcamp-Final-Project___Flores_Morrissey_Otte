function GrEvents(EventService, $q) {
    const ctrl = this;

      ctrl.grEvents = [
        {
        destination:"Frederik Meijer Gardens",
        rank:'1',
        googleReview: "4.8",
        summary: "Colorful gardens filled with art & music",
        description: "Sprawling botanical gardens with diverse sculptures hosts indoor art exhibits & summer concerts.",
        website: "https://www.meijergardens.org/",
        img:"https://lh4.googleusercontent.com/proxy/IJV4WOlfPCVosUo51_WuMMJPJik-JUqnbweZjyza7tjDxwmxl8nWk-5vqgE8XIKBSI13D6WQDSZgZcx5lLFmETTwAiZkA7u9Wm29SzMC036eAp4-l988lO4kDfSFdGtqdlW-x0PfHqsl9-bSo-0X2RlMWxM=w100-h134-n-k-no",
        },
        {
          destination:"John Ball Zoo",
          rank: "2",
          googleReview: "4.5",
          summary: "Interactive zoo with an aquarium",
          description: "Exhibits include touchable stingrays, feedable parakeets & camel rides, plus aquarium with penguins.",
          website: "https://www.jbzoo.org/",
          img: "https://lh5.googleusercontent.com/proxy/l0TEbxpn3LmLjU45vg8hpiTGW5m_bZQaPR1PDPdv5bKIBDkU_uqaqjfxgGgVaWjDiAsFkZKT3GCt0tJBdF8yQOfT-d6-Eu82YoUiSo-_q0o0YsUtEgCLMBRpp-6AnxsjZIAjJHmZ-L25TECaruz8WVSBbio=w100-h134-n-k-no",
          },
          {
            destination:"Grand Rapids Public Museum",
            rank: "3",
            googleReview: "4.6",
            summary: "Museum & planetarium in an ex-flour mill",
            description: "Museum offers 3 floors of history in an ex-flour mill plus exhibits, a 1928 carousel & planetarium",
            website: "https://www.grpm.org/",
            img: "https://lh5.googleusercontent.com/proxy/UDu0oHtDiNVOX9yUHbmd3_Z4U1cVpdB4mMlT4Ud-5RIaa570xYnbwYdEZ9-wu5rfdDKXpyhXDLTwuwXivAX3ggMOjdKXmjlxm1q1xXU8-Pu3RUZsy-Qfs4t4EzrkNEYCCbs4bLbfEkhIwdrCpo8pYa2abBA=w100-h134-n-k-no",
            },
            {
              destination:"Grand Rapids Art Museum",
              rank: "4",
              googleReview: "4.5",
              summary: "Mod space for 19th- & 20th-century art",
              description: "Modern space filled with U.S. & European art offers family-friendly activities & classical concerts.",
              website: "http://www.artmuseumgr.org/",
              img: "https://lh4.googleusercontent.com/-I7FwDbcHW4k/WTcwywWRHDI/AAAAAAAA5J8/9H5N-6EiLUs3OwWSnhrtslAPc_irEn7bACLIB/w100-h134-n-k-no/",
              },
              {
                destination:"The Gerald Ford Presidential Museum",
                rank: "5",
                googleReview: "4.6",
                summary: "Interactive exhibits on president's life",
                description: "Museum tells Ford's life story using artifacts, interactive exhibits & a replica of the Oval Office.",
                website: "https://www.fordlibrarymuseum.gov/",
                img: "https://lh6.googleusercontent.com/proxy/XMFyda-eUCwnvff9HyvKR_JN-lXduwFO1uoM8fRGaM1cmmFCwizfdE3OhyeNfRRv38zkRMeaWpgdykLqe1SEUTskaXXMuflf63BcjHeYXlGvc9fTjkHNYJJ-hjJg0K1vsimYOptDXwzDDg769pHERg42ftQ=w100-h134-n-k-no",
                },
     ];
  
  
     console.log(ctrl.grEvents);
  

        jQuery(document).ready(function ($) {
  
          $('#checkbox').change(function(){
            setInterval(function () {
                moveRight();
            }, 3000);
          });
          
          var slideCount = $('#slider ul li').length;
          var slideWidth = $('#slider ul li').width();
          var slideHeight = $('#slider ul li').height();
          var sliderUlWidth = slideCount * slideWidth;
          
          $('#slider').css({ width: slideWidth, height: slideHeight });
          
          $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
          
            $('#slider ul li:last-child').prependTo('#slider ul');
        
            function moveLeft() {
                $('#slider ul').animate({
                    left: + slideWidth
                }, 200, function () {
                    $('#slider ul li:last-child').prependTo('#slider ul');
                    $('#slider ul').css('left', '');
                });
            };
        
            function moveRight() {
                $('#slider ul').animate({
                    left: - slideWidth
                }, 200, function () {
                    $('#slider ul li:first-child').appendTo('#slider ul');
                    $('#slider ul').css('left', '');
                });
            };
        
            $('a.control_prev').click(function () {
                moveLeft();
            });
        
            $('a.control_next').click(function () {
                moveRight();
            });
        
        });
  
  
  
  
  
      
      }
  
  angular.module('WeatherEventApp')
    .component('grEvents', {
      template: `
  
<section id="gr-events">
  
  
  
  <h3 class="gr-events-title">Top 50 Things to Do in Grand Rapids</h3>
  <div id="slider">
    <a href="#" class="control_next">></a>
    <a href="#" class="control_prev"><</a>
    <ul>
      <li ng-repeat="item in $ctrl.grEvents">
      <a href="{{item.website}}" target="_blank">
      <img class="slider-img" ng-src="{{item.img}}" alt="{{item.destination}}">
      <div class="bottom-destination">{{item.destination}}</div>
      <div class="bottom-summary">{{item.summary}}</div>
      </a>
      </li>
    </ul>  
  </div>
  
  
  
  <div class="slider_option">
    <input type="checkbox" id="checkbox">
    <label for="checkbox">Autoplay Slider</label>
  </div> 
  
  
  
  
      </section>
  
  `, // or use templateUrl
      controller: GrEvents,
  
  
    });
  
  
  
  