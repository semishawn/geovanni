// Given functionality
$(".given-select").click(function() {
	$(this).closest(".given").find(".given-dropdown").toggle();
});

$(".given-option").click(function() {
	var terminology = $(this).html();
	var terminologySlug = $(this).attr("data-given");
	$(this).closest(".given").find(".given-current").html(terminology);
	$(this).closest(".given").find(".given-dropdown").hide();
	$(this).closest(".window").find(".calc-content").hide();
	$(this).closest(".window").find(".calc-content[data-given='" + terminologySlug + "']").show();
});

$(document).click(function(e) {
	if (!$(e.target).closest(".given-select").length) $(".given-dropdown").hide();
});



// Input filters
$(".field").on("propertychange input", function() {
	var numsOnly = $(this).val().replace(/[^0-9\.]/g, "");
	$(this).val(numsOnly);
});

$(".result").keydown(function(e) {
	if (e.key == "ArrowLeft") return true;
	if (e.key == "ArrowRight") return true;
	if (e.metaKey && e.key == "c") return true;
	if (e.metaKey && e.key == "a") return true;
	return false;
});



// Increase/decrease decimal places
$(".precision-setter").click(function() {
	var place = $(this).siblings(".current-places");
	var min = parseInt($(this).parent().attr("data-min"));
	var max = parseInt($(this).parent().attr("data-max"));

	if ($(this).is(".dec")) {
		if (place.html() > min)
			place.html(parseInt(place.html()) - 1);
	} else {
		if (place.html() < max)
			place.html(parseInt(place.html()) + 1);
	}
});



// Copy result
$(".copy").click(function() {
	var calcBody = $(this).closest(".calc-body");
	var closestResult = calcBody.find(".result").val();
	copy(closestResult);

	$(this).find("svg").attr("class", "fas fa-check");
	setTimeout(() => $(this).find("svg").attr("class", "far fa-copy"), 700);
});



// Highlight variable on text-box focus
$(".field").focusin(function() {
	var calcBody = $(this).closest(".calc-body");
	var char = $(this).closest(".variable-row").attr("data-char").replace("_", "");

	if (char.length > 1) {
		// If char has subscript
		calcBody.find(".msubsup:contains(" + char + ")").not(":has(.msubsup)").addClass("selected-char");
	} else {
		// Making sure variable contains char only
		calcBody.find(".mi").filter(function () {
			return $(this).text() == char;
		}).addClass("selected-char");
	}

	calcBody.find("g:contains(" + char + ")").addClass("selected-shape");
});

$(".field").focusout(function() {
	$("*").removeClass("selected-char selected-shape");
});



// Clear values
$(".clear").click(function() {
	var calcBody = $(this).closest(".calc-body");
	calcBody.find(".field").val("");
	calcBody.find(".copy").hide();
});