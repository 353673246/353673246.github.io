$(function(){
    // console.log($('.section1').find('.ip1-f1'));
	$('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		scrollingSpeed:2000,
		continuousVertical: true,
		'navigation': true,
		afterLoad: function(anchorLink, index){
            if(index == 1){
                
				$('.ip1-f2').addClass('active-f2-show').removeClass('active-f2-hidden')
				$('.ip1-f1').removeClass('active-f1-hidden trans-f1')
				setTimeout(function(){
					$('.ip1-f1').addClass('active-f1-show')					
				},2000)
				
            }
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				// $('.section2').find('p').delay(5000).addClass('text')
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
            if(index == 1){
				$('.ip1-f2').addClass('active-f2-hidden').removeClass('active-f2-show')
				$('.ip1-f1').addClass('active-f1-hidden').removeClass('active-f1-show')
            }
			if(index == '2'){
				$('.section2').find('p').animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
	});
});