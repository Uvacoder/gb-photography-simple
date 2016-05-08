
(function ($) {
  'use strict'

  // var options = {
  //   prefetch: true,
  //   cacheLength: 2,
  //   onStart: {
  //     duration: 500, // Duration of our animation
  //     render: function ($container) {
  //       // Add your CSS animation reversing class
  //       $container.addClass('is-exiting');

  //       // Restart your animation
  //       smoothState.restartCSSAnimations();
  //     }
  //   },
  //   onReady: {
  //     duration: 0,
  //     render: function ($container, $newContent) {
  //       // Remove your CSS animation reversing class
  //       $container.removeClass('is-exiting');

  //       // Inject the new content
  //       $container.html($newContent);

  //     }
  //   }
  // },
  // smoothState = $('#main').smoothState(options).data('smoothState');

  $('.gallery').magnificPopup({
    delegate: 'img',
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-fade',
    gallery: {
      enabled: true,
      preload: [0, 2],
      navigateByImgClick: true,
    }
  });

  $('.nav-toggle').on('click', function(e) {
    e.preventDefault();

    $('.nav').toggleClass('is-visible');
  });

  $(document).on('ready', function() {  
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    $(".gallery__image").unveil(200, function() {

      // Update the document height when our images are loaded in.
      $(this).load(function() {
        docHeight = $(document).height();
      });
    });

    $(document).on('scroll', function(){
      max = docHeight - winHeight;
      progressBar.attr('max', max);

      value = $(window).scrollTop();
      progressBar.attr('value', value);
    });
  });

  if ($(".gallery").length) {
    var $stickyNav = $('.sticky-nav');

    var waypoint = new Waypoint({
      element: document.getElementById('album-cover__type'),
      handler: function(direction) {
        if (direction === 'down') {
          $stickyNav.addClass('is-visible');
        }
        else if (direction === 'up') {
          $stickyNav.removeClass('is-visible');
        }
      }
    })

    var waypoint = new Waypoint({
      element: document.getElementById('next-album'),
      handler: function(direction) {
        if (direction === 'down') {
          $stickyNav.addClass('album-finished');
        }
        else if (direction === 'up') {
          $stickyNav.removeClass('album-finished');
        }
      }
    })
  }

})(jQuery);
