$(document).ready(function(){
    // Initialize jRumble on Selector
    
     
   $('#overlaywrrap').hover(function(){
    $('#overlaytop').trigger('startRumble');
    $("#overlay1").animate({
        left: "-1000px"
    },5000);
    $("#overlay2").animate({
        right: "-1000px"
    },5000);
    $("#overlaytop").hide(2000);
    }, function(){
    $('#overlaytop').trigger('stopRumble');
    });
    
  
 /*jQuery.noConflict();

    jQuery(function () {
        jQuery('#overlaytop').jrumble({
            x: 0,
            y: 2,
            rotation: 1
        });
        jQuery('#header').hover(function () {
            jQuery(this).trigger('startRumble');
        }, function () {
            jQuery(this).trigger('stopRumble');
        });
    });

   */ 
    
    
});
