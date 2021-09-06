// LocalStorage initialization
var defaultTheme = "orange";
if (localStorage.getItem("theme") === null) $(`#${defaultTheme}-theme`).prop("checked", true);
else {
	var theme = localStorage.getItem("theme");
	$(":root").css({
		"--color-accent1": `var(--color-${theme}1)`,
		"--color-accent2": `var(--color-${theme}2)`,
		"--color-accent3": `var(--color-${theme}3)`
	});
	$(`#${theme}-theme`).prop("checked", true);
}

var defaultFontSize = "14px";
if (localStorage.getItem("fontSize") === null) $(".current-font-size").html(defaultFontSize);
else {
	var fontSize = localStorage.getItem("fontSize");
	$(".current-font-size").html(fontSize);
	$(":root").css("--main-font-size", fontSize);
}



// Stuff to initialize/config once all assets are fully loaded
$(window).on('load', function() {
	// MathJax config
	MathJax.Hub.Queue(
		function () {
			$('.MathJax').attr('tabindex', '-1');
		}
	);

	MathJax.Hub.Config({
		messageStyle: "none"
	});



	// Math config
	math.config({
		number: 'BigNumber',
		precision: 64,
		angles: 'deg'
	});

	math.import({
		ellipticInt: function (n) {
			var a0 = math.bignumber(1);
			var g0 = math.sqrt(math.subtract(math.bignumber(1), n));

			var an = a0;
			var gn = g0;

			var twoPow = math.bignumber(0.25);
			var partialSum = math.subtract(math.bignumber(1), math.divide(n, math.bignumber(2)));

			var iter = 0;

			do {
				partialSum = math.subtract(partialSum, math.multiply(twoPow, math.square(math.subtract(an, gn))));
				twoPow = math.multiply(twoPow, math.bignumber(2));

				a0 = math.divide(math.add(an, gn), math.bignumber(2));
				g0 = math.sqrt(math.multiply(an, gn));

				an = a0;
				gn = g0;

				iter++;
			}
			while (math.larger(math.abs(math.subtract(an, gn)), math.bignumber(1e-64)));

			return math.divide(math.multiply(math.pi, math.divide(partialSum, an)), math.bignumber(2));
		}
	});



	// Set each shape vector into each shape diagram
	$('.shape-diagram').each(function() {
		var shape = $(this).closest('.window').attr('data-shape');
		$(this).load('img/diagrams/' + shape + '.svg');
	});

	$('.mini-shape').each(function() {
		var shape = $(this).closest('.module').attr('data-shape');
		$(this).load('img/mini-shapes/mini-shapes_' + shape + '.svg');
	});



	// Window drag functionality
	$('.window').draggable({
		containment: 'parent',
		handle: '.window-title-bar'
	});



	// Custom scroll styling
	


	// Plugin for making window move on top of all other windows on click
	$.fn.maxZ = function() {
		var zArray = [];
		$('.window:visible').each(function() {
			var z = parseInt($(this).css('z-index'), 10);
			zArray.push(z);
		});
		var highestZ = Math.max.apply(null, zArray) + 1;
		$(this).css('z-index', highestZ);
	}



	// Startup animation
	$('.startup-bar-fill').animate(
		{width: '100%'}, 3000,
		() => $('.startup').delay(300).fadeOut(400)
	);
});



// Copy function
function copy(data) {
	navigator.clipboard.writeText(data);
}