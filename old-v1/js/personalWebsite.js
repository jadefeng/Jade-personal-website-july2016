$(document).ready(function() {
    carousel.create(
        $('#expCarousel'),
        {
            width: 0.5, // The distance from the centre of the left-most child
                        // to the right-most child is 50% of the carousel div
		    height: 0.35,

            speed: 1  // 1.5 revolutions per second when the mouse is on the
                        // left or right edge
        })	

})