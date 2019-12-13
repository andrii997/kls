$(document).ready(function () {
	
	// scroll header
	$(window).scroll( function(){
		if ($(this).scrollTop() > 50){
			$('.header').addClass('fixed');
			$('.header-fixed').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
			$('.header-fixed').removeClass('fixed');
		}		
	});

	// mob nav
	$(document).on('click','.nav-icon',function(e){
		e.preventDefault();
		$('.menu').show();
	});
	$(document).on('click','.nav-close',function(e){
		e.preventDefault();
		$('.menu').hide();
	});
	$(document).on('click','.first-parent',function(e){
		e.preventDefault();
		$('.first-parent').removeClass('active');
		$('.second-nav-list').hide();
		$('.second-parent').removeClass('active');
		$('.third-nav-list').hide();
		$('.second-col').show();
		var second_nav = $(this).attr('href');
		$(second_nav).show();
		$(this).addClass('active');
		if($(window).width() < 1023){
			$('.first-col').hide();
		}
	});
	$(document).on('click','.second-parent',function(e){
		e.preventDefault();
		$('.second-parent').removeClass('active');
		$('.third-nav-list').hide();
		$('.third-col').show();
		var third_nav = $(this).attr('href');
		$(third_nav).show();
		$(this).addClass('active');
		if($(window).width() < 1023){
			$('.second-col').hide();
		}
	});
	$(document).on('click','.second-back',function(e){
		e.preventDefault();
		$('.first-parent').removeClass('active');
		$('.second-nav-list').hide();
		$('.second-parent').removeClass('active');
		$('.third-nav-list').hide();
		$('.second-col').hide();
		$('.first-col').show();
	});
	$(document).on('click','.third-back',function(e){
		e.preventDefault();
		$('.second-parent').removeClass('active');
		$('.third-nav-list').hide();
		$('.third-col').hide();
		$('.second-col').show();
	});
	$(document).on('click','.second-subparent',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$('.second-subnav').slideUp();
			$('.second-subparent').removeClass('active');
		}else{
			$('.second-subnav').slideUp();
			$('.second-subparent').removeClass('active');
			$(this).parent().find('.second-subnav').slideDown();
			$(this).addClass('active');
		}
	});

	// serv mob dropdown
	if($(window).width() < 576){
		$(document).on('click','.serv-item-title a',function(e){
			e.preventDefault();
			if($(this).hasClass('active')){
				$('.serv-item-content').slideUp();
				$('.serv-item-title a').removeClass('active');
			}else{
				$('.serv-item-content').slideUp();
				$('.serv-item-title a').removeClass('active');
				$(this).parent().parent().parent().find('.serv-item-content').slideDown();
				$(this).addClass('active');
			}
		});
		$(document).on('click','.serv-tab-trigger',function(e){
			e.preventDefault();
			if($(this).hasClass('active')){
				$('.serv-tab-trigger').removeClass('active');
				$('.serv-tabs-content').slideUp('active');
			}else{
				$('.serv-tab-trigger').removeClass('active');
				$('.serv-tabs-content').slideUp('active');
				$(this).addClass('active');
				var serv_tab = $(this).attr('href');
				$(serv_tab).slideDown();
			}
			
		});
	}
	// langs mob dropdown
	$(document).on('click','.lang-mob-trigger',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$('.lang-mob-hide').slideUp();
			$(this).removeClass('active').text('Показати більше');
		}else{
			$('.lang-mob-hide').slideDown();
			$(this).addClass('active').text('Згорнути');
		}
	});
	

	// select styled
	$('.styled').selectmenu({
		position: {
			my: "left top", // default
			at: "left bottom", // default
			// "flip" will show the menu opposite side if there
			// is not enough available space
			collision: "flip"  // default is ""
		}
	});

	// sliders
	$('.blog-slider').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1140,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}]
	});
	$(".clients-slider").on("init", function(event, slick){
		$(".clients-current").text(parseInt(slick.currentSlide + 1));
		$(".clients-all").text(parseInt(slick.slideCount));
	});
	$(".clients-slider").on("afterChange", function(event, slick, currentSlide){
		$(".clients-current").text(parseInt(slick.currentSlide + 1));
		$(".clients-all").text(slick.slideCount);
	});
	$('.clients-slider').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 1000,
		prevArrow: $('.clients-prev'),
		nextArrow: $('.clients-next'),
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [{
			breakpoint: 1360,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	$(".cert-slider").on("init", function(event, slick){
		$(".cert-current").text(parseInt(slick.currentSlide + 1));
		$(".cert-all").text(parseInt(slick.slideCount));
	});
	$(".cert-slider").on("afterChange", function(event, slick, currentSlide){
		$(".cert-current").text(parseInt(slick.currentSlide + 1));
		$(".cert-all").text(slick.slideCount);
	});
	$('.cert-slider').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 1000,
		prevArrow: $('.cert-prev, .cert-big-prev'),
		nextArrow: $('.cert-next, .cert-big-next'),
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.cert-big-slider',
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1440,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 1290,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}]
	});
	$('.cert-big-slider').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		fade: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.cert-slider',
	});
	$(".review-slider").on("init", function(event, slick){
		$(".review-current").text(parseInt(slick.currentSlide + 1));
		$(".review-all").text(parseInt(slick.slideCount));
	});
	$(".review-slider").on("afterChange", function(event, slick, currentSlide){
		$(".review-current").text(parseInt(slick.currentSlide + 1));
		$(".review-all").text(slick.slideCount);
	});
	$('.review-slider').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 1000,
		prevArrow: $('.review-prev'),
		nextArrow: $('.review-next'),
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1440,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 1290,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}]
	});
	



	/*---------------------------------
		Tabs
	-----------------------------------*/
	// tab setup
	$('.tab-content').addClass('clearfix').not(':first').hide();
	$('ul.tabs').each(function(){
		var current = $(this).find('li.active');
		if(current.length < 1) { $(this).find('li:first').addClass('active'); }
		current = $(this).find('li.active a').attr('href');
		$(current).show();
	});
	
	// tab click
	$(document).on('click', 'ul.tabs a[href^="#"]', function(e){
		e.preventDefault();
		var tabs = $(this).parents('ul.tabs').find('li');
		var tab_next = $(this).attr('href');
		var tab_current = tabs.filter('.active').find('a').attr('href');
		$(tab_current).hide();
		tabs.removeClass('active');
		$(this).parent().addClass('active');
		$(tab_next).show();		
		return false;
	});
});
