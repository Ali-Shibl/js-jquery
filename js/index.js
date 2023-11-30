$(document).ready(function () {
   // darkMode 
   const inputElement = document.querySelector(".input")
   inputElement.checked = JSON.parse(localStorage.getItem('darkMode'))
   updateMode()
   function updateMode() {
      if (inputElement.checked) {
         document.body.style.backgroundColor = "black"
         document.body.style.color = "white"
      } else {
         document.body.style.backgroundColor = "white"
         document.body.style.color = "black"
      }
   }

   inputElement.addEventListener("input", () => {
      updateMode()
      localStorage.setItem("darkMode", JSON.stringify(inputElement.checked))
   })


   //nav down about
   let offset = $('#about').offset();
   let topAbout = offset.top;
   $(window).scroll(function () {
      let getScroll_top = $(window).scrollTop();
      if (getScroll_top > topAbout - 50) {
         $('.navbar').css('background-color', 'rgba(0, 0, 0,.8)');
         $('.navbar').css('padding-left', '40px');
         $('.navbar').css('padding-right', '40px');
         $('#btnUp').fadeIn(800);
      }
      else {
         $('.navbar').css('background-color', 'transparent');
         $('.navbar').css('padding-left', '0px');
         $('.navbar').css('padding-right', '0px');
         $('#btnUp').fadeOut(500);

      }

   });
   //links 
   $('a[href^="#"]').click(function (e) {
      let name = $(e.target).attr('href');
      let numberOffset = $(name).offset().top;
      $('html,body').animate({ scrollTop: numberOffset }, 800)

   });
   //buttonUp   
   $('#btnUp').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 800)

   });
   //loading   
   $('#loading .loader').fadeOut(2000, function () {
      $('#loading').hide(1000, function () {
         $('#loading').remove();
         $('body').css('overflow', 'auto')
         $('.header-content').slideDown(1000)

      });
   })
   //sidbar img,color   
   $('#sidbar i').click(function () {

      let boxWidth = $('#sidbar .box-color').outerWidth();
      if ($('#sidbar').css('left') == '0px') {
         $('#sidbar').animate({ left: `-${boxWidth}` }, 1500)
      } else {
         $('#sidbar').animate({ left: `0px` }, 1500)

      }

   })
   //play sidbar     
   let colorBox = $('.box-color span')
   colorBox.eq(0).css('background-color', 'chartreuse')
   colorBox.eq(1).css('background-color', 'slateblue')
   colorBox.eq(2).css('background-color', 'cadetblue')
   colorBox.eq(3).css('background-color', '#ca3d3d')
   colorBox.eq(4).css('background-color', 'black');
   colorBox.eq(5).css('background-color', '#10c2ea');

   colorBox.click(function (e) {
      let color = $(e.target).css('background-color')
      $('.change').css('color', color)
      $('.ser-content').css('box-shadow', `1px 2px 7px ${color}`)
      $('.img-ser').css('border', `2px solid ${color}`)
   })

   $('.box-color img').click(function (e) {
      let imgSrc = $(e.target).attr('src');
      $('header').css('background-image', `url(${imgSrc})`)
   })
   //mix
   var mixer = mixitup('#Courses .container-fluid', {

      animation: {
         duration: 300
      }
   });
   $('#Courses li button').click(function (e) {

      $(e.target).addClass('active');
      $('#Courses li button').not(e.target).removeClass('active');
   });

   //next ,prev ,close ,foucs  
   let images = Array.from(document.querySelectorAll("#Flip img"))
   let cartona = document.querySelector(".cartona")
   let box = document.querySelector(".box")
   let close = document.getElementById("close")
   let right = document.getElementById("right")
   let left = document.getElementById("left")
   let numberImage;
   for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function (e) {
         cartona.classList.remove("d-none")
         box.style.backgroundImage = `url(${e.target.getAttribute("src")})`
         numberImage = images.indexOf(e.target)

      })
   }

   close.addEventListener("click", function () {
      cartona.classList.add("d-none")
   })

   right.addEventListener("click", function () {
      numberImage++
      if (numberImage > images.length - 1) {
         numberImage = 0
      }
      box.style.backgroundImage = `url(${images[numberImage].getAttribute("src")})`

   })
   left.addEventListener("click", function () {
      numberImage--
      if (numberImage < 0) {
         numberImage = images.length - 1
      }
      box.style.backgroundImage = `url(${images[numberImage].getAttribute("src")})`

   })





});
