// Ensure windows are always brought to front of screen on click
$('.window').mousedown(function() {
	$(this).maxZ();
});



// Toggle windows
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

$('.four-function-module, .guide-module').click(function() {
	var window = $(this).attr('class').split(' ')[1].replace('-module', '');
	$('.' + window).toggleClass('flex-show').maxZ();
});

$(".settings-module").click(function() {
	if (localStorage.length == 0) $(".cookie-warning").toggleClass('flex-show').maxZ();
	else $(".settings").toggleClass('flex-show').maxZ();
});

$(".popup .btn").click(function() {
	$(this).closest(".popup").removeClass("flex-show");
	if ($(this).is(".important-btn")) $(".settings").addClass('flex-show').maxZ();
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



// Settings functions
$('.text-size-setter').click(function() {
	var fontSizeDiv = $('.current-text-size');
	var currentSize = parseInt(fontSizeDiv.html());
	var min = parseInt($(this).parent().attr('data-min'));
	var max = parseInt($(this).parent().attr('data-max'));

	if ($(this).is('.dec')) {
		if (currentSize > min) newSize = currentSize - 1 + "px";
	} else {
		if (currentSize < max) newSize = currentSize + 1 + "px";
	}

	fontSizeDiv.html(newSize);
	$(":root").css("--main-font-size", newSize);
});

$("input[name='bg']").change(function() {
	var color = $(this).attr("id").split("-")[0];
	$(":root").css({
		"--color-accent1": `var(--color-${color}1)`,
		"--color-accent2": `var(--color-${color}2)`,
		"--color-accent3": `var(--color-${color}3)`
	});
});