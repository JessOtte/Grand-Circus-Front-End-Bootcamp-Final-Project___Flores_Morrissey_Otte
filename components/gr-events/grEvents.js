function GrEvents(EventService, $q, $scope) {
	const ctrl = this;
  
var scaling = 1.50;
// count
var currentSliderCount = 0;
// var videoCount = $(".slider-container").children().length;
var videoCount = 1300;
// var videoCount = $(".slider-container").children().length;
var showCount = 4;
var sliderCount = videoCount / showCount;
var controlsWidth = 40;
var scollWidth = 0;
var videoWidth = 0;
var videoHeight = 0;
var videoWidthDiff = 0;
var videoHeightDiff = 0;
    
// alert("videoCount: "+videoCount);


  $(document).ready(function(){ 
  // $('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container'); 
	initSlider();
  });
 
$( window ).resize(function() {
    initSlider();
});
function initSlider(){
    // elements
    var win = $(window);
    var sliderFrame = $(".slider-frame");
    var sliderContainer = $(".slider-container");
    var slide = $(".slide");
    
    // counts
    var scollWidth = 0;
 
    
    // sizes
    var windowWidth = win.width();
    var frameWidth = win.width() - 80;
     if(windowWidth >= 0 && windowWidth <= 430){
       showCount = 2;
   }else if(windowWidth >= 430 &&  windowWidth <= 768){
       showCount = 3;
   }else if(windowWidth >= 769 &&  windowWidth <= 992){
	   showCount = 4;
   }
   
    videoWidth = ((windowWidth - controlsWidth * 2) / showCount );
    videoHeight = Math.round(videoWidth / (16/9));
    
    // console.log("videoWidth: "+videoWidth);
    
    videoWidthDiff = (videoWidth * scaling) - videoWidth;
    videoHeightDiff = (videoHeight * scaling) - videoHeight;
    
    // console.log("windowWidth: "+windowWidth);
  
    
    // set sizes
    sliderFrame.width(windowWidth);
    sliderFrame.height(videoHeight * scaling);
    
    
    // sliderFrame.css("top", (videoHeightDiff / 2));
    
    sliderContainer.height(videoHeight * scaling);
    // sliderContainer.width((videoWidth * videoCount) + videoWidthDiff);
    sliderContainer.width(80000);
    // console.log("sliderContainer: width: "+sliderContainer.width());
   // sliderContainer.width(4160);
    
    sliderContainer.css("top", (videoHeightDiff / 2));
    sliderContainer.css("margin-left", (controlsWidth));
    
    slide.height(videoHeight);
    slide.width(videoWidth);
    $(".slide").css("margin", 2);
    // hover effect
    $(".slide").mouseover(function() {
    	
    	 
    	
        $(this).css("width", videoWidth * scaling);
        $(this).css("height", videoHeight * scaling);
        $(this).css("top", -(videoHeightDiff / 2));
		$(this).css("margin", 2);
		var current_id = $(this).parent().attr('id');
		 
		$("#"+current_id).width($("#"+current_id).width()+250);
		
		// console.log("current_id: "+current_id);
		// console.log("indexxx: "+$("#"+current_id+" >
		// .slide").index($(this)));
        if($("#"+current_id+" > .slide").index($(this)) == 0 || ($("#"+current_id+" > .slide").index($(this)))% 4 == 0){
          // do nothing
        }
        else if(($("#"+current_id+" > .slide").index($(this)) + 1) % 4 == 0 && $("#"+current_id+" > .slide").index($(this)) != 0){
            $(this).parent().css("margin-left", -(videoWidthDiff - controlsWidth));
        }
        else{
            $(this).parent().css("margin-left", - (videoWidthDiff / 2));
        }
    }).mouseout(function() {
        $(this).css("width", videoWidth * 1);
        $(this).css("height", videoHeight * 1);
		$(this).css("margin", 2);
        $(this).css("top", 0);
        $(this).parent().css("margin-left", controlsWidth);
    });
    
    // controls
    // console.log("in controlls: frameWidth: "+frameWidth);
    // console.log("in controlls: scollWidth: "+scollWidth);
    controls(frameWidth, scollWidth);
}
function controls(frameWidth, scollWidth){
    var prev = $(".prev");
    var next = $(".next");
    
    prev.on("click", function(){
		// console.dir($(this));
        // console.log("currentSliderCount: "+currentSliderCount);
        // console.log("sliderCount: "+sliderCount);
		// console.log("frameWidth: "+frameWidth);
		
		
		
		
		
		var CurrentslideContantner = $(this).next().next().attr("id");
        // console.log("slide-contentner: "+ CurrentslideContantner );
        
        var currentSlideElements =  $("#"+CurrentslideContantner).children().length;
        // console.log("currentSlideElements ---- : "+currentSlideElements);
        var currentSliderWidth = $("#"+CurrentslideContantner);
       
        
        $("#"+CurrentslideContantner).width((videoWidth * currentSlideElements) + videoWidthDiff);
         // console.log("after width changed: "+currentSliderWidth.width());
		
     
         scollWidth = scollWidth + frameWidth;
 		// console.log("scollWidth: aftr: "+scollWidth);
 		
 		if(scollWidth >= currentSliderWidth.width() || scollWidth <=0 || currentSlideElements == 4){
 			scollWidth = 0;
 		}
 		
 		
          
         
		if(currentSliderCount <0){
			currentSliderCount = 0;
		}
		
		$("#"+CurrentslideContantner).animate({
            left: - scollWidth
        }, 10, function(){ 
            // console.log("currentSliderCount: "+currentSliderCount +" And
			// sliderCount: "+sliderCount);
			if(currentSliderCount >= sliderCount-1){
			
				$("#"+CurrentslideContantner).css("left", 0);
                currentSliderCount = 0;
                scollWidth = 0;
            }else{
                currentSliderCount++;
            }
        });        
    });
    next.on("click", function(){
    	
        
    	scollWidth = scollWidth - frameWidth;
		 console.log("scollWidth: b4: "+scollWidth);
		 var CurrentslideContantner = $(this).next().attr("id");
		 
		 // console.log("CurrentslideContantner: "+CurrentslideContantner);
		 
		 var currentSlideElements =  $("#"+CurrentslideContantner).children().length;
	         console.log("currentSlideElements ---- : "+currentSlideElements);
	     var currentSliderWidth = $("#"+CurrentslideContantner);
		 
		 $("#"+CurrentslideContantner).width((videoWidth * currentSlideElements) + videoWidthDiff);
          console.log("after width changed: "+currentSliderWidth.width());
         
         if(Math.abs(scollWidth) >= currentSliderWidth.width() || currentSlideElements == 4){
  			scollWidth = 0;
  		}
         
          console.log("scollWidth: after: "+scollWidth);
          console.log("currentSliderCount: : "+currentSliderCount);
         
         if(Math.abs(currentSliderCount) ==2 && currentSlideElements >8){
        	 scollWidth = scollWidth-1278;
         }
         if(Math.abs(currentSliderCount) ==3 && currentSlideElements >8){
  			 //console.log("inside if");
  			scollWidth = 0;
 		}
		 
		 
        $('#'+CurrentslideContantner).animate({
            left: + scollWidth
        }, 10, function(){ 
			// console.log("currentSliderCount:B4 "+currentSliderCount);
			 //console.log("sliderCount: "+sliderCount);
        
			  //console.log("currentSliderCount: "+currentSliderCount +" And sliderCount: "+sliderCount);
			if(Math.abs(currentSliderCount) >= sliderCount-1){
			
				$('#'+CurrentslideContantner).css("left", 0);
                currentSliderCount = 0;
                scollWidth = 0;
				
                
            }else{
                
				currentSliderCount--;
            }
			
        });
		 
       // $("#trending-items").css("left", scollWidth);
	});
	

};

ctrl.$onChanges = (changesObj) => {
    initSlider();
  };
 
  
  	$scope.$watch('ctrl.grEvents', () => {
		console.log("CHANGED");
		// console.log(ctrl);
		// EventService.recommendEvents(ctrl.weather, ctrl.grEvents) 

		console.log(initSlider);

		initSlider();
	});

      
	  }
	  

  
  angular.module('WeatherEventApp')
    .component('grEvents', {
      template: `
  
<div id="gr-events">
<!-- <h4 id="rec-events-title" class="welcome-message-title">Based on the current conditions, we recommend the following activities for your journey today.</h4> -->
<p id="rec-events-title">
	If you're new in town, just passing through or call yourself 
	a local, we have recommended activities based on the weather to help you venture out into 
	Grand Rapids today...

		  </p> 
		  


<div class="slider-frame">



			<div class="button prev">
				<i class="fa fa-chevron-left" aria-hidden="true"></i>
			</div>
			<div class="button next">
				<i class="fa fa-chevron-right" aria-hidden="true"></i>
			</div>


			<div class="slider-container" id="top-search" >

				
					<div ng-repeat="item in $ctrl.grEvents"class="slide">
						<a href="{{item.website}}" target="_blank">
							<img class="slider-img" ng-src="{{item.img}}" alt="{{item.destination}}">
							<p class="bottom-destination">{{item.destination}}</p>
							<p class="bottom-summary">{{item.summary}}</p>			
						</a>	
					</div>
			</div>
</div>


</div>
  
  `, // or use templateUrl
	  controller: GrEvents,
	  bindings: {
		grEvents: "<"
	  }
  
  
    });
  
  
  
  
