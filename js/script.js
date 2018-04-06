$(document).ready(function() {
	allsize();
	var html = '<ul class="nav-mobile">' + $('.header .main-nav > ul').html() + '</ul>';
	$('.mobile-wrap-menu .content').html(html);
	$(".header .main-nav > ul li").each(function(){
      if ($(this).has("ul").length) {
        $(this).find('a').eq(0).append('<span class="icon down"><i class="ti-angle-down"></i></span>');
        $(this).find('a').eq(0).addClass('hassub');
      };
    });
    $('.header .top .right .user li').hover(
	    function() {
	        $('.header .top .right .user li').removeClass('activeX');
	        $(this).find('ul').eq(0).stop(false, true).slideDown(200);
	        $(this).parent().css('overflow', 'visible');
	    },
	    function() {
	        $('.header .top .right .user li').removeClass('activeX');
	        $(this).find('ul').eq(0).stop(false, true).slideUp(200);
	    }
    );
	$('.header .main-nav > ul li').hover(
	    function() {
	        $('.header .main-nav > ul li').removeClass('activeX');
	        $(this).find('ul').eq(0).stop(false, true).slideDown(200);
	        $(this).parent().css('overflow', 'visible');
	    },
	    function() {
	        $('.header .main-nav > ul li').removeClass('activeX');
	        $(this).find('ul').eq(0).stop(false, true).slideUp(200);
	    }
    );
    //Mobile menu script
	if ($('.nav-mobile').length) {
		headHmtl = '<div class="head"><span class="icon closeSub"><i class="ti-arrow-left"></i></span><span class="head-text"></span></div>';
	    $(".nav-mobile li").each(function (index, obj) {
	      if ($(this).has("ul").length) {
	      	$(this).find('ul').eq(0).wrap('<div class="sub-menu"></div>').before(headHmtl);
	      	var headText = $(this).find('a').eq(0).html();
	      	$(this).find('.head-text').html(headText);
	        $(this).find('a').eq(0).addClass('hassub').attr('href', 'javascript:void(0)');
	      };
	    });
	    $('.nav-mobile li a').click(function(event) {
	    	$(this).closest('li').find('div').eq(0).attr('visible', 'true');
	    });
	    $('.mobile-wrap-menu .closeSub, .sub-menu .head .head-text').click(function(event) {
	    	$(this).closest('.sub-menu').attr('visible', 'false');
	    });
	    $('.trigger-menu').click(function() {
	    	$('.three-bars-icon').addClass('close');
	    	$('.slidebar').addClass('show');
	    	addOverlay('body');
	    });
	    $('.closeSidebar').click(function(event) {
	    	closeSlidebar();
	    });
	    $('body').on('click', '.overlay', function(event) {
	    	event.preventDefault();
	    	closeSlidebar();
	    });
	}
	$('.btn-quantity-minus').click(function(event) {
		var obj = $(this).closest('.input-quantity');
		var val = parseInt(parseInt(obj.find('.button-outline-mid').eq(0).val()) - 1);
		if (val <= 0) {
			val = 0;
		}
		obj.find('.button-outline-mid').eq(0).val(val);
	});
	$('.btn-quantity-plus').click(function(event) {
		var obj = $(this).closest('.input-quantity');
		var val = parseInt(parseInt(obj.find('.button-outline-mid').eq(0).val()) + 1);
		obj.find('.button-outline-mid').eq(0).val(val);
	});
	$('.button-outline-mid').click(function(event) {
		$(this).select();
	});
	function closeSlidebar() {
		if ($('.slidebar').hasClass('show')) {
    		$('.slidebar').removeClass('show');
    	}
    	if ($('.three-bars-icon').hasClass('close')) {
    		$('.three-bars-icon').removeClass('close');
    	}
    	$('.sub-menu').attr('visible', 'false');
    	removeOverlay('body');
	}
	//End Mobile menu script
	function addOverlay(parent) {
    	if (!$(parent + ' .overlay').length) {
  			$(parent).prepend('<div class="overlay"></div>');
  		}
    }
    function removeOverlay(parent) {
    	if ($(parent + ' .overlay').length) {
  			$(parent + ' .overlay').remove();
  		}
    }
	function setCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	function getCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}
	function eraseCookie(name) {   
	    document.cookie = name+'=; Max-Age=-99999999;';  
	}
	function getScrollBarWidth () {
		var inner          = document.createElement('p');
		inner.style.width  = "100%";
		inner.style.height = "200px";
		
		var outer = document.createElement('div');
		outer.style.position   = "absolute";
		outer.style.top        = "0px";
		outer.style.left       = "0px";
		outer.style.visibility = "hidden";
		outer.style.width      = "200px";
		outer.style.height     = "150px";
		outer.style.overflow   = "hidden";
		outer.appendChild (inner);

		document.body.appendChild (outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2) w2 = outer.clientWidth;
		document.body.removeChild (outer);
		return (w1 - w2);
	};
	function allsize() {
		if ($('.ads').length) {
			if ($('.ads .one-one').length) {
				$('.ads .one-one').height($('.ads .one-one').width());
			}
			if ($('.ads .one-two').length) {
				$('.ads .one-two').height($('.ads .one-two').width()/2);
			}
			if ($('.ads .two-one').length) {
				$('.ads .two-one').height($('.ads .two-one').width()*2);
			}
		}
		if ($('.index-news .left .article .date').length) {
			$('.index-news .left .article .date').css({
				'left' : $('.index-news .left .article .thumbnail').width() - $('.index-news .left .article .date').width() -30,
				'height' : $('.index-news .article .date').width() + 30,
			});
		}
		if ($('.list-news .article .date').length) {
			$('.list-news .article .date').css({
				'left' : $('.list-news .article .thumbnail').width() - $('.list-news .article .date').width() -30,
				'height': $('.list-news .article .date').width() + 30,
				});
		}
	}
	$('.header .search .icon').click(function(event) {
	  	if (!$('.header .search').hasClass('show')) {
	  		$('.header .search').addClass('show');
	  		addOverlay('body');
	  		addOverlay('.header .container');
	  	}
	  	if ($('.header .clinics').hasClass('show')) {
			$('.header .clinics').removeClass('show');
		}
	});
	$('.user li:last-child').click(function(event) {
		if (!$('.user ul').hasClass('show')) {
			$('.user ul').addClass('show');
			addOverlay('body');
	  		addOverlay('.header .container');
		}
	});
	$('body').on('click', '.overlay', function(event) {
	  	$('.header .search').removeClass('show');
	  	('.header .search').removeClass('show');
	  	$('.user ul').removeClass('show');
	  	removeOverlay('body');
	  	removeOverlay('.header .container');
	});
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 100) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html').animate({scrollTop : 0},800);
	});
	$(window).bind('resize', function(e){
	    window.resizeEvt;
	    $(window).resize(function(){
	        clearTimeout(window.resizeEvt);
	        window.resizeEvt = setTimeout(function(){
	        	closeSlidebar();
	        	allsize();
	        }, 100);
	    });
	});
});