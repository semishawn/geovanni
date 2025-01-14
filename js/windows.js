// Ensure windows are always brought to front of screen on click
$(".window").mousedown(function() {
	$(this).maxZ();
});

/* $(".window-title-bar").mousedown(function(e) {
	e.preventDefault();
	$(this).addClass("mouse-down");
}).mouseup(function() {
	$(this).removeClass("mouse-down");
}); */



// Toggle windows
$(".folder-module").click(function() {
	$(this).find(".i-folder").toggleClass("open");
	var shape = $(this).attr("data-shape");
	$(".folder[data-shape='" + shape + "']").toggleClass("flex-show").maxZ();
});

$(".ubercalc-module").click(function() {
	var shape = $(this).closest(".folder").attr("data-shape");
	$(".ubercalc[data-shape='" + shape + "']").toggleClass("flex-show").maxZ();
});

$(".calc-module").click(function() {
	var shape = $(this).closest(".folder").attr("data-shape");
	var variable = $(this).attr("data-variable");
	$(".propcalc[data-shape='" + shape + "'][data-variable='" + variable + "']").toggleClass("flex-show").maxZ();
});

$(".four-function-module, .guide-module").click(function() {
	var window = $(this).attr("class").split(" ")[1].replace("-module", "");
	$("." + window).toggleClass("flex-show").maxZ();
});



// Close window on clicking close button
$(".close-btn").click(function() {
	var window = $(this).closest(".window");
	window.removeClass("flex-show");
	window.css({
		"top": "",
		"left": ""
	});

	// If closing folder, animate folder icon closing
	if (window.is(".folder")) {
		var shape = window.attr("data-shape");
		$(".folder-module[data-shape='" + shape + "']").find(".open").removeClass("open");
	}
});



// Restore all settings visually, clear all localstorage
$(".restore-btn").click(function() {
	localStorage.clear();
	$(`#${defaultTheme}-theme`).click();
	$(".current-font-size").html(defaultFontSize);
	$(":root").css("--main-font-size", defaultFontSize);
	$(`#${defaultConstant}-constant`).click();
	$(`#${defaultRationalization}-rationalization`).click();
});