// Initialization
$(document).ready(function() {
	var initialEquation = $('.tab').eq(0).attr('for');
	$('.' + initialEquation).css('display', 'block');

	var initialGiven = $('.card-middle').eq(0).attr('class').split(' ')[1];
	$('.' + initialGiven).css('display', 'block');
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
	var value = $(this).parent().parent().find('.char').html();
	$('.mi:contains(' + value + ')').css('color', 'var(--accent)');
});
$('.field, .result').focusout(() => $('.mi').css('color', 'black'));



// Input filters
$('.field').on('propertychange input', function() {
	var numbers = $(this).val().replace(/[^0-9\.]/g, '');
	$(this).val(numbers);
});

$('.result').keydown(function(e) {
	if (e.key == 'ArrowLeft') return true;
	if (e.key == 'ArrowRight') return true;
	if (e.metaKey && e.key == 'c') return true;
	if (e.metaKey && e.key == 'a') return true;
	else return false;
});



// Clear values
$('.clear').click(() => clear());
function clear() {
	$('.field').val('');
	$('.result').val('');
}



// Math config
math.config = {
	number: 'BigNumber',
	precision: 64
}



// Calculation finish
function calcFinish(result) {
	if (result == 0 || result == '' || result == 'NaN') result = 'Hmm...';
	else if (result.toString().indexOf('e') > 0) result = result.toPrecision(1 + 2);
	else result = math.round(result, 2);
	$('.result:visible').val(result);
}



// Copy result click
$('.copy').click(function() {
	var copyInput = $('<input>');
	$('body').append(copyInput);
	copyInput.val($('.result:visible').val()).select();
	document.execCommand('copy');
	copyInput.remove();
});