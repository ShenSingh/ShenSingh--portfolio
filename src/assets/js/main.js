(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

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
document.querySelector('.btn').addEventListener('mouseover', function() {
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

})();
