$(".four-function-key").click(function() {
	var result = $(".four-function-result");
	var currentResult = result.val();
	var action = $(this).attr("data-action");

	switch (action) {
		case "clear":
			result.val("");
			break;

		case "delete":
			result.val(currentResult.slice(0, -1));
			break;

		case "equals":
			var evaluated = math.evaluate(currentResult.replaceAll("×", "*").replaceAll("÷", "/"));
			var newResult = math.round(evaluated, 7);
			result.val(newResult);
			break;

		default:
			var digit = $(this).html();
			result.focus().blur();
			result.val(currentResult + digit);
			break;
	}
});

$(".four-function-result").keydown(function(e) {
	if (e.key == "ArrowLeft") return true;
	if (e.key == "ArrowUp") return true;
	if (e.key == "ArrowRight") return true;
	if (e.key == "ArrowDown") return true;
	if (e.metaKey && e.key == "c") return true;
	if (e.metaKey && e.key == "a") return true;
	return false;
});