$('.four-function-module').click(function() {
	$('.four-function').toggleClass('show').maxZ();
});

$('.four-function-key').click(function() {
	var result = $('.four-function-result');
	var currentResult = result.val();
	var action = $(this).attr('data-action');

	switch (action) {
		case 'clear':
			result.val('0');
			break;

		case 'delete':
			result.val(currentResult.slice(0, -1));
			break;

		case 'equals':
			var evaluated = math.evaluate(currentResult.replaceAll('×', '*').replaceAll('÷', '/'));
			newResult = math.round(evaluated, 7);
			result.val(newResult);
			break;

		default:
			digit = $(this).html();
			result.focus().blur();
			if (currentResult == '0') result.val(digit);
			else result.val(currentResult + digit);
			break;
	}

	if (result.val() == '') result.val('0');
});

$('.four-function-result').keydown(function(e) {
	if (e.key == 'ArrowLeft') return true;
	if (e.key == 'ArrowRight') return true;
	if (e.metaKey && e.key == 'c') return true;
	if (e.metaKey && e.key == 'a') return true;
	return false;
});