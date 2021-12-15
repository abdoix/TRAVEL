$(document).ready(()=>{
    
    $('.dater').hide();
    $('.section_fly').hide();

    $('.bed').click(()=>{
        $('.trans_effect').css('left','3%');
        $('.bed i').css('color','linear-gradient(135deg,#e55e0d 0%,#cf3218 100%');
        // $('.flight i').css('color','#000');
        // $('.bed i').css('color','#e55e0d');
        $('.section_fly').hide();
        $('.section_bed').show();
        $('.w-r').text('Open');
    })
    $('.flight').click(()=>{
        $('.trans_effect').css('left','50%');
        // $('.bed i').css('color','#000');
        // $('.flight i').css('color','#e55e0d');
        $('.section_bed').hide();
        $('.section_fly').show();
        $('.w-r').text('One-way');
        
    })
    //flyslide
    $('.fly-next').click(()=>{
        $('.fly-deck').scrollLeft($('.fly-deck').scrollLeft()+320);
        
    })
    $('.fly-next').dblclick(()=>{
        $('.fly-deck').scrollLeft(100000);
    })
    $('.fly-prev').click(()=>{
        $('.fly-deck').scrollLeft($('.fly-deck').scrollLeft()-320);
    })
    $('.fly-prev').dblclick(()=>{
        $('.fly-deck').scrollLeft(0);
    })
    //bedslide
    $('.bed-next').click(()=>{
        $('.bed-deck').scrollLeft($('.bed-deck').scrollLeft()+320);
        
    })
    $('.bed-next').dblclick(()=>{
        $('.bed-deck').scrollLeft(100000);
    })
    $('.bed-prev').click(()=>{
        $('.bed-deck').scrollLeft($('.bed-deck').scrollLeft()-320);
    })
    $('.fly-prev').dblclick(()=>{
        $('.bed-deck').scrollLeft(0);
    })
    $('.display-return').click(()=>{
        $('.dater').show(300);
        $('.w-r').text('Return');
    })
    $('.display-w').click(()=>{
        $('.dater').hide(300)
        $('.w-r').text('One-way');
    })
    $('.display-c').click(()=>{
        $('.dater').show(300);
        $('.w-r').text('Checked');
    })
    $('.display-o').click(()=>{
        $('.dater').hide(300)
        $('.w-r').text('Open');
    })
    $('.heart').click(function(){
        $('#ModalHEART').find('.modal-body').find('img').attr('src',$(this).parent().siblings('img').attr('src'));
        $('#ModalHEART').find('.modal-body').find('p').text($(this).parent().parent().find('.card-text').text());
        $('#ModalHEART').find('.modal-body').find('h4').text($(this).parent().parent().find('.card-title').text());
        $(this).toggleClass('text-danger');
        $(this).toggleClass('display-4');
        setTimeout(() => {
            $(this).toggleClass('display-4');
        }, 1000);
    })
    $('.baricon').click(function(){
        $('.sidebar').toggleClass('baractive');
        $('.sidebar').find('span').toggleClass('spnhide');
    })
    $('.card').dblclick(function(){
        $('#ModalHEART').find('.modal-body').find('img').attr('src',$(this).find('img').attr('src'));
        $('#ModalHEART').find('.modal-body').find('p').text($(this).find('.card-text').text());
        $('#ModalHEART').find('.modal-body').find('h4').text($(this).find('.card-title').text());
        //$('#ModalHEART').find('.modal-body').find('img').attr('src',$(this).parent().siblings('img').attr('src'));
        $(this).find('.heart').toggleClass('text-danger');
        $(this).find('.heart').toggleClass('display-4');
        setTimeout(() => {
            $(this).find('.heart').toggleClass('display-4');
        }, 1000);
    })
    
    $('.fly-header-btn').click(()=>{
        document.getElementById('scrl').scrollIntoView();
    })
    $('.bed-header-btn').click(()=>{
        document.getElementById('scr2').scrollIntoView();
    })
    $('.dropdown-item').click(()=>{
        $(this).toggleClass('display-1');
        $(this).parent('.dropdown-menu').show();
    })

    //$('.heart').click(function(){
        //$('#ModalHEART').find('.modal-body').find('img').attr('src',$(this).parent().siblings('img').attr('src'));
    //})

})





//increment decrement
function increment(e) {
    e.previousElementSibling.stepUp();
 }
 function decrement(e) {
    e.nextElementSibling.stepDown();
 }




//dcroll to top
 $(window).scroll(function() {
    if ($(this).scrollTop() >= 300) 
    {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } 
    else 
    {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


function inpt(thesame,progress) {
    thesame.value.length == thesame.getAttribute('maxlength') ? thesame.style.background = 'rgba(255, 0, 0, 0.144)' :  thesame.style.background = 'rgba(202, 202, 255, 0.333)';
    let valprog =thesame.value.length*97/thesame.getAttribute('maxlength');
    progress == 'p1' ? document.querySelector('.p1').style.width = valprog+'%' : document.querySelector('.p2').style.width = valprog+'%';
} 






const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('concon');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});