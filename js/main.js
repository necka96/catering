var t1 = gsap.timeline({ paused: true });
var t2 = gsap.timeline({ paused: true });
var t3 = gsap.timeline();
var menuToggle = document.getElementById("menuToggle");
var menuBar = gsap.timeline();
var text = document.querySelector("h1");
char = document.querySelectorAll("h1 span");
replaceChar = text.querySelectorAll('h1 span:not([data-char="."])');
menuBar.to(
  ".bar-1",
  0.5,
  {
    attr: { d: "M8,2 L2,8" },
    x: 1,
    ease: Power2.easeInOut,
  },
  "start"
);
menuBar.to(
  ".bar-2",
  0.5,
  {
    autoAlpha: 0,
  },
  "start"
);
menuBar.to(
  ".bar-3",
  0.5,
  {
    attr: { d: "M8,8 L2,2" },
    x: 1,
    ease: Power2.easeInOut,
  },
  "start"
);

menuToggle.addEventListener("click", function () {
  menuBar.reversed(!menuBar.reversed());
  t1.reversed(!t1.reversed());
  t2.reversed(!t2.reversed());
});
menuBar.reverse();
t1.reverse();
t2.reverse();
t1.to(".fullpage-menu", {
  duration: 0,
  display: "block",
  ease: "Expo.easeInOut",
});
t1.from(".menu-bg span", {
  duration: 1,
  x: "100%",
  stagger: 0.1,
  ease: "Expo.easeInOut",
});
t1.from(
  ".main-menu li a ",
  {
    duration: 1.5,
    y: "110%",
    stagger: 0.1,
    ease: "Expo.easeInOut",
  },
  "-=0.5"
);
t2.from(
  ".social-links li ",
  {
    duration: 2,
    y: "-100%",
    opacity: 0,
    stagger: 0.1,
    ease: "Expo.easeInOut",
  },
  "-=0.5"
);
t3.set(char, {
  yPercent: -110,
});
t3.set(text, {
  autoAlpha: 1,
});
t3.to(char, {
  duration: 1,
  yPercent: 0,
  stagger: 0.05,
  ease: "expo.inOut",
}).to(replaceChar, {
  duration: 1,
  yPercent: 110,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true,
  stagger: 0.1,
});

// const counters = document.querySelectorAll(".counter")
// const speed = 100

// counters.forEach(counters => {
//     const updateCounter = () =>{
//         const target = +counters.getAttribute("data-target")
//         const count = +counters.innerText

//         const inc = target / speed
//         if(count < target){
//             counters.innerText = Math.ceil(count + inc)
//             setTimeout(updateCounter, 1)
//         }else{
//             count.innerText = target
//         }
//     }
//     updateCounter()
// })

var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
var swiper = new Swiper(".testemonial-swiper", {
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
});
$(document).ready(function () {
  $("#date").html(new Date().getFullYear());
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".menu").addClass("active");
  } else {
    $(".menu").removeClass("active");
  }
});

$(function () {
  var $grid = $("#tp-grid");
  $name = $("#name");
  $close = $("#close ");
  $loader = $("").insertBefore($grid);
  stapel = $grid.stapel({
    randomAngle: true,
    delay: 50,
    gutter: 70,
    pileAngles: 5,
    onLoad: function () {
      $loader.remove();
    },
    onBeforeOpen: function (pileName) {
      $name.html(pileName);
    },
    onAfterOpen: function (pileName) {
      $close.show();
    },
  });
  $close.on("click", function () {
    $close.hide();
    $name.empty();
    stapel.closePile();
  });
});
function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhone(phone) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
}
$("#submitForm").click(function () {
  if ($("#name").val() == "") {
    $("#name").css("border", "1px solid red");
    $("#first-name").text("unesite ime");
    $("#one").addClass("active");
    return false;
  } else {
    $("#name").css("border", "1px solid black");
    $("#first-name").text("");
    $("#one").removeClass("active");
  }

  if ($("#surname").val() == "") {
    $("#surname").css("border", "1px solid red");
    $("#last-name").text("unesite prezime");
    $("#two").addClass("active");
    return false;
  } else {
    $("#surname").css("border", "1px solid black");
    $("#last-name").text("");
    $("#two").removeClass("active");
  }

  if ($("#email").val() == "") {
    $("#email").css("border", "1px solid red");
    $("#email-text").text("unesite mejl");
    $("#three").addClass("active");
    return false;
  }

  if ($("#email").val() != "") {
    var email = $("#email").val();
    if (!validateEmail(email)) {
      $("#email-text").text("unesite mejl sa pravilnim znakovima");
      return false;
    }
  } else {
    $("#email").css("border", "1px solid black");
    $("#email-text").text("");
    $("#three").removeClass("active");
  }
  if ($("#number").val() == "") {
    $("#number").css("border", "1px solid red");
    $("#number-text").text("unesite broj telefona");
    $("#four").addClass("active");
    return false;
  }
  if ($("#number").val() != "") {
    var number = $("#number").val();
    if (!validatePhone(number)) {
      $("#number-text").text("unesite ispavan broj");
      return false;
    }
  } else {
    $("#number").css("border", "1px solid black");
    $("#number-text").text("");
    $("#four").removeClass("active");
  }
  if ($("#area").val() == "") {
    $("#area").css("border", "1px solid red");
    $("#area-text").text("napisite poruku");
    $("#five").addClass("active");
    return false;
  } else {
    $("#area").css("border", "1px solid black");
    $("#area-text").text("");
    $("#five").removeClass("active");
  }
});
