//debugger;
//Scroll Menu
//Start
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 100) {
		let element = document.getElementById("scr_header");
  		element.classList.add("scroll_header");
	} else if (scroll < 100) {
		let element = document.getElementById("scr_header");
		element.classList.remove("scroll_header");
	}
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 100) {
		let element = document.getElementById("header_nav_block");
  		element.classList.add("hide_header");
	} else if (scroll < 100) {
		let element = document.getElementById("header_nav_block");
		element.classList.remove("hide_header");
	}
});
//End


//Menu Burger
//Start
function burgerMenu() {
  let element = document.getElementById("burger_menu");
  element.classList.toggle("active");
}

function scrBurgerMenu() {
  let element = document.getElementById("scr_burger_menu");
  element.classList.toggle("scr_active");
}

function adaptivMenu() {
  let element = document.getElementById("scr_menu");
  element.classList.toggle("adaptiv");

  let elementA = document.getElementById("body");
  elementA.classList.toggle("body_block");
}
//End


//Scroll Indecator
//Start
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//End




//Slider
//Start
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
                  {
                    breakpoint: 1140,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1008,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                      dots: false,
                    }
                  }

                ]
  });
});
//End


//Loading
//Start
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
  }, 500);
}
//End


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});



const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300)
  
}
