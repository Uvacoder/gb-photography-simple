
(function ($) {
  'use strict'

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

    // Initiate objectFill Polyfill
    $(function () { objectFitImages() });

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

  // Barba Transitions
  // var Homepage = Barba.BaseView.extend({
  //   namespace: 'homepage',
  //   onEnter: function() {
  //   },
  //   onEnterCompleted: function() {
  //   },
  //   onLeave: function() {
  //   },
  //   onLeaveCompleted: function() {
  //   }
  // });
  // // Initialize the view.
  // Homepage.init();

  // var Work = Barba.BaseView.extend({
  //   namespace: 'work',
  //   onEnter: function() {
  //   },
  //   onEnterCompleted: function() {
  //   },
  //   onLeave: function() {
  //   },
  //   onLeaveCompleted: function() {
  //   }
  // });
  // // Initialize the view.
  // Work.init();

  // // var HomeTransition = Barba.BaseTransition.extend({
  // //   start: function() {
  // //     Promise
  // //       .all([this.newContainerLoading, this.fadeOut()])
  // //       .then(this.fadeIn.bind(this));
  // //   },

  // //   fadeOut: function() {
  // //     return $(this.oldContainer).animate({ opacity: 0 }).promise();
  // //   },

  // //   fadeIn: function() {
  // //     var _this = this;
  // //     var $el = $(this.newContainer);
  // //     var $heroTitle = $el.find('.subhero-content');
  // //     var $heroImage = $el.find('.hero-image');
  // //     var $secondHeroImage = $el.find('.hero-image--second');
  // //     var $callout = $el.find('.callout');

  // //     $(this.oldContainer).hide();

  // //     // $el.css({
  // //     //   visibility : 'visible',
  // //     //   opacity : 0
  // //     // });

  // //     $el.css({'visibility': 'visible'});

  // //     $callout.find('.callout').css({
  // //       'scale' : 'scaleX(0)'
  // //     });

  // //     $heroImage.find('.hero-image').css({
  // //       'opacity' : '0'
  // //     });

  // //     $heroTitle.find('.subhero-content').css({
  // //       'opacity' : '0'
  // //     });

  // //     $callout.animate({ 'transform' : 'scaleX(1)' }, 600, function() {
  // //       $secondHeroImage.animate({ 'opacity' : '1' }, 500);
  // //       $heroImage.animate({ 'opacity' : '1' }, 400);
  // //       $callout.animate({ 'opacity' : '1' }, 400);
  // //       _this.done();
  // //     });
  // //   }
  // // });

  // var HideShowTransition = Barba.BaseTransition.extend({
  //   start: function() {
  //     this.newContainerLoading.then(this.hideShow.bind(this));
  //   },

  //   hideShow: function() {
  //     //this.oldContainer.style.visibility = 'hidden';
  //     $(this.oldContainer).animate({ opacity: 0 }, 400);
  //     this.newContainer.style.visibility = 'visible';
  //     document.body.scrollTop = 0;

  //     this.done();
  //   }
  // });

  // var HomeTransition = Barba.BaseTransition.extend({
  //   start: function() {
  //     this.newContainerLoading.then(this.hideShow.bind(this));
  //   },

  //   hideShow: function() {
  //     var _this = this;
  //     var $el = $(this.newContainer);
  //     var $heroTitle = $el.find('.subhero-content');
  //     var $heroImage = $el.find('.hero-image');
  //     var $secondHeroImage = $el.find('.hero-image--second');
  //     var $callout = $el.find('.callout');

  //     //this.oldContainer.style.visibility = 'hidden';
  //     $(this.oldContainer).animate({ opacity: 0 }, 400);
  //     this.newContainer.style.visibility = 'visible';
  //     document.body.scrollTop = 0;

  //     $callout.find('.callout').css({
  //       'scale' : 'scaleX(0)'
  //     });

  //     $heroImage.find('.hero-image').css({
  //       'opacity' : '0'
  //     });

  //     $heroTitle.find('.subhero-content').css({
  //       'opacity' : '0'
  //     });

  //     $callout.animate({ 'transform' : 'scaleX(1)' }, 600, function() {
  //       $secondHeroImage.animate({ 'opacity' : '1' }, 500);
  //       $heroImage.animate({ 'opacity' : '1' }, 400);
  //       $callout.animate({ 'opacity' : '1' }, 400);
  //       _this.done();
  //     });
  //   }
  // });

  // Barba.Pjax.getTransition = function() {
  //   var transitionObj;

  //   if (Barba.HistoryManager.currentStatus().namespace === 'homepage') {
  //     transitionObj = HomeTransition;
  //   }
  //   else {
  //     transitionObj = HideShowTransition;
  //   }

  //   return transitionObj;
  // };

  // Barba.Pjax.start();

  // Carousel
  if ($('.section--homepage').length) {
    var sliderDotAmount = 3;
    var $feature = $('.section--homepage');

    // Loop through in case we want multiple sliders.
    $feature.each(function() {
      var $this = $(this);
      var $slider = $this.find('.slider');
      var dotElements = $this.find('.slider__dot');
      var indicatorElement = $this.find('.slider__indicator');
      var recentWorkItem = $this.find('.recent-work-list li');
      var activeSlide;

      // Clicking on the items will update the carousel.
      dotElements.on('click', function(e) {
        e.preventDefault();
        var dotCTX = $(this);
        UpdatePosition(dotCTX);
      });

      // Hover on recent work items will update the carousel.
      recentWorkItem.hover(function() {
        var dotCTX = $(this);
        UpdatePosition(dotCTX);
      })

      // Updates the slider to move to the active position.
      function UpdatePosition(dotCTX) {
        var currentPosition = $slider.attr('data-pos');
        var newPosition = dotCTX.attr('data-pos');
        var newDirection = newPosition > currentPosition ? 'right' : 'left';
        var currentDirection = newPosition < currentPosition ? 'right' : 'left';
        var $sliderSlide = $slider.find('.slider__slide');

        if (dotCTX.attr('data-pos') != currentPosition) {
          indicatorElement.removeClass('slider__indicator--' + currentDirection);
          indicatorElement.addClass('slider__indicator--' + newDirection);
          $slider.attr('data-pos', newPosition);
          activeSlide = $slider.find('.is-active');
          activeSlide.removeClass('is-active').addClass('is-hidden');

          activeSlide.delay(1200).queue(function() {  // Wait for 1 second.
            $(this).removeClass('is-hidden').dequeue();
          });

          $sliderSlide.each(function() {

            if ($(this).attr('data-pos') === newPosition) {
              $(this).addClass('is-active');
            }
          });
        }
      }
    });
  }

})(jQuery);
