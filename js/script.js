// Website loader code
$(window).on("load", function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});
	
	// Isotope for displaying pictures
    $(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });
});

$(document).ready(function() {

    // Jquery function for superslides   
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed('.typed', {
		strings: ["2:1 BSc Computer Science", "Javascript", "PHP", "MYSQL", "Python", "Unity Augmented Reality", "Java", "Android","Blockchain", "IOS"],
		typeSpeed: 150,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	
	// Skill section carousel
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
    
    // Smooth transition from Nav to Link
    $("#navigation li a").click(function(e){
    	e.preventDefault();
    	
    	// Get href attribute of item clicked on
    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;
    	
    	// Animate 
    	$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });
    
    // Sticky Navigation menu
    const nav = $("#navigation");
    // nav bar position
    const navTop = nav.offset().top;
	
	// When window is called call stickyNavigation
	$(window).on("scroll", stickyNavigation);
	
	function stickyNavigation() {
		
		var body = $("body");
		
		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
});

