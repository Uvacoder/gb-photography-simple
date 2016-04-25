
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
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      preload: [0, 2],
      navigateByImgClick: true,
    }
  });

  $(".gallery__image").unveil(200);

})(jQuery);
