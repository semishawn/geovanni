// Math config
math.config = {
	number: 'BigNumber',
	precision: 64,
	angles: 'deg'
}



/* Window drag functionality */
$('.window').draggable({
	containment: 'parent',
	handle: '.window-bar'
});



// Plugin for making window move on top of all other windows on click
$.fn.maxZ = function() {
	var epoch = Date.now().toString().slice(3);
	$(this).css('z-index', epoch);
}

$('.window').mousedown(function() {
	$(this).maxZ();
});



// Toggle windows on module click
$('.desktop-module').click(function() {
	$(this).find('.i-folder').toggleClass('open');
	var shape = $(this).attr('data-shape');
	$('.folder[data-shape="' + shape + '"]').toggleClass('show').maxZ();
});

$('.app-module').click(function() {
	var shape = $(this).closest('.folder').attr('data-shape');
	var variable = $(this).attr('data-variable');
	$('.calculator[data-shape="' + shape + '"][data-variable="' + variable + '"]').toggleClass('show').maxZ();
});



// Close window on clicking close button
$('.close-btn').click(function() {
	var window = $(this).closest('.window');
	window.removeClass('show');
	window.css({
		'top': '',
		'left': ''
	});

	// If closing folder, animate folder icon closing
	if (window.is('.folder')) {
		var shape = window.attr('data-shape');
		$('.desktop-module[data-shape="' + shape + '"]').find('.open').removeClass('open');
	}
});



// Given functionality
$('.given-select').click(function() {
	$(this).closest('.given').find('.given-dropdown').toggle();
});

$('.given-option').click(function() {
	var terminology = $(this).html();
	var terminologySlug = $(this).attr('data-given');
	$(this).closest('.given').find('.given-current').html(terminology);
	$(this).closest('.given').find('.given-dropdown').hide();
	$(this).closest('.window').find('.calculation-content').hide();
	$(this).closest('.window').find('.calculation-content[data-given=' + terminologySlug + ']').show();
});

$(document).click(function(e) {
	if (!$(e.target).closest('.given').length) $('.given-dropdown').hide();
});



// Input filters
$('.field').on('propertychange input', function() {
	var numsOnly = $(this).val().replace(/[^0-9\.]/g, '');
	$(this).val(numsOnly);
});

$('.result').keydown(function(e) {
	if (e.key == 'ArrowLeft') return true;
	if (e.key == 'ArrowRight') return true;
	if (e.metaKey && e.key == 'c') return true;
	if (e.metaKey && e.key == 'a') return true;
	return false;
});



// Increase/decrease decimal places
$('.setter').click(function() {
	var place = $(this).siblings('.current-places');
	if ($(this).is('.dec')) {
		if (place.html() > 0)
			place.html(parseInt(place.html()) - 1);
	} else {
		if (place.html() < 10)
			place.html(parseInt(place.html()) + 1);
	}
});



// Copy result
$('.copy').click(function() {
	var calcContent = $(this).closest('.calculator').find('.calculation-content:visible');

	var copyInput = $('<input>');
	$('body').append(copyInput);
	var relativeInput = calcContent.find('.result').val();
	copyInput.val(relativeInput).select();
	document.execCommand('copy');
	copyInput.remove();

	$(this).find('svg').attr('class', 'fas fa-check');
	setTimeout(() => $(this).find('svg').attr('class', 'far fa-copy'), 700);
});



// Highlight variable on text-box focus
$('.field').focusin(function() {
	var calcContent = $(this).closest('.calculator').find('.calculation-content:visible');
	var char = $(this).closest('.variable-row').find('.char').find('script').html().replace(/[^a-z A-Z 0-9]+/g, '');

	// If char has subscript
	if (/\d/.test(char)) {
		// If superscript char contains an exponent
		if (calcContent.find('.msubsup:contains(' + char + ')').find('.msubsup').length !== 0)
			calcContent.find('.msubsup:contains(' + char + '):first-child').addClass('selected-char');
		else calcContent.find('.msubsup:contains(' + char + ')').addClass('selected-char');
	}
	else calcContent.find('.mi:contains(' + char + ')').addClass('selected-char');
});

$('.field').focusout(function() {
	$('*').removeClass('selected-char');
	$('g').removeClass('selected-shape');
});



// Clear values
$('.clear').click(function() {
	var calcContent = $(this).closest('.calculator').find('.calculation-content:visible');
	calcContent.find('.field').val('');
	calcContent.find('.copy').hide();
});