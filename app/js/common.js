$(function () {
	var menuIsOpened = false;
	var nav = $("nav");
	var offset = 0;
	$(document).on("scroll", onScroll);
	$("a[href^='#']").on("click", scrollTo);
	
	if ( $(document).width() > "768") {
		offset = 0;
	}
	else {
		offset = 118;
	}

	$(window).on("resize", function () {
		if (!menuIsOpened && $(document).width() > "768") {
			offset = 0;
			showMenu();
		} else if (menuIsOpened && $(document).width() < "768") {
			offset = 118;
			hideMenu();
		}
	});

	$(".menu").on("click", function () {
		if (!menuIsOpened) {
			showMenu();
		} else {
			hideMenu();
		}
	});

	$("nav ul li a").on("click", function () {
		if ($(document).width() <= "768") {
			hideMenu();
		}
	});

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();

		if (scrollPos > 0) {
			nav.addClass("scrolled");
		} else {
			nav.removeClass("scrolled");
		}

		$("nav ul li a").each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
		});
	}

	function scrollTo(event) {
		nav.addClass("scrolled");
		event.preventDefault();
		$(document).off("scroll");

		$("a").each(function () {
			$(this).removeClass("active");
		})
		$(this).addClass("active");

		var target = this.hash,
			menu = target;
		$target = $(target);
		$("html, body").stop().animate({
			'scrollTop': $target.offset().top - offset
		}, 500, "swing", function () {
			$(document).on("scroll", onScroll);
		});
	}

	function showMenu() {
		$("nav ul").css("display", "flex");
		menuIsOpened = true;
	}

	function hideMenu() {
		$("nav ul").css("display", "none");
		menuIsOpened = false;
	}
});
