var nav = document.getElementById('nav'),
s1 = document.getElementById('s1'),
s2 = document.getElementById('s2'),
s3 = document.getElementById('s3'),
counter1 = 0,counter2=20000,counter3=0;

$(document).ready(()=>{
  $('.load').fadeOut(1000)
})

window.addEventListener('scroll', ()=>{
  let value = window.scrollY
  console.log(value)
  nav.classList.toggle('scroll',value > 400)

  if (value> 100) {
    $('.d1').css({
      "transform":" translateX(0)"
    })
  }
  if(value> 1000){
    $('.translatY').css({
      "transform":" translateY(0)"
    })
  }
  //----
  if(value> 1900){
    $('.translatY1').css({
      "transform":" translateY(0)"
    })
  }
  if(value> 2400){
    $('.translatY2').css({
      "transform":" translateY(0)"
    })
  }
  if(value> 3880){
    $('.translatY3').css({
      "transform":" translateY(0)"
    })
  }
  if(value> 4600){
    $('.translatY4').css({
      "transform":" translateY(0)"
    })
  }
  if(value> 5565){
    $('.translatY5').css({
      "transform":" translateY(0)"
    })
  }
})

var val1= setInterval(()=>{
  s1.innerHTML = ++counter1;
  if(counter1 == 300)
   clearInterval(val1)
},10)

var val2= setInterval(()=>{
  s2.innerHTML = ++counter2;
  if(counter2 == 21000)
   clearInterval(val2)
},1)

var val3= setInterval(()=>{
  s3.innerHTML = ++counter3;
  if(counter3 == 200)
   clearInterval(val3)
},10)

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})

$('#show').click(()=>{
  $('#menu').slideToggle(1000)
})