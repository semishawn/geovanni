// Initialization
$(document).ready(function() {
	var initialEquation = $('.tab').eq(0).attr('for');
	$('.' + initialEquation).css('display', 'block');

	var initialGiven = $('.card-middle').eq(0).attr('class').split(' ')[1];
	$('.' + initialGiven).css('display', 'block');

	$('.char').each(function() {
		var char = $(this).html();
		if (char.indexOf('1') > 0 || char.indexOf('2') > 0) {
			var origChar = char.substr(0, 1);
			var origNum = char.substr(char.length - 1);
			var subNum = '<sub>' + origNum + '</sub>';
			$(this).html(origChar + subNum);
		}
	});
});



// On tab change
$('input[name="tabulation"]').change(function() {
	$('.equation').hide();
	var chosenEquation = $(this).attr('id');
	$('.' + chosenEquation).css('display', 'block');

	$('.card-middle').hide();
	var initialGiven = $('.' + chosenEquation).find('.card-middle').eq(0).attr('class').split(' ')[1];
	$('.' + initialGiven).css('display', 'block');

	var chosenGiven = $('.' + chosenEquation).find('.given-option').eq(0).html();
	$(this).parent().parent().find('.given-current').html(chosenGiven);
});



// Given functionality
$('.given-select').click(() => $('.given-dropdown').toggle());

$('.given-option').click(function() {
	var chosenGiven = $(this).html();
	$(this).parent().parent().find('.given-current').html(chosenGiven);
	$('.given-dropdown').hide();
	$('.card-middle').hide();
	$('.given-' + chosenGiven.replaceAll(' ', '-')).css('display', 'block');
});

$(document).click(function(e) {
	if (!$(e.target).closest('.given').length) $('.given-dropdown').hide();
});



// Highlight variable on text-box focus
$('.field, .result').focus(function() {
	var char = $(this).parent().parent().find('.char').html();
	if (/[0-9]/.test(char)) {
		var subChar = char.substr(0, 1);
		var subNum = char.replace(/[^0-9]/g, '');
		var mSubSup = $('.msubsup:contains(' + subChar + subNum + '):visible');
		mSubSup.each(function() {
			if ($(this).is(':has(.msubsup)')) $(this).find('*').css('color', 'black');
			else $(this).find('*').css('color', 'var(--accent)');
		});
	}
	else {
		$('.mi:contains(' + char + '):visible').css('color', 'var(--accent)');
		$('.mo:contains(' + char + '):visible').css('color', 'var(--accent)');
	}
	var trig = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
	$.each(trig, (index, val) => $('.mi:contains(' + val + ')').css('color', 'black'));
});
$('.field, .result').focusout(() => $('.mi, .mo, .mn').css('color', 'black'));



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



// Clear values
$('.clear').click(function() {
	$('.field').val('');
	$('.result').val('');
});



// Math config
math.config = {
	number: 'BigNumber',
	precision: 64
}



// Copy result click
$('.copy').click(function() {
	if ($('.result:visible').val().length > 0) {
		var copyInput = $('<input>');
		$('body').append(copyInput);
		copyInput.val($('.result:visible').val()).select();
		document.execCommand('copy');
		copyInput.remove();

		$('.copy svg').attr('class', 'fas fa-check');
		setTimeout(() => $('.copy svg').attr('class', 'far fa-copy'), 700);
	}
});



// Increase/decrease custom stepper
$('.dec').click(function() {
	if ($('.decimal-current').html() > 0) $('.decimal-current').html(parseInt($('.decimal-current').html()) - 1);
});
$('.inc').click(function() {
	if ($('.decimal-current').html() < 10) $('.decimal-current').html(parseInt($('.decimal-current').html()) + 1);
});



// If error when calculating
window.onerror = () => $('.result:visible').val('Hmm...');