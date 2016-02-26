$(document).ready(function(){

    var intervalID = BeginTitleUpdater();

    $('.linksImage').hover(
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
            clearInterval(intervalID);
            $('#bottomBody').fadeOut('fast');
            $('.links').fadeOut('fast');

            $('#topBody').fadeToggle('slow', function(){
                if(currentInnerText === "About") {
                    FadeOutAndUpdateUpperLowerBodyText("BENJAMIN PINTER", "Software Developer")
                    $('.links').fadeIn();
                    intervalID =  BeginTitleUpdater();
                } else if(currentInnerText === "Contact") {
                    OutAndUpdateUpperLowerBodyText("Contact", "ben.david.pinter@gmail.com");
                    $('#bottomBody').fadeIn();
                } else if(currentInnerText === "White Papers") {
                    FadeOutAndUpdateUpperLowerBodyText("White Papers", "Coming Soon!");
                    $('#bottomBody').fadeIn();
                }
                $('#topBody').fadeIn('slow');
            });    
        }
    );
    
    
});

/*Support Functions and parameters*/

var titles = [
    "Software Developer"
    ,"Freemason"
    ,"Certified Systems Integrator"
    ,"Tennis Player"
    ,"Gamer"
];

function FadeOutAndUpdateUpperLowerBodyText (newTopBody, newBottomBody) {
    $('#bottomBody').fadeOut('slow', function () {
        updateElementText($('#topBody'), newTopBody);
        updateElementText($('#bottomBody'), newBottomBody);
    });
};
        
function updateElementText (directive, newText) {
    $(directive).html(newText)
};


function BeginTitleUpdater(){
    var i = 0;
    return setInterval(function() {$('#bottomBody').fadeToggle("slow", function() {
        i++;
        if(i >= titles.length){
            i = 0;
            updateElementText($('#bottomBody'), titles[i]);
            $('#bottomBody').fadeIn();
        } else{
            updateElementText($('#bottomBody'), titles[i]);
            $('#bottomBody').fadeIn();
        }

    })}, 3000);
}





