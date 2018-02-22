// hideing the elements on scroll that we dont want to see

$(window).scroll(function () { 
    if ($(this).scrollTop() > 80) {
        $("#top").addClass("grid-hide-header");
        $("#header_content").hide(300);
        $("#search-trigger").hide();
    } else {
        $("#top").removeClass("grid-hide-header");
        $("#search-trigger").show();
        $("#header_content").show(300);
    }
});


// Initialize jRumble on Selector
    $(function(){
        $('#overlaytop').jrumble({
        x: 2,
        y: 2,
        rotation: 1
    });
    
    
   var demoStart=function(){
  
    $('#overlaytop').trigger('startRumble');
      
    };

    var demoStop = function(){
    $('#overlaytop').trigger('stopRumble');
    
    };
       $('#overlaytop').hover(function(){
        
        demoStart();
        $("#overlay1").animate({
        left: "-800px"
    },5000);
    $("#overlay2").animate({
        right: "-800px"
    },5000,function(){
        $('#overlaytop').hide(2000);
    });
    
        });
    
    });
 