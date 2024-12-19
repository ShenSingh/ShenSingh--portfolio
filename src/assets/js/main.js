(function() {
  "use strict";

  /**
   * Scroll to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

// move to the home-2 page
document.querySelector('#indexBtn').addEventListener('mouseover', function() {
  console.log('indexBtn clicked');
  window.location.href = 'Content.html';
});

// move to the home-1 page
document.querySelector('.btn-h').addEventListener('mouseover', function() {
  window.location.href = 'index.html';
});

document.querySelectorAll('.progress').forEach(function(progress) {
  let value = progress.getAttribute('data-value');
  let degree = (value / 100) * 360;
  progress.style.background = `conic-gradient(#00dfff ${degree}deg, #eee 0deg)`;
});

document.querySelectorAll('.progress').forEach(function(progress) {
  let value = progress.getAttribute('data-value');
  progress.style.width = `${value}%`;
});

// skill-icon



//////////////////////////////

$(window).scroll(function() {
  $('.fadedfx').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeIn");
    }
  });
});

});

///////////////////////////// toggle menu
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

window.addEventListener('resize', function() {
  const footerContainer = document.querySelector('.footer-container .cons');
  const col2 = document.querySelector('.footer-container .col2');
  const col3 = document.querySelector('.footer-container .col3');

  if (footerContainer && col2 && col3) {
    if (window.innerWidth <= 768) {
      footerContainer.insertBefore(col3, col2);
    } else {
      footerContainer.insertBefore(col2, col3);
    }
  }

  const footerContainerBlack = document.querySelector('.footer-container-black .cons');
  const col2Black = document.querySelector('.footer-container-black .col2');
  const col3Black = document.querySelector('.footer-container-black .col3');

  if (footerContainerBlack && col2Black && col3Black) {
    if (window.innerWidth <= 768) {
      footerContainerBlack.insertBefore(col3Black, col2Black);
    } else {
      footerContainerBlack.insertBefore(col2Black, col3Black);
    }
  }
});

// Initial check
window.dispatchEvent(new Event('resize'));