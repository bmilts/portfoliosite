$(document).ready(function() {

    // Jquery function for superslides   
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed('.typed', {
		strings: ["2:1 BSc Computer Science", "Python", "Unity Augmented Reality", "Android", "Blockchain", "IOS"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	
	
});

