$(function(){

    $('.scrollContainer > .panel').click(function(){
        $('.scrollContainer').css('left',this.getAttribute("left")+'px')
        $(this).css('width','400px')
        $(this).siblings().css('width','280px')
    })

    console.log($('.ip4-btn1'))
    $('.ip4-btn1').click(function(){
        console.log($(this));
        $(this).addClass('ip4-btn1-show')
        $('.ip4-btn2').addClass('ip4-btn2-hidden')
        $('.ip4-t1-con').addClass('select')
        $('.ip4-t2-con').removeClass('select')
        $('.section4').css('background','url(http://tidg.westsg.com.cn/images/index-bg4-2.jpg) 50%')
    })
    $('.ip4-btn2').click(function(){
        console.log($(this));
        $(this).removeClass('ip4-btn2-hidden')
        $('.ip4-btn1').removeClass('ip4-btn1-show')
        $('.ip4-t2-con').addClass('select')
        $('.ip4-t1-con').removeClass('select')
        $('.section4').css('background','url(http://tidg.westsg.com.cn/images/index-bg4.jpg) 50%')
        // $('.ip4-btn2').addClass('ip4-btn2-hidden')
    })

    // console.log($('.slider .left'));
    // console.log($('.slider .right'));
    console.log($('.panel').splice(1,4));
    var scrollContainer = document.getElementsByClassName('scrollContainer')
    $('.slider .left').click(function(){

        if(scrollContainer[0].style.left === '-22px'){
            $('.panel')[0].style.width = '400px';
            $('.panel')[1].style.width = '280px';
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) + 328 + 'px'
            // console.log($('.panel')[1,2,3]);
        }
        else if(scrollContainer[0].style.left === '-350px'){
            $('.panel')[1].style.width = '400px'
            $('.panel')[2].style.width = '280px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) + 328 + 'px'

        }
        else if(scrollContainer[0].style.left === '-678px'){
            $('.panel')[2].style.width = '400px'
            $('.panel')[3].style.width = '280px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) + 328 + 'px'
        }
        else if(scrollContainer[0].style.left === '-1006px'){
            $('.panel')[3].style.width = '400px'
            $('.panel')[4].style.width = '280px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) + 328 + 'px'
        }
        // console.log($(this));
        // console.log(scrollContainer[0].style.left)
        
    })
    $('.slider .right').click(function(){
        console.log(scrollContainer[0].style.left);
        if(scrollContainer[0].style.left === '306px'){
            // console.log(first);
            $('.panel')[0].style.width = '280px'
            $('.panel')[1].style.width = '400px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) - 328 + 'px'
        }
        else if(scrollContainer[0].style.left === '-22px'){
            $('.panel')[1].style.width = '280px'
            $('.panel')[2].style.width = '400px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) - 328 + 'px'
        }
        else if(scrollContainer[0].style.left == '-350px'){
            $('.panel')[2].style.width = '280px'
            $('.panel')[3].style.width = '400px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) - 328 + 'px'
        }
        else if(scrollContainer[0].style.left == '-678px'){
            $('.panel')[3].style.width = '280px'
            $('.panel')[4].style.width = '400px'
            scrollContainer[0].style.left = parseInt(scrollContainer[0].style.left) - 328 + 'px'
        }
        
        // if()
        
    })













    setTimeout(function(){					
        $('.ip1-f2').addClass('trans-f2')					
    },2000)
    setTimeout(function(){
        $('.ip1-f1').addClass('trans-f1')					
    },4000)
})