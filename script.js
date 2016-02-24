$(document).ready(function(){
    
    $('.footerImage').hover(
        function(){
            $(this).animate({'opacity':'.5'}, 100);       
        },
        function() {
            $(this).animate({'opacity':'1'},100)
        }
    );
    
    $(".headerRowText").hover(
        function() {
            $(this).css("color", "White");        
        },
        function() {
            $(this).css("color", "#333333");    
        }
    );
    
    $('.headerRowText').click(function() {
            var currentInnerText = $(this).html();
            $('#bottomBody').fadeOut('fast');
            $('.footer').fadeOut('fast');
            $('#topBody').fadeToggle('slow', function(){
                if(currentInnerText === "About") {
                    /*Turn this visibility calls into functions*/
                    updateAndFade("BENJAMIN PINTER", "SOFTWARE DEVELOPER")
                    $('.footer').fadeIn();                                    
                } else if(currentInnerText === "Contact") {
                    /*Turn this visibility calls into functions*/
                    updateAndFade("Contact", "ben.david.pinter@gmail.com");
                    $('.footer').fadeOut();
                } else if(currentInnerText === "White Papers") {
                    /*Turn this visibility calls into functions*/
                    updateAndFade("White Papers", "Coming Soon!")
                    $('.footer').fadeOut();
                }
                $('#topBody').fadeIn('slow');
                $('#bottomBody').fadeIn('slow');
            });    
        }
    );
    
    
});

function updateAndFade (newTopBody, newBottomBody) {
    $('.footer').fadeOut();
    $('#bottomBody').fadeOut('slow', function () {
        $('#topBody').html(newTopBody);
        $('#bottomBody').html(newBottomBody);    
    });
};