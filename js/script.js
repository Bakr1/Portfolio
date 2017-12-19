$(".parallax-tablet").css('margin-top', '0%')

if (window.innerWidth >= 768) {
  $('.tablet-img').css('margin-top', '-3%')
}
$('.effect').bind("keyup", function() {
  this.setAttribute('value', this.value);
})


//ANOTHER SCREED SCROLLING (OBJECTS)
var moveItItem = function(el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
  this.el.css('transform', 'translateY(' + -(scrollTop / (this.speed * 1.5)) + 'px)');

  $('.left-arm').css('transform', 'translateY(' + -(scrollTop / (this.speed * 3)) + 'px)' + 'rotate' + '(-60deg)');
  $('.left-arm').css('margin-top', '30' + 'px')

  $('.right-arm').css('transform', 'translateY(' + -(scrollTop / (this.speed * 3)) + 'px)' + 'rotate' + '(60deg)', 'background-image', 'url()');
  $('.right-arm').css('margin-top', '30' + 'px')

  $('.bottom-arm').css('transform', 'translateY(' + -(scrollTop / (this.speed * 3)) + 'px)');
  $('.bottom-arm').css('margin-top', '30' + 'px')

};



if (window.innerWidth > 700) {
  // Initialization
  $(function() {
    $('[data-scroll-speed]').moveIt();
  });
}

// SPEED SCROLLING
$.fn.moveIt = function() {
  var $window = $(window);
  var instances = [];

  $(this).each(function() {
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function() {
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst) {
      inst.update(scrollTop);
    });
  }
}






$('.slider').removeClass('slider-flex');
$('.slide').removeClass('slide-responsive')
$('.slider').slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  speed: 400,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  focusOnSelect: true,
  responsive: [{

    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }

  }]
});

// synchronizacja formularzy
$('#footer-form__name').keyup(function() {
  $('#popup-form__name').val($(this).val());
});
$('#footer-form__mail').keyup(function() {
  $('#popup-form__mail').val($(this).val());
});
$('#footer-form__message').keyup(function() {
  $('#popup-form__message').val($(this).val());
});

$('#popup-form__name').keyup(function() {
  $('#footer-form__name').val($(this).val());
});
$('#popup-form__mail').keyup(function() {
  $('#footer-form__mail').val($(this).val());
});
$('#popup-form__message').keyup(function() {
  $('#footer-form__message').val($(this).val());
});


//form
$('.effect').bind("keyup", function() {
  this.setAttribute('value', this.value);
})

//form ajax
$(".custom-form").submit(function(e) {
  e.preventDefault();
  var url = "http://bakr-test.esy.es/form.php";
  $.ajax({
    type: "POST",
    url: url,
    data: $(".custom-form").serialize(),
    success: function() {
      $('.submit-notify').text("Wysłano");
    }

  });

  e.preventDefault();
});

//sticky
if (window.innerWidth >= 768) {
  $stick = $('.mockup-wrapper');
  $foot = $('.blog');
  margin = 20;
  offtop = $stick.offset().top - margin;
  offbtm = $foot.offset().top - (margin * 2 + $stick.height());
  var portfolio = $('.portfolio').height();
  var worksColection = $('.portfolio__works-collection').height();


  $(window).scroll(function() {
    scrtop = $(window).scrollTop();
    if (scrtop > offtop && $stick.hasClass('natural')) {
      $stick.removeClass('natural').addClass('fixed')
    }
    if (offtop > scrtop && $stick.hasClass('fixed')) {
      $stick.removeClass('fixed').addClass('natural').css('top', 'auto');
    }
    if (scrtop > offbtm && $stick.hasClass('fixed')) {
      $stick.removeClass('fixed').addClass('bottom')
    }
    if (offbtm > scrtop && $stick.hasClass('bottom')) {
      $stick.removeClass('bottom').addClass('fixed')
    }

    if (scrtop > (offtop + (worksColection / 3 * 2)) - 250) {
      $('.portfolio__macbook-screen').css('background-image', 'url(../images/project3.png)')
      $('.portfolio__iphone-screen').css('background-image', 'url(../images/project3-mobile.png)')
    } else if (scrtop > (offtop + (worksColection / 3)) - 250) {
      $('.portfolio__macbook-screen').css('background-image', 'url(../images/project2.png)')
      $('.portfolio__iphone-screen').css('background-image', 'url(../images/project2-mobile.png)')
    } else {
      $('.portfolio__macbook-screen').css('background-image', 'url(../images/project1.png)')
      $('.portfolio__iphone-screen').css('background-image', 'url(../images/project1-mobile.png)')
    }


  });
}






// POPUP CONTACT
$('.btn-contact-popup').bind('click', function() {

  $('.all-wrapper').toggleClass('blur-wrapper');
  $('.contact-popup').toggleClass('contact-popup--visability');
  $('.contact-popup').toggleClass('contact-popup--open')
  $('.btn-contact-popup').toggleClass('popup--closed', 1000);
  $('.btn-contact-popup').toggleClass('popup--open');

  if ($('.all-wrapper').hasClass('blur-wrapper')) {
    $('.all-wrapper').bind('click', function() {
      closePopup()
    })


    $('.popup-info-to-close').bind('click', function() {
      closePopup()
    })
  }

  $(document).keydown(function(e) {
    if (e.which == 27) {
      if ($('.contact-popup').hasClass('contact-popup--open')) {
        closePopup()
      }
    }
  });


})

function closePopup() {
  $('.all-wrapper').removeClass('blur-wrapper');
  $('.contact-popup').removeClass('contact-popup--visability');
  $('.contact-popup').removeClass('contact-popup--open')
  $('.btn-contact-popup').removeClass('popup--closed', 1000);
  $('.btn-contact-popup').removeClass('popup--open');
}




//przycisk popup
$(".footer-href").click(function(event) {
  event.preventDefault();
});




//smooth scrolling
(function() {

  // Scroll Variables (tweakable)
  var defaultOptions = {

    // Scrolling Core
    frameRate: 150, // [Hz]
    animationTime: 400, // [ms]
    stepSize: 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Acceleration
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Other
    fixedBackground: true,
    excluded: ''
  };

  var options = defaultOptions;


  // Other Variables
  var isExcluded = false;
  var isFrame = false;
  var direction = {
    x: 0,
    y: 0
  };
  var initDone = false;
  var root = document.documentElement;
  var activeElement;
  var observer;
  var refreshSize;
  var deltaBuffer = [];
  var isMac = /^Mac/.test(navigator.platform);

  var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  };
  var arrowKeys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  /***********************************************
   * INITIALIZE
   ***********************************************/

  /**
   * Tests if smooth scrolling is allowed. Shuts down everything if not.
   */
  function initTest() {
    if (options.keyboardSupport) {
      addEvent('keydown', keydown);
    }
  }

  /**
   * Sets up scrolls array, determines if frames are involved.
   */
  function init() {

    if (initDone || !document.body) return;

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight;

    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;

    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
      isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
      scrollHeight > windowHeight &&
      (body.offsetHeight <= windowHeight ||
        html.offsetHeight <= windowHeight)) {

      var fullPageElem = document.createElement('div');
      fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
        'top:0; left:0; right:0; height:' +
        root.scrollHeight + 'px';
      document.body.appendChild(fullPageElem);

      // DOM changed (throttled) to fix height
      var pendingRefresh;
      refreshSize = function() {
        if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
        pendingRefresh = setTimeout(function() {
          if (isExcluded) return; // could be running after cleanup
          fullPageElem.style.height = '0';
          fullPageElem.style.height = root.scrollHeight + 'px';
          pendingRefresh = null;
        }, 500); // act rarely to stay fast
      };

      setTimeout(refreshSize, 10);

      addEvent('resize', refreshSize);

      // TODO: attributeFilter?
      var config = {
        attributes: true,
        childList: true,
        characterData: false
        // subtree: true
      };

      observer = new MutationObserver(refreshSize);
      observer.observe(body, config);

      if (root.offsetHeight <= windowHeight) {
        var clearfix = document.createElement('div');
        clearfix.style.clear = 'both';
        body.appendChild(clearfix);
      }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
      body.style.backgroundAttachment = 'scroll';
      html.style.backgroundAttachment = 'scroll';
    }
  }

  /**
   * Removes event listeners and other traces left on the page.
   */
  function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
  }


  /************************************************
   * SCROLLING
   ************************************************/

  var que = [];
  var pending = false;
  var lastScroll = Date.now();

  /**
   * Pushes scroll actions to the scrolling queue.
   */
  function scrollArray(elem, left, top) {

    directionCheck(left, top);

    if (options.accelerationMax != 1) {
      var now = Date.now();
      var elapsed = now - lastScroll;
      if (elapsed < options.accelerationDelta) {
        var factor = (1 + (50 / elapsed)) / 2;
        if (factor > 1) {
          factor = Math.min(factor, options.accelerationMax);
          left *= factor;
          top *= factor;
        }
      }
      lastScroll = Date.now();
    }

    // push a scroll command
    que.push({
      x: left,
      y: top,
      lastX: (left < 0) ? 0.99 : -0.99,
      lastY: (top < 0) ? 0.99 : -0.99,
      start: Date.now()
    });

    // don't act if there's a pending queue
    if (pending) {
      return;
    }

    var scrollWindow = (elem === document.body);

    var step = function(time) {

      var now = Date.now();
      var scrollX = 0;
      var scrollY = 0;

      for (var i = 0; i < que.length; i++) {

        var item = que[i];
        var elapsed = now - item.start;
        var finished = (elapsed >= options.animationTime);

        // scroll position: [0, 1]
        var position = (finished) ? 1 : elapsed / options.animationTime;

        // easing [optional]
        if (options.pulseAlgorithm) {
          position = pulse(position);
        }

        // only need the difference
        var x = (item.x * position - item.lastX) >> 0;
        var y = (item.y * position - item.lastY) >> 0;

        // add this to the total scrolling
        scrollX += x;
        scrollY += y;

        // update last values
        item.lastX += x;
        item.lastY += y;

        // delete and step back if it's over
        if (finished) {
          que.splice(i, 1);
          i--;
        }
      }

      // scroll left and top
      if (scrollWindow) {
        window.scrollBy(scrollX, scrollY);
      } else {
        if (scrollX) elem.scrollLeft += scrollX;
        if (scrollY) elem.scrollTop += scrollY;
      }

      // clean up if there's nothing left to do
      if (!left && !top) {
        que = [];
      }

      if (que.length) {
        requestFrame(step, elem, (1000 / options.frameRate + 1));
      } else {
        pending = false;
      }
    };

    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
  }


  /***********************************************
   * EVENTS
   ***********************************************/

  /**
   * Mouse wheel handler.
   * @param {Object} event
   */
  function wheel(event) {

    if (!initDone) {
      init();
    }

    var target = event.target;

    // leave early if default action is prevented
    // or it's a zooming event with CTRL
    if (event.defaultPrevented || event.ctrlKey) {
      return true;
    }

    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') ||
      (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
      isNodeName(activeElement, 'object') ||
      target.shadowRoot) {
      return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;

    if (isMac) {
      if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
        deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
      }
      if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
        deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
      }
    }

    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
      deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
      deltaX *= 40;
      deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
      // except Chrome iframes seem to eat wheel events, which we need to
      // propagate up, if the iframe has nothing overflowing to scroll
      if (isFrame && isChrome) {
        // change target to iframe element itself for the parent frame
        Object.defineProperty(event, "target", {
          value: window.frameElement
        });
        return parent.wheel(event);
      }
      return true;
    }

    // check if it's a touchpad scroll that should be ignored
    if (isTouchpad(deltaY)) {
      return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
      deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
      deltaY *= options.stepSize / 120;
    }

    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
  }

  /**
   * Keydown event handler.
   * @param {Object} event
   */
  function keydown(event) {

    var target = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey ||
      (event.shiftKey && event.keyCode !== key.spacebar);

    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
      activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (event.defaultPrevented ||
      inputNodeNames.test(target.nodeName) ||
      isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
      isNodeName(activeElement, 'video') ||
      isInsideYoutubeVideo(event) ||
      target.isContentEditable ||
      modifier) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
        isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
      event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
      arrowKeys[event.keyCode]) {
      return true;
    }

    var shift, x = 0,
      y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
      // Chrome iframes seem to eat key events, which we need to
      // propagate up, if the iframe has nothing overflowing to scroll
      return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight;

    if (overflowing == document.body) {
      clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
      case key.up:
        y = -options.arrowScroll;
        break;
      case key.down:
        y = options.arrowScroll;
        break;
      case key.spacebar: // (+ shift)
        shift = event.shiftKey ? 1 : -1;
        y = -shift * clientHeight * 0.9;
        break;
      case key.pageup:
        y = -clientHeight * 0.9;
        break;
      case key.pagedown:
        y = clientHeight * 0.9;
        break;
      case key.home:
        y = -overflowing.scrollTop;
        break;
      case key.end:
        var scroll = overflowing.scrollHeight - overflowing.scrollTop;
        var scrollRemaining = scroll - clientHeight;
        y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
        break;
      case key.left:
        x = -options.arrowScroll;
        break;
      case key.right:
        x = options.arrowScroll;
        break;
      default:
        return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
  }

  /**
   * Mousedown event only for updating activeElement
   */
  function mousedown(event) {
    activeElement = event.target;
  }


  /***********************************************
   * OVERFLOW
   ***********************************************/

  var uniqueID = (function() {
    var i = 0;
    return function(el) {
      return el.uniqueID || (el.uniqueID = i++);
    };
  })();

  var cache = {}; // cleared out after a scrolling session
  var clearCacheTimer;

  //setInterval(function () { cache = {}; }, 10 * 1000);

  function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function() {
      cache = {};
    }, 1 * 1000);
  }

  function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
      cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
  }

  //  (body)                (root)
  //         | hidden | visible | scroll |  auto  |
  // hidden  |   no   |    no   |   YES  |   YES  |
  // visible |   no   |   YES   |   YES  |   YES  |
  // scroll  |   no   |   YES   |   YES  |   YES  |
  // auto    |   no   |   YES   |   YES  |   YES  |

  function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
      var cached = cache[uniqueID(el)];
      if (cached) {
        return setCache(elems, cached);
      }
      elems.push(el);
      if (rootScrollHeight === el.scrollHeight) {
        var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
        var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
        if (isFrame && isContentOverflowing(root) ||
          !isFrame && isOverflowCSS) {
          return setCache(elems, getScrollRoot());
        }
      } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
        return setCache(elems, el);
      }
    } while (el = el.parentElement);
  }

  function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
  }

  // typically for <body> and <html>
  function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
  }

  // for all other elements
  function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
  }


  /***********************************************
   * HELPERS
   ***********************************************/

  function addEvent(type, fn) {
    window.addEventListener(type, fn, false);
  }

  function removeEvent(type, fn) {
    window.removeEventListener(type, fn, false);
  }

  function isNodeName(el, tag) {
    return (el.nodeName || '').toLowerCase() === tag.toLowerCase();
  }

  function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
      direction.x = x;
      direction.y = y;
      que = [];
      lastScroll = 0;
    }
  }

  var deltaBufferTimer;

  if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage
      deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) {}
  }

  function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
      deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function() {
      try { // #46 Safari throws in private browsing for localStorage
        localStorage.SS_deltaBuffer = deltaBuffer.join(',');
      } catch (e) {}
    }, 1000);
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
  }

  function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
  }

  function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
      isDivisible(deltaBuffer[1], divisor) &&
      isDivisible(deltaBuffer[2], divisor));
  }

  function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf('www.youtube.com/watch') != -1) {
      do {
        isControl = (elem.classList &&
          elem.classList.contains('html5-video-controls'));
        if (isControl) break;
      } while (elem = elem.parentNode);
    }
    return isControl;
  }

  var requestFrame = (function() {
    return (window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback, element, delay) {
        window.setTimeout(callback, delay || (1000 / 60));
      });
  })();

  var MutationObserver = (window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver);

  var getScrollRoot = (function() {
    var SCROLL_ROOT;
    return function() {
      if (!SCROLL_ROOT) {
        var dummy = document.createElement('div');
        dummy.style.cssText = 'height:10000px;width:1px;';
        document.body.appendChild(dummy);
        var bodyScrollTop = document.body.scrollTop;
        var docElScrollTop = document.documentElement.scrollTop;
        window.scrollBy(0, 3);
        if (document.body.scrollTop != bodyScrollTop)
          (SCROLL_ROOT = document.body);
        else
          (SCROLL_ROOT = document.documentElement);
        window.scrollBy(0, -3);
        document.body.removeChild(dummy);
      }
      return SCROLL_ROOT;
    };
  })();


  /***********************************************
   * PULSE (by Michael Herf)
   ***********************************************/

  /**
   * Viscous fluid with a pulse for part and decay for the rest.
   * - Applies a fixed force over an interval (a damped acceleration), and
   * - Lets the exponential bleed away the velocity over a longer interval
   * - Michael Herf, http://stereopsis.com/stopping/
   */
  function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
      val = x - (1 - Math.exp(-x));
    } else { // tail
      // the previous animation ended here:
      start = Math.exp(-1);
      // simple viscous drag
      x -= 1;
      expx = 1 - Math.exp(-x);
      val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
  }

  function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
      options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
  }


  /***********************************************
   * FIRST RUN
   ***********************************************/

  var userAgent = window.navigator.userAgent;
  var isEdge = /Edge/.test(userAgent); // thank you MS
  var isChrome = /chrome/i.test(userAgent) && !isEdge;
  var isSafari = /safari/i.test(userAgent) && !isEdge;
  var isMobile = /mobile/i.test(userAgent);
  var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
  var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
  var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

  var wheelEvent;
  if ('onwheel' in document.createElement('div'))
    wheelEvent = 'wheel';
  else if ('onmousewheel' in document.createElement('div'))
    wheelEvent = 'mousewheel';

  if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
  }


  /***********************************************
   * PUBLIC INTERFACE
   ***********************************************/

  function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
      if (defaultOptions.hasOwnProperty(key))
        options[key] = optionsToSet[key];
  }
  SmoothScroll.destroy = cleanup;

  if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);

  if (typeof define === 'function' && define.amd)
    define(function() {
      return SmoothScroll;
    });
  else if ('object' == typeof exports)
    module.exports = SmoothScroll;
  else
    window.SmoothScroll = SmoothScroll;

})();

//end of smooth scrolling


//testing



(function($) {
  $.fn.removeOrphans = function() {
    if ($(this).length > 0) {
      var $html = $(this).html();
      $html = $html.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;");

      $(this).empty().html($html);
    }
  }
})(jQuery);

$(document).ready(function() {
  $('#content').removeOrphans();
  $('#content1, #content2, #content3').removeOrphans();
});


//post overlay
$('.post').hover(function() {
  $('.post').toggleClass('post-overlay');
})


//mobile parallax
$('.phone-container').ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $('header').mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 22);
    TweenLite.to(".phone-container", 1, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});


//preloader
window.addEventListener('DOMContentLoaded', function() {
  "use strict";
  var ql = new QueryLoader2(document.querySelector("body"), {
    barColor: "#e31d1a",
    backgroundColor: "#EFEFEF",
    percentage: true,
    barHeight: 1,
    minimumTime: 200,
    fadeOutTime: 1000
  });
});

// MENU-BTN
$('.menu-btn').click(function() {

if($('.contact-popup').hasClass('contact-popup--visability')) {
    closePopup();
}

  $('.menu').toggleClass('menu-visability');
  $('.all-wrapper').toggleClass('blur-wrapper');
  $('.menu-btn').toggleClass('btn-visability');
  

  var clicks = $(this).data('clicks');
  if (clicks) {
    $(".menu-btn").attr("aria-expanded", "false");
  } else {
    $(".menu-btn").attr("aria-expanded", "true");
  }
  $(this).data("clicks", !clicks);


});

$('.menu-element').bind('click', function() {
  setTimeout(function(){ 
  closeMenu();
  }, 700);
})

function closeMenu() {
  $('.menu').toggleClass('menu-visability');
  $('.all-wrapper').toggleClass('blur-wrapper');
  $('.menu-btn').toggleClass('btn-visability');
}

$(document).keydown(function(e) {
  if (e.which == 27) {
    if ($('.menu').hasClass('menu-visability')) {
      closeMenu();
    }
  }
});



//BTN WHITE
var opinionsOffset = $(".opinions").offset().top;
var portfolioOffset = $(".portfolio").offset().top;
var contactOffset = $(".contact").offset().top;

$(window).scroll(function() {
  var windowTop = $(window).scrollTop();

  if (windowTop > (opinionsOffset - 50) && windowTop < (portfolioOffset - 50)) {
    $('.menu-btn').addClass('menu-btn__white');
  } else if (windowTop > contactOffset) {
    $('.menu-btn').addClass('menu-btn__white');
  } else {
    $('.menu-btn').removeClass('menu-btn__white');
  }
});



// TYPED.JS
$(function() {
  $(".typed").typed({
    strings: ["Developerem.", "Designerem.", "Publisherem.", "Developerem."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 3,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });
});


// PARALLAX VIDEO
$(document).ready(function() {
  $(window).on('load scroll', function() {
    var scrolled = $(this).scrollTop();
    $('#title').css({
      'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)',
      'opacity': 1 - scrolled / 400
    });
    $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * -0.35) + 'px, 0)');
  });


});

// PARALLAX CURSOR
$('.staff-list').parallax();


//scroll arrow
$(".scroll-arrow").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});


//menu location
$(".menu>ul>li:first-child>a").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$(".menu>ul>li:nth-child(2)>a").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".offer").offset().top
    }, 1000);
});

$(".menu>ul>li:nth-child(3)>a").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".opinions").offset().top
    }, 1000);
});
$(".menu>ul>li:nth-child(4)>a").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000);
});
$(".menu>ul>li:nth-child(5)>a").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".blog").offset().top
    }, 1000);
});
$(".menu>ul>li:last-child>a").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});


// DEACTIVATION CONTACT BUTTON
var stickyTop = $(".contact").offset().top - 500;

$(window).scroll(function() {
  var windowTop = $(window).scrollTop();

  if (windowTop > stickyTop) {

    if ($('.contact-popup').hasClass('contact-popup--open')) {
      closePopup()
    }
    $('.btn-contact-popup').addClass('btn--slideout');

  } else {
    $('.btn-contact-popup').removeClass('btn--slideout');
  }
});



//cookies
(function() {
    //copyright JGA 2013 under MIT License
    var monster={set:function(e,t,n,r){var i=new Date,s="",o=typeof t,u="";r=r||"/",n&&(i.setTime(i.getTime()+n*24*60*60*1e3),s="; expires="+i.toGMTString());if(o==="object"&&o!=="undefined"){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";u=JSON.stringify({v:t})}else u=escape(t);document.cookie=e+"="+u+s+"; path="+r},get:function(e){var t=e+"=",n=document.cookie.split(";"),r="",i="",s={};for(var o=0;o<n.length;o++){var u=n[o];while(u.charAt(0)==" ")u=u.substring(1,u.length);if(u.indexOf(t)===0){r=u.substring(t.length,u.length),i=r.substring(0,1);if(i=="{"){s=JSON.parse(r);if("v"in s)return s.v}return r=="undefined"?undefined:unescape(r)}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}};

    if (monster.get('cookieinfo') === 'true') {
        return false;
    }

    var container = document.createElement('div'),
        link = document.createElement('a');

    container.setAttribute('id', 'cookieinfo');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<h6>Ta strona wykorzystuje pliki cookie</h6><p>Używam informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu serwisu. Korzystanie z witryny bez zmiany ustawień dotyczących cookies oznacza, że będą one zamieszczane w Państwa urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany ustawień dotyczących cookies.</p>';

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        container.setAttribute('style', 'opacity: 1');

        var interval = window.setInterval(function() {
            container.style.opacity -= 0.01;

            if (container.style.opacity <= 0.02) {
                document.body.removeChild(container);
                window.clearInterval(interval);
                monster.set('cookieinfo', 'true', 365);
            }
        }, 4);
    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    document.body.appendChild(container);

    return true;
})();






//test
$(function () {
  var $window = $(window),
      $body = $('.containers');
  $('.post').on('loaded mousemove', function (event) {
  $('.containers').removeClass('test');
  
      cx = Math.ceil($body.width() / 2.0);
      cy = Math.ceil($body.height() / 2.0);
      dx = event.pageX - cx;
      dy = event.pageY - cy;
      tiltx = (dy / cy) - 250;
      tilty = -(dx / cx) * 10;
      radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
      degree = (radius * 5);

      TweenMax.set($body, {
          perspective: '1000px',
          transformStyle: "preserve-3d"
      });
      TweenMax.set(jQuery(this).find('.containers'), {
        
          transformStyle: "preserve-3d",
          z: '0px',
          transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'
      });
      TweenMax.set(".gsap", {
          z: '60px',
      });
      TweenMax.set(".figure", {
          z: '120px',
      });
      TweenMax.set(".tagline", {
          z: '80px',
      });
  }).trigger('loaded');
  if (event.name = 'loaded') {
      TweenMax.set(".containers", {
          transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'
      });
  }
});


$('.test').on("focus", function(){
console.log('test');
});



$('.menu>ul>li:last-child>.menu-element').on( 'keydown', function( e ) {
  if( e.which == 9 ) {
    $(".menu-btn").focus();
  }
} );