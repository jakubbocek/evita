$(function () {

	// Toggles Twitter Bootstrap hamburger class (cross)                    
	

    $(".filters").click(function(){
        $("#filters").toggle();
        return false;
    });
    
    if($('.hp__first_banner').length!=0)
    {    
        $('.hp__first_banner').slick({
            dots: true,
            arrows: true,
            cssEase: 'linear'
        });
    }
    
    if($('.slider__read').length!=0)
    {    
        $('.slider__read').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    if($('.slider__read__two').length!=0)
    {
        $('.slider__read__two').slick({
            arrows: true,
            //variableWidth: true,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });  
    }

    var slider = document.getElementById('slider');
//
    if($('noUiSlider').length!=0){
        noUiSlider.create(slider, {
            start: [0, 30],
            connect: true,
            range: {
                'min': 0,
                'max': 60
            }
        });


//
//        var value1 = document.getElementById('range1'),
//            value2 = document.getElementById('range2');
//
//        // When the slider value changes, update the input and span
    slider.noUiSlider.on('update', function( values, handle ) {
        if ( handle ) {
            $('#range__input2').val(values[handle]);
            $('#range2').text(Math.round(values[handle]));
            
        } else {                
            $('#range__input1').val(values[handle]);
            $('#range1').text(Math.round(values[handle]));
        }
    });
    }
//
//         //When the input changes, set the slider value
//        valueInput.addEventListener('change', function(){
//            range.noUiSlider.set([null, this.value]);
//        });

});