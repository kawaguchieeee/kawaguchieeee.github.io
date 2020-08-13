const typing = (element, sentence) => {
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
    }, 250 * ++index);
  });
}

typing('#typing', 'I\'m \"A\"ki.');


/* Nav animation
------------------------
----------------------*/
// window.addEventListener("scroll", function () {
//   let scroll = document.documentElement.scrollTop;
//   document.getElementById("scrollvalue").textContent = scroll;

//   if (scroll > 725) {
//     document.querySelector("nav").classList.add("nav");
//   } else {
//     document.querySelector("nav").classList.remove("nav");
//   }
// });

/* Pagepiling
------------------------
----------------------*/
$(document).ready(function () {
  $('#pagepiling').pagepiling({
    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
    navigation: {
      'position': 'right',
      'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
    }
  });
});
