// Initialization
$(document).ready(function() {
	var initialEquation = $('.tab').eq(0).html();

	$('.equation-label').html(initialEquation);

	$('.' + initialEquation).css('display', 'flex');
	$('.calculate').attr('onclick', 'calc' + initialEquation + '()');
});



// Show options on click
$('.given').click(() => $('.given-option-container').toggle());



// Swap selected value and change formulas/variables on click
$('.option').click(function() {
	var givenSelect = $(this).html();
	$('.given-selected').html(givenSelect);
	$('.given-option-container').hide();
});



// Highlight variable on text-box focus
$('.field').focus(function() {
	var value = $(this).parent().find('.variable').html();
	$('.mi:contains(' + value + ')').css('color', 'var(--accent)');
});
$('.field').focusout(() => $('.mi').css('color', 'black'));



// Input filters
$('.field').on('propertychange input', function() {
	let value = $(this).val();
	let numbers = value.replace(/[^0-9\.]/g, '');
	$(this).val(numbers);
});
$('.result').keydown(function() {
	if (this.keyCode === undefined) return false;
});



// Clear values
$('.clear').click(() => clear());
function clear() {
	$('.field').val('');
	$('.result').val('');
}



// Switch tabs
$('input[name="tabulation"]').change(function() {
	var equation = $(this).attr('id');

	clear();
	$('.card-middle').hide();
	$('.' + equation).css('display', 'flex');

	$('.equation-label').html(equation);
	$('.calculate').attr('onclick', 'calc' + equation + '()');
});



// Math config
math.config({
	number: 'BigNumber',
	precision: 64
});



// Calculation finish
function calcFinish(result) {
	if (result == 0 || result == '' || result == 'NaN') result = 'Hmm...';
	else result = math.round(result, 2);
	$('.result').val(result.toString());
}