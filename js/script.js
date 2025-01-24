(function($) {
	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.loader-wrap').length) {
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
		TweenMax.to($(".loader-wrap .overlay"), 1.2, {
			force3D: true,
			left: "100%",
			ease: Expo.easeInOut,
		});
	}

	//Update Header Style and Scroll to Top 
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.sticky-header, .header-style-two');
			if (windowpos > 250) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
			//Disable dropdown parent link
			$('.navigation li.dropdown > a').on('click', function(e) {
				e.preventDefault();
			});
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if ($('.navigation li.dropdown ul').length) {
		$('.navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
	}

	//Search Form Show / Hide
	if ($('.search-box-two .search-icon').length) {
		$('.search-box-two .search-icon').on('click', function() {
			$('.search-box-two .search-icon').toggleClass('open');
		});
	}

	//Search Box Toggle
	if ($('.seach-toggle').length) {
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}

	//Search Form Show / Hide
	if ($('.post-share-icon').length) {
		$('.post-share-icon').on('click', function() {
			$(this).toggleClass('open');
		});
	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {
		var mobileMenuContent = $('.main-menu .navigation').html();
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

	//Hidden Sidebar
	if ($('.hidden-sidebar').length) {
		var animButton = $(".anim-menu-btn"),
			hiddenBar = $(".hidden-sidebar"),
			navOverlay = $(".nav-overlay"),
			hiddenBarClose = $(".hidden-sidebar-close");

		function showMenu() {
			TweenMax.to(hiddenBar, 0.6, {
				force3D: false,
				right: "0",
				ease: Expo.easeInOut
			});
			hiddenBar.removeClass("close-sidebar");
			navOverlay.fadeIn(500);
		}

		function hideMenu() {
			TweenMax.to(hiddenBar, 0.6, {
				force3D: false,
				right: "-470px",
				ease: Expo.easeInOut
			});
			hiddenBar.addClass("close-sidebar");
			navOverlay.fadeOut(500);
		}
		animButton.on("click", function() {
			if (hiddenBar.hasClass("close-sidebar")) showMenu();
			else hideMenu();
		});
		navOverlay.on("click", function() {
			hideMenu();
		});
		hiddenBarClose.on("click", function() {
			hideMenu();
		});
	}

	if ($('.nav-overlay').length) {
		// / cursor /
		var cursor = $(".nav-overlay .cursor"),
			follower = $(".nav-overlay .cursor-follower");
		var posX = 0,
			posY = 0;
		var mouseX = 0,
			mouseY = 0;
		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function() {
				posX += (mouseX - posX) / 9;
				posY += (mouseY - posY) / 9;
				TweenMax.set(follower, {
					css: {
						left: posX - 22,
						top: posY - 22
					}
				});
				TweenMax.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY
					}
				});
			}
		});
		$(document).on("mousemove", function(e) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			mouseX = e.pageX;
			mouseY = e.pageY - scrollTop;
		});
		$("button, a").on("mouseenter", function() {
			cursor.addClass("active");
			follower.addClass("active");
		});
		$("button, a").on("mouseleave", function() {
			cursor.removeClass("active");
			follower.removeClass("active");
		});
		$(".nav-overlay").on("mouseenter", function() {
			cursor.addClass("close-cursor");
			follower.addClass("close-cursor");
		});
		$(".nav-overlay").on("mouseleave", function() {
			cursor.removeClass("close-cursor");
			follower.removeClass("close-cursor");
		});
	}

	function fullHeight() {
		$('.full-height').css("height", $(window).height());
	}

	fullHeight();
	if ($('.quantity-spinner').length) {
		$("input.quantity-spinner").TouchSpin({
			verticalbuttons: true
		});
	}

	if ($('.price-ranger').length) {
		$('.price-ranger #slider-range').slider({
			range: true,
			min: 10,
			max: 200,
			values: [11, 99],
			slide: function(event, ui) {
				$('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
				$('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
			}
		});
		$('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
		$('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
	};

	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 2000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});
	}

	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});
	}

	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				},
			}
		});
	}

	//Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop: false,
			margin: 0,
			nav: true,
			smartSpeed: 2000,
			autoplay: true,
			autoplayTimeout: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}

	//Four Item Carousel
	if ($('.four-item-fluidcarousel').length) {
		$('.four-item-fluidcarousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1500: {
					items: 4
				}
			}
		});
	}

	//five Item Carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//six Item Carousel
	if ($('.six-item-carousel').length) {
		$('.six-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				900: {
					items: 4
				},
				1024: {
					items: 5
				},
				1200: {
					items: 6
				}
			}
		});
	}

	//Cause Carousel
	if ($('.cause-carousel').length) {
		$('.cause-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				},
			}
		});
	}

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop: true,
			margin: 20,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				767: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//Sortable Masonary with Filters
	function sortableMasonry() {
		if ($('.sortable-masonry').length) {
			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');
			$container.isotope({
				filter: '*',
				packery: {
					gutter: 0
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});
			// Isotope Filter 
			$filter.find('li').on('click', function() {
				var selector = $(this).attr('data-filter');
				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {}
				return false;
			});
			winDow.on('resize', function() {
				var selector = $filter.find('li.active').attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
				$container.isotope()
			});
			var filterItemA = $('.filter-btns li');
			filterItemA.on('click', function() {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
			var activeFilterItem = $('.sortable-masonry .filter-tabs').find('li');
			activeFilterItem.each(function() {
				var filterElement = $(this).data('filter');
				var count = filterElement.length;
				$(this).children("span").append('<span class="count">' + count + '</span>');
			});
		}
		if ($('.sortable-masonry-two').length) {
			var $container = $('.sortable-masonry-two .items-container').isotope({
				itemSelector: '.element-item'
			});
			$container.isotope({
				filter: '*',
				packery: {
					gutter: 0
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});
			// filter functions
			var filterFns = {
				// show if number is greater than 50
				numberGreaterThan50: function() {
					var number = $(this).find('.number').text();
					return parseInt(number, 10) > 50;
				},
				// show if name ends with -ium
				ium: function() {
					var name = $(this).find('.name').text();
					return name.match(/ium$/);
				}
			};
			// bind filter on select change
			$('.filters-select').on('change', function() {
				// get filter value from option value
				var filterValue = this.value;
				// use filterFn if matches value
				filterValue = filterFns[filterValue] || filterValue;
				$container.isotope({
					filter: filterValue
				});
			});
		}
	}
	sortableMasonry();

	// isotope style
	if ($('.masonry-layout').length) {
		$('.masonry-layout').isotope({
			layoutMode: 'masonry'
		});
	}

	if ($(".selectmenu").length) {
		$(".selectmenu").selectmenu();
		var changeSelectMenu = function(event, item) {
			$(this).trigger('change', item);
		};
		$(".selectmenu").selectmenu({
			change: changeSelectMenu
		});
	};

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function() {
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
		}, {
			accY: 0
		});
	}

	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);
		});
	}

	if ($('.time-countdown').length) {
		$('.time-countdown').each(function() {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date
			Self.countdown(countDate, function(event) {
				$(this).html('<h2>' + event.strftime('%D : %H : %M : %S') + '</h2>');
			});
		});
	};

	if ($('.time-countdown-two').length) {
		$('.time-countdown-two').each(function() {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date
			Self.countdown(countDate, function(event) {
				$(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef clr-1">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef clr-2">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef clr-3">seconds</span> </div> </li>');
			});
		});
	};

	if ($('.time-countdown-three').length) {
		$('.time-countdown-three').each(function() {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date
			Self.countdown(countDate, function(event) {
				$(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef clr-1">HRS</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef clr-2">MINS</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef clr-3">SECS</span> </div> </li>');
			});
		});
	};

	// Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.accord-btn', function() {
			if ($(this).parents('.accordion').hasClass('active') !== true) {
				$('.accordion').removeClass('active');
			}
			if ($(this).next('.accord-content').is(':visible')) {
				$(this).removeClass('active');
				$(this).next('.accord-content').slideUp(500);
			} else {
				$(this).parents('.accordion').addClass('active');
				$('.accordion .accord-content').slideUp(500);
				$(this).next('.accord-content').slideDown(500);
			}
		});
	}

	//Event Tabs
	if ($('.event-tabs').length) {
		$('.event-tabs .event-tab-btns .event-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			if ($(target).hasClass('actve-tab')) {
				return false;
			} else {
				$('.event-tabs .event-tab-btns .event-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.event-tabs .event-tabs-content .event-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	//Event Carousel
	if ($('.event-carousel').length) {
		$('.event-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left">PREV</span>', '<span class="fa fa-angle-right">NEXT</span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});
	}

	// Volunteer Carousel
	if ($('.volunteer-carousel').length) {
		var vImg = new Swiper(".volunteer-image", {
			preloadImages: false,
			loop: true,
			speed: 1400,
			spaceBetween: 0,
			direction: "vertical",
			effect: "slide",
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		var vCont = new Swiper(".volunteer-content", {
			preloadImages: false,
			loop: true,
			speed: 1400,
			spaceBetween: 0,
			effect: "slide",
			pagination: {
				el: '.volunteer-carousel-pagination',
				clickable: true,
			}
		});
		vImg.controller.control = vCont;
		vCont.controller.control = vImg;
		vCont.on('slideChange', function() {
			var csli = vCont.realIndex + 1,
				curnum = $('.swiper-counter-two #current');
			TweenMax.to(curnum, 0.2, {
				force3D: true,
				y: -10,
				opacity: 0,
				ease: Power2.easeOut,
				onComplete: function() {
					TweenMax.to(curnum, 0.1, {
						force3D: true,
						y: 10
					});
					curnum.html('0' + csli);
				}
			});
			TweenMax.to(curnum, 0.2, {
				force3D: true,
				y: 0,
				delay: 0.3,
				opacity: 1,
				ease: Power2.easeOut
			});
		});
		var totalSlides = vCont.slides.length - 2;
		$('.swiper-counter-two #total').html('0' + totalSlides);
	}

	// History Carousel
	if ($('.history-carousel').length) {
		var hImg = new Swiper(".history-image", {
			preloadImages: false,
			slidesPerView: 3,
			speed: 1500,
			autoplay: {
				delay: 25000,
				disableOnInteraction: false
			},
			spaceBetween: 0,
			effect: "slide",
			centeredSlides: true,
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				640: {
					slidesPerView: 1,
				},
			}
		});
		var hCont = new Swiper(".history-content", {
			preloadImages: false,
			speed: 1500,
			autoplay: {
				delay: 25000,
				disableOnInteraction: false
			},
			spaceBetween: 0,
			effect: "slide",
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		hImg.controller.control = hCont;
		hCont.controller.control = hImg;
	}

	function bannerSlider() {
		if ($(".banner-slider").length > 0) {
			// Banner Slider
			var bannerSlider = new Swiper('.banner-slider', {
				spaceBetween: 0,
				slidesPerView: 1,
				mousewheel: false,
				height: 500,
				grabCursor: true,
				loop: true,
				speed: 1500,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
				pagination: {
					el: '.banner-slider-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.banner-slider-button-next',
					prevEl: '.banner-slider-button-prev',
				},
			});
			bannerSlider.on('slideChange', function() {
				var csli = bannerSlider.realIndex + 1,
					curnum = $('.swiper-counter #current');
				TweenMax.to(curnum, 0.2, {
					force3D: true,
					y: -10,
					opacity: 0,
					ease: Power2.easeOut,
					onComplete: function() {
						TweenMax.to(curnum, 0.1, {
							force3D: true,
							y: 10
						});
						curnum.html('0' + csli);
					}
				});
				TweenMax.to(curnum, 0.2, {
					force3D: true,
					y: 0,
					delay: 0.3,
					opacity: 1,
					ease: Power2.easeOut
				});
			});

			function kpsc() {
				$(".slide-progress").css({
					width: "100%",
					transition: "width 4000ms"
				});
			}

			function eqwe() {
				$(".slide-progress").css({
					width: 0,
					transition: "width 0s"
				});
			}
			kpsc();
			bannerSlider.on("slideChangeTransitionStart", function() {
				eqwe();
			});
			bannerSlider.on("slideChangeTransitionEnd", function() {
				kpsc();
			});
			var totalSlides = bannerSlider.slides.length - 2;
			$('.swiper-counter #total').html('0' + totalSlides);
		}
	}

	//Progress Bar / Levels
	if ($('.progress-levels .progress-box .bar-fill').length) {
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width', progressWidth + '%');
			$(this).children('.percent').html(progressWidth + '%');
		});
	}

	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});

	// Language Selector
	$(".languages").on('click', function() {
		$(".languages ul").show();
	})
	$(".languages ul").mouseleave(function() {
		$(".languages ul").hide();
	});
	$(".languages li a").on('click', function() {
		$(".languages li a").removeClass('sel');
		$(this).addClass('sel');
		var selectedValue = $(this).text();
		var showLang = selectedValue.substring(0, 2);
		$('.languages .current').html(showLang);
		$('.languages .current').attr("title", selectedValue);
		$('.languages .hover').html(selectedValue);
	})

	if ($('#donate-popup').length) {
		var popupOverlay = $(".popup-overlay"),
			donatePopup = $("#donate-popup");
		//Show Popup
		$('.donate-box-btn').on('click', function(e) {
			e.preventDefault();
			donatePopup.addClass('popup-visible');
			popupOverlay.fadeIn(500);
		});
		//Hide Popup
		$('.close-donate').on('click', function() {
			donatePopup.removeClass('popup-visible');
			popupOverlay.fadeOut(500);
		});
		popupOverlay.on("click", function() {
			donatePopup.removeClass('popup-visible');
		});
	}

	if ($('.event-block-three').length) {
		var toggleBtn = $('.event-block-three .toggle-btn');
		toggleBtn.on("click", function() {
			$(this).toggleClass('active');
			$(this).siblings('.text').fadeToggle(300);
		})
	}

	//Jquery Knob animation 
	if ($('.dial').length) {
		$('.dial').appear(function() {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');
			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.15,
				'dynamicDraw': true,
				'displayInput': false
			});
			$({
				value: 0
			}).animate({
				value: perc
			}, {
				duration: 2000,
				easing: 'swing',
				progress: function() {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});
			//circular progress bar color
			$(this).append(function() {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});
		}, {
			accY: 20
		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}

	function windwLoad() {
		sortableMasonry();
		fullHeight();
		bannerSlider();
		setTimeout(function() {
			$(".animInBottom").each(function(a) {
				var b = $(this);
				setTimeout(function() {
					TweenMax.to(b, 1.2, {
						force3D: true,
						bottom: "0",
						ease: Expo.easeInOut
					});
				}, 230 * a);
			});
		}, 400);
		setTimeout(function() {
			$(".animInTop").each(function(a) {
				var b = $(this);
				setTimeout(function() {
					TweenMax.to(b, 1.2, {
						force3D: true,
						top: "0",
						ease: Expo.easeInOut
					});
				}, 230 * a);
			});
		}, 800);
	}

	/* ==========================================================================
		When document is resize, do
	   ========================================================================== */
	$(window).on('resize', function() {
		fullHeight();
		sortableMasonry();
	});

	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */
	$(window).on('scroll', function() {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */
	$(window).on('load', function() {
		handlePreloader();
		windwLoad();
	});
	
})(window.jQuery);