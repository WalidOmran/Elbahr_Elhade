$(document).ready(function(){
let owlOption = {
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
};

$('.lan-btn').click(function () {
    $('body').toggleClass('rtl');
    
});
if(!$('body').hasClass('rtl')) {
        owlOption.rtl = false;
        $('.slider').owlCarousel(owlOption);
    } else {
        owlOption.rtl = true;
        $('.slider').owlCarousel(owlOption);
    }

$('.loop').owlCarousel({
    rtl: true,
    responsive:{
        0: {
            center: true,
            items: 1.5,
            margin: 15,
            loop: true,
            dots: false
        },
        992: {
            center: false,
            items: 3,
            loop: false,
            margin: 65,
       }

    }
});
    $("#contact").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "من فصلك ادخل اسمك بالكامل"
            },
            email: {
                required: "من فصلك ادخل بريدك الالكترونى"
            },
            message: {
                required: "من فصلك ادخل الرساله"
            }
        }
    });

});

