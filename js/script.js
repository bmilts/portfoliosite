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
    
    var statsTopOffset = $(".statSection").offset().top;
    
    var countUpFinished = false;
    
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
    	
    	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
    		// Add counter to all elements with .counter class
		    $(".counter").each(function(){
		    	var element = $(this);
		    	var endVal = parseInt(element.text());
		    	
		    	element.countup(endVal);
		    });
		    
		    countUpFinished = true;
    	}
    	
	});
    
    //  Fancybox plugin used for displaying full screen images in site
    $("[data-fancybox]").fancybox();
    
    // Isotope for displaying pictures
    $(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });
    
    // Isotope plugin use for filtering pictures
    $("#filters a").click(function(){
    	
    	// Change from element current
    	// Access current
    	$("filters .current").removeClass("current");
    	// This refers to current so current button clicked, add class current
    	$(this).addClass("current");
    	
    	var selector = $(this).attr("data-filter");
    	
	    // Isotope for displaying pictures
	    $(".items").isotope({
	    	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });
	    
	    // No more actions
	    return false;
	    
    });
	
});

