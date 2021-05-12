$(document).ready(function(){
    $("#objective").click(function(){
        $("#p1").toggle();
    });       
});


// others activities

$(document).ready(function(){
    $("#write").click(function(){
        $("#p2").toggle();
        // $("#para2").hide();
        $("#p3").hide();
        $("#p4").hide();

        // $("#para2").hide();
        $("#p3").hide();
        $("#p4").hide();
    }); 
    
    $("#write1").click(function(){
        $("#p3").toggle();
        $("#p2").hide();
        $("#p4").hide();

        $("#p2").hide();
        $("#p4").hide();

    });  

    $("#write2").click(function(){
        $("#p4").toggle();
        $("#p2").hide();
        $("#p3").hide();

        $("#p2").hide();
        $("#p3").hide();

    });  
});

$(document).ready(function(){
    $("#finalP").click(function(){
        $("#p5").toggle();
        $("#p6").hide();
        $("#p7").hide();
    });

    $("#front").click(function(){
        $("#p6").toggle();
        $("#p5").hide();
        $("#p7").hide();
    });
});

$(document).ready(function(){
    $("#folio").click(function(){
        $("#abt").slideToggle();
    });

    $("#folio").click(function(){
        $("#abt1").slideToggle();
    });

    $("#folio").click(function(){
        $("#abt2").slideToggle();
    });
});


