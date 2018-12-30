$(document).ready(function() {

    // Jquery function for superslides   
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed('.typed', {
		strings: ["2:1 BSc Computer Science", "Python", "Unity Augmented Reality", "Android", "Blockchain", "IOS"],
		typeSpeed: 110,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 6,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        938:{
	            items:6
	        }
	    }
	});
	
   
    
    // Get position of the element to offset
    var skillsTopOffset = $(".skillSection").offset().top;
    
    // Window scroll event
    $(window).scroll(function(){
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
    		 $('.chart').easyPieChart({
		        //your options goes here
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent){
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		        
		  });
    	}	
    });
	
});

