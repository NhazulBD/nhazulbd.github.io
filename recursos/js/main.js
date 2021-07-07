/*
  [JS Index]
  
  ---
  
  Template Pedro Ramos || Portfolio
  Author:  Pedro Ramos
*/

/*
  1. Preloader
  	1.2 Show Elements
  		1.2.1 Show fadeIn
  		1.2.2 Show borders
  		1.2.3 Show Bg
  2. Navigation
  	2.1 Filter
  3. Content
  	3.1 Filter Work
  	3.2 Hover Effect Button Works *Removed*
  4. Skills bar
  5. Scroll to top
  	5.2 Scroll to top
  6. PhotoSwipe
*/


$(function() {
    "use strict";

// 1. preloader
	setTimeout(function() {
		$(".fil0").css({'fill':'#fff'});
	}, 2650);
    $( document ).ready(function() {
	    setTimeout(function() {
	    	$("#preloader").fadeOut(600);
	    }, 3500);
		// 1.2 Show elements
   		// 1.2.1 Show fadeIn
        setTimeout(function() {
        	$(".fadeIn-element").delay(4000).css({display: "none"}).fadeIn(1200);
        }, 0);
    	// 1.2.2 Show borders
        setTimeout(function() {
        	$("html").css({'overflow-y':'auto'});
        	$("body").css({'overflow-y':'auto'});
        	$(".border-left").removeClass("left-position-tertiary");
        }, 4000);
        setTimeout(function() {
        	$(".border-right").removeClass("right-position-tertiary");
        }, 4000);
        setTimeout(function() {
        	$(".border-top").removeClass("top-position-tertiary");
        	$(".logo").removeClass("top-position-tertiary");
        	$("#menu-mobile-btn").removeClass("top-position-tertiary");
        }, 4000);
        setTimeout(function() {
        	$(".border-bottom").removeClass("bottom-position-tertiary");
        	$("#wave").removeClass("bottom-position-tertiary");
        }, 4000);
    	// 1.2.3 show Bg
	    setTimeout(function() {
	    	$("#background_img").removeClass("bg_img").addClass("bg_img-show");
	    }, 3000);
    });

	// 2. Navigation
	$(".menu-mobile").click(function () {
		$(".menu-mobile").removeClass('activated');
		$(this).addClass('activated');
		$("#menu-mobile-caller").toggleClass('plus','minus',1000).toggleClass('minus','plus',1000);
		$("#menu-mobile").removeClass("activated");
	});

	$("#menu-mobile-btn").click(function () {
		var plus = $(this).find('button');
		if ( $(plus).hasClass('plus') ) {
			$("#menu-mobile-caller").toggleClass('minus','plus',1000).toggleClass('plus','minus',1000);
			$("#menu-mobile").addClass("activated");
		} else 
		if ( $(plus).hasClass('minus') ) {
			$("#menu-mobile-caller").toggleClass('plus','minus',1000).toggleClass('minus','plus',1000);
			$("#menu-mobile").removeClass("activated");
		}
	});

	// 2.1 Filter
	$(".section_regular").hide();
	$(".menu-state").click(function () {
		var id_section = $(this).attr('category');
		$(".section_home").fadeOut(800);
		$(".section_regular").fadeOut(800);
		function mostrar_seccion(){
			$('.section_regular[category="'+id_section+'"]').fadeIn(1600);
		} setTimeout(mostrar_seccion,750);
	});
	$(".call-home").click(function () {
		$(".section_regular").fadeOut(800);

		function mostrar_seccion_home(){
			$('body').removeClass('body_preloader');
			$('.section_home').fadeIn(1600);
		} setTimeout(mostrar_seccion_home,800);
	});

	// 3. Content
	$(".call-home").click(function () {
		$("#background_img").removeClass('zoom_it');
		$(".logo").removeClass('logo-position-secondary');
		$("#menu-mobile-btn").removeClass('menu-position-secondary');
		$(".border-top").removeClass('top-position-secondary');
		$(".border-left").removeClass('left-position-secondary');
		$(".border-right").removeClass('right-position-secondary');
		$(".border-bottom").removeClass('bottom-position-secondary').removeClass('bottom-position-tercary');
		$("#wave").removeClass('wave-position-secondary');
	});

	$(".call-page").click(function () {
		$("#background_img").addClass('zoom_it');
		$(".logo").addClass('logo-position-secondary');
		$("#menu-mobile-btn").addClass('menu-position-secondary');
		$(".border-top").addClass('top-position-secondary');
		$(".border-left").addClass('left-position-secondary');
		$(".border-right").addClass('right-position-secondary');
		$(".border-bottom").removeClass('bottom-position-tercary').addClass('bottom-position-secondary');
		$("#wave").addClass('wave-position-secondary');
	});

	// 3.1 Filter Work
	$('.legendary').hide();
	$('.legendary[category="logos"]').show();
	$(".c-btn").click(function () {
		var this_category = $(this).attr('category');
		$(".legendary").fadeOut(800);
		function mostrar_seccion(){
			$('.legendary[category="'+this_category+'"]').fadeIn(800);
		} setTimeout(mostrar_seccion, 100);
	});

	// 4. Skills Bar
	$("#fire-skills").click(function () {
		$('.skillbar-title').remove();
		$('.skillbar-bar').remove();
		$('.skill-bar-percent').remove();

		$(".skillbar").append('<span class="skillbar-title"></span><div class="skillbar-bar"></div><span class="skill-bar-percent"></span>');
		$(".skillbar").skillBars({
			from: 0,
			speed: 4000,
			interval: 100,
			decimals: 0
		});
	});

	// 5. to top arrow animation
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 100) {
			$(".to-top-arrow").addClass("show");
		} else {
			$(".to-top-arrow").removeClass("show");
		}
	});

	// 5.2 to top arrow scroll to top
	$(".scrollToTop, #menu-mobile-btn").on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// 6. PhotoSwipe

	var initPhotoSwipeFromDOM = function(gallerySelector) {

	    // parse slide data (url, title, size ...) from DOM elements 
	    // (children of gallerySelector)
	    var parseThumbnailElements = function(el) {
	        var thumbElements = el.childNodes,
	            numNodes = thumbElements.length,
	            items = [],
	            figureEl,
	            linkEl,
	            size,
	            item;

	        for(var i = 0; i < numNodes; i++) {

	            figureEl = thumbElements[i]; // <figure> element

	            // include only element nodes 
	            if(figureEl.nodeType !== 1) {
	                continue;
	            }

	            linkEl = figureEl.children[0]; // <a> element

	            size = linkEl.getAttribute('data-size').split('x');

	            // create slide object
	            item = {
	                src: linkEl.getAttribute('href'),
	                w: parseInt(size[0], 10),
	                h: parseInt(size[1], 10)
	            };



	            if(figureEl.children.length > 1) {
	                // <figcaption> content
	                item.title = figureEl.children[1].innerHTML; 
	            }

	            if(linkEl.children.length > 0) {
	                // <img> thumbnail element, retrieving thumbnail url
	                item.msrc = linkEl.children[0].getAttribute('src');
	            } 

	            item.el = figureEl; // save link to element for getThumbBoundsFn
	            items.push(item);
	        }

	        return items;
	    };
	    // find nearest parent element
	    var closest = function closest(el, fn) {
	        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	    };
	    // triggers when user clicks on thumbnail
	    var onThumbnailsClick = function(e) {
	        e = e || window.event;
	        e.preventDefault ? e.preventDefault() : e.returnValue = false;

	        var eTarget = e.target || e.srcElement;

	        // find root element of slide
	        var clickedListItem = closest(eTarget, function(el) {
	            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
	        });

	        if(!clickedListItem) {
	            return;
	        }

	        // find index of clicked item by looping through all child nodes
	        // alternatively, you may define index via data- attribute
	        var clickedGallery = clickedListItem.parentNode,
	            childNodes = clickedListItem.parentNode.childNodes,
	            numChildNodes = childNodes.length,
	            nodeIndex = 0,
	            index;

	        for (var i = 0; i < numChildNodes; i++) {
	            if(childNodes[i].nodeType !== 1) { 
	                continue; 
	            }

	            if(childNodes[i] === clickedListItem) {
	                index = nodeIndex;
	                break;
	            }
	            nodeIndex++;
	        }



	        if(index >= 0) {
	            // open PhotoSwipe if valid index found
	            openPhotoSwipe( index, clickedGallery );
	        }
	        return false;
	    };
	    // parse picture index and gallery index from URL (#&pid=1&gid=2)
	    var photoswipeParseHash = function() {
	        var hash = window.location.hash.substring(1),
	        params = {};

	        if(hash.length < 5) {
	            return params;
	        }

	        var vars = hash.split('&');
	        for (var i = 0; i < vars.length; i++) {
	            if(!vars[i]) {
	                continue;
	            }
	            var pair = vars[i].split('=');  
	            if(pair.length < 2) {
	                continue;
	            }           
	            params[pair[0]] = pair[1];
	        }

	        if(params.gid) {
	            params.gid = parseInt(params.gid, 10);
	        }

	        return params;
	    };
	    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
	        var pswpElement = document.querySelectorAll('.pswp')[0],
	            gallery,
	            options,
	            items;

	        items = parseThumbnailElements(galleryElement);

	        // define options (if needed)
	        options = {

	            // define gallery index (for URL)
	            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

	            getThumbBoundsFn: function(index) {
	                // See Options -> getThumbBoundsFn section of documentation for more info
	                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
	                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
	                    rect = thumbnail.getBoundingClientRect(); 

	                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
	            }

	        };

	        // PhotoSwipe opened from URL
	        if(fromURL) {
	            if(options.galleryPIDs) {
	                // parse real index when custom PIDs are used 
	                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
	                for(var j = 0; j < items.length; j++) {
	                    if(items[j].pid == index) {
	                        options.index = j;
	                        break;
	                    }
	                }
	            } else {
	                // in URL indexes start from 1
	                options.index = parseInt(index, 10) - 1;
	            }
	        } else {
	            options.index = parseInt(index, 10);
	        }

	        // exit if index not found
	        if( isNaN(options.index) ) {
	            return;
	        }

	        if(disableAnimation) {
	            options.showAnimationDuration = 0;
	        }

	        // Pass data to PhotoSwipe and initialize it
	        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	        gallery.init();
	    };
	    // loop through all gallery elements and bind events
	    var galleryElements = document.querySelectorAll( gallerySelector );
	    for(var i = 0, l = galleryElements.length; i < l; i++) {
	        galleryElements[i].setAttribute('data-pswp-uid', i+1);
	        galleryElements[i].onclick = onThumbnailsClick;
	    }
	    // Parse URL and open gallery if it contains #&pid=3&gid=1
	    var hashData = photoswipeParseHash();
	    if(hashData.pid && hashData.gid) {
	        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	    }
	};
	// execute above function
	initPhotoSwipeFromDOM('.legendary-gallery');

});