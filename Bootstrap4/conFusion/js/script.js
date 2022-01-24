$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#loginModalButton").click(function(){
        $("#loginModal").modal("show");
    });

    $("#loginModalCloseButton").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#loginModalCancelButton").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#reserveTableButton").click(function(){
        $("#reserveTableModal").modal("show");
    });

    $("#reserveTableCloseButton").click(function(){
        $("#reserveTableModal").modal("hide");
    });

    $("#reserveTableCancelButton").click(function(){
        $("#reserveTableModal").modal("hide");
    }); 
});