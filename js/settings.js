$(".settings-module").click(function() {
	if (localStorage.length == 0) $(".cookie-warning").toggleClass("flex-show").maxZ();
	else $(".settings").toggleClass("flex-show").maxZ();
});



$(".popup .btn").click(function() {
	var popup = $(this).closest(".popup");
	popup.removeClass("flex-show");
	popup.css({
		"top": "",
		"left": ""
	});
	if ($(this).is(".important-btn")) $(".settings").addClass("flex-show").maxZ();
});



$("input[name='theme']").change(function() {
	var theme = $(this).attr("id").replace("-theme", "");
	changeTheme(theme);
	localStorage.setItem("theme", theme);
	if (theme == defaultTheme) localStorage.removeItem("theme");
});



$(".font-size-setter").click(function() {
	var fontSizeDiv = $(".current-font-size");
	var currentSize = parseInt(fontSizeDiv.html());
	var min = parseInt($(this).parent().attr("data-min"));
	var max = parseInt($(this).parent().attr("data-max"));

	if ($(this).is(".dec")) {
		if (currentSize > min) newSize = currentSize - 1 + "px";
	} else {
		if (currentSize < max) newSize = currentSize + 1 + "px";
	}

	fontSizeDiv.html(newSize);
	$(":root").css("--main-font-size", newSize);

	localStorage.setItem("fontSize", newSize);
	if (newSize == defaultFontSize) localStorage.removeItem("fontSize");
});



$("input[name='constant']").change(function() {
	var constant = $(this).attr("id").replace("-constant", "");
	localStorage.setItem("constant", constant);

	$(`.formula[data-${defaultConstant}]`).parent().children().hide();
	$(`.formula[data-${constant}]`).show();
	
	if (constant == defaultConstant) localStorage.removeItem("constant");
});



$("input[name='rationalization']").change(function() {
	var rationalization = $(this).attr("id").replace("-rationalization", "");
	localStorage.setItem("rationalization", rationalization);

	$(`.formula[data-${defaultRationalization}]`).parent().children().hide();
	$(`.formula[data-${rationalization}]`).show();
	
	if (rationalization == defaultRationalization) localStorage.removeItem("rationalization");
});