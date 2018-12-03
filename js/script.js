$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('header').addClass('fixed');
        }
        else{
            $('header').removeClass('fixed');
        }
    })
    $('.menuCollapse .collapse button').on('click',function(){
        $('.menuCollapse .menu ul li').toggle(
            // {
            //     'margin-top':'-30px',
            //     'transition':'all 2s'
               
            // }
            "slow"
        )
    })
})