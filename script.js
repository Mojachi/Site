$(document).ready(function(){
    $('.footerImage').hover(
        function(){
            $(this).animate({'opacity':'.5'}, 100);        
        },
        function() {
            $(this).animate({'opacity':'1'},100)
        }
    );
});