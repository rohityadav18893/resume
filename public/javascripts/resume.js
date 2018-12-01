(function($) {
  // "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    
    switch($(this)[0].textContent){
      case 'About':
        document.getElementById('sideNav').style.background = "#BD5D38";
        break;
      case 'Experience':
        document.getElementById('sideNav').style.background = "#3d8c85";
        break;
      case 'Education':
        document.getElementById('sideNav').style.background = "#4f4e84";
        break;
      case 'Skills':
        document.getElementById('sideNav').style.background = "#7d4488";
        break;
      case 'Interests':
        document.getElementById('sideNav').style.background = "#a9425f";
        break;
      case 'Awards':
        document.getElementById('sideNav').style.background = "#59711f";
        break;
      default:
        document.getElementById('sideNav').style.background = "#a26406";
    }

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
