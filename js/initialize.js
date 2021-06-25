// Startup animation
$(window).on('load', function() {
	$('.startup-bar-fill').animate(
		{width: '100%'}, 2000,
		() => $('.startup').delay(300).fadeOut(400)
	);
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
		while (math.larger(math.abs(math.subtract(an, gn)), math.bignumber(1e-15)));

		return math.divide(math.multiply(math.pi, math.divide(partialSum, an)), math.bignumber(2));
	}
});



// Copy function
function copy(data) {
	var $temp = $('<input>');
	$('body').append($temp);
	$temp.val(data).select();
	document.execCommand('copy');
	$temp.remove();
}



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
new SimpleBar($('.guide-body')[0], {
	autoHide: false
});



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

$('.window').mousedown(function() {
	$(this).maxZ();
});



// Toggle windows on module click
$('.folder-module').click(function() {
	$(this).find('.i-folder').toggleClass('open');
	var shape = $(this).attr('data-shape');
	$('.folder[data-shape="' + shape + '"]').toggleClass('flex-show').maxZ();
});

$('.ubercalc-module').click(function() {
	var shape = $(this).closest('.folder').attr('data-shape');
	$('.ubercalc[data-shape="' + shape + '"]').toggleClass('flex-show').maxZ();
});

$('.calc-module').click(function() {
	var shape = $(this).closest('.folder').attr('data-shape');
	var variable = $(this).attr('data-variable');
	$('.propcalc[data-shape="' + shape + '"][data-variable="' + variable + '"]').toggleClass('flex-show').maxZ();
});

$('.four-function-module, .settings-module, .guide-module').click(function() {
	var window = $(this).attr('class').split(' ')[1].replace('-module', '');
	$('.' + window).toggleClass('flex-show').maxZ();
});



// Close window on clicking close button
$('.close-btn').click(function() {
	var window = $(this).closest('.window');
	window.removeClass('flex-show');
	window.css({
		'top': '',
		'left': ''
	});

	// If closing folder, animate folder icon closing
	if (window.is('.folder')) {
		var shape = window.attr('data-shape');
		$('.folder-module[data-shape="' + shape + '"]').find('.open').removeClass('open');
	}
});