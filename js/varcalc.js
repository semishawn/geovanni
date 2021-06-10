// Given functionality
$('.given-select').click(function() {
	$(this).closest('.given').find('.given-dropdown').toggle();
});

$('.given-option').click(function() {
	var terminology = $(this).html();
	var terminologySlug = $(this).attr('data-given');
	$(this).closest('.given').find('.given-current').html(terminology);
	$(this).closest('.given').find('.given-dropdown').hide();
	$(this).closest('.window').find('.calc-content').hide();
	$(this).closest('.window').find('.calc-content[data-given=' + terminologySlug + ']').show();
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
	var calcBody = $(this).closest('.calc-body');

	var copyInput = $('<input>');
	$('body').append(copyInput);
	var relativeInput = calcBody.find('.result').val();
	copyInput.val(relativeInput).select();
	document.execCommand('copy');
	copyInput.remove();

	$(this).find('svg').attr('class', 'fas fa-check');
	setTimeout(() => $(this).find('svg').attr('class', 'far fa-copy'), 700);
});



// Highlight variable on text-box focus
$('.field').focusin(function() {
	var calcBody = $(this).closest('.calc-body');
	var char = $(this).closest('.variable-row').find('.char').children().not('script').text().replaceAll('=', '');

	// If char has subscript
	if (/\d/.test(char)) {
		// If superscript char contains an exponent
		if (calcBody.find('.msubsup:contains(' + char + ')').find('.msubsup').length !== 0)
			calcBody.find('.msubsup:contains(' + char + '):first-child').addClass('selected-char');
		else calcBody.find('.msubsup:contains(' + char + ')').addClass('selected-char');
	}
	else {
		// Color only if math element has variable and variable only
		calcBody.find('.mi').filter(function() {
			if ($(this).text() === char) $(this).addClass('selected-char');
		});
		calcBody.find('.mo:contains(' + char + ')').addClass('selected-char');
	}

	calcBody.find('g:contains(' + char + ')').addClass('selected-shape');
});

$('.field').focusout(function() {
	$('*').removeClass('selected-char');
	$('g').removeClass('selected-shape');
});



// Clear values
$('.clear').click(function() {
	var calcBody = $(this).closest('.calc-body');
	calcBody.find('.field').val('');
	calcBody.find('.copy').hide();
});