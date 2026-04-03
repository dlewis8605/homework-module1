$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightbox-toggle').click(function(e){
        e.preventDefault(); // Prevent default anchor behavior
        
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        // Clone the clicked image
        var img = $(this).find('img').clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});
