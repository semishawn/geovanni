// LocalStorage initialization
function changeTheme(theme) {
	for (var i = 1; i <= 4; i++) {
		$(":root").css(`--color-accent${i}`, `var(--color-${theme}${i})`);
	}
}

var defaultTheme = "green";
if (localStorage.getItem("theme") === null) $(`#${defaultTheme}-theme`).prop("checked", true);
else {
	var theme = localStorage.getItem("theme");
	changeTheme(theme);
	$(`#${theme}-theme`).prop("checked", true);
}


var defaultFontSize = "14px";
if (localStorage.getItem("fontSize") === null) $(".current-font-size").html(defaultFontSize);
else {
	var fontSize = localStorage.getItem("fontSize");
	$(".current-font-size").html(fontSize);
	$(":root").css("--main-font-size", fontSize);
}


var defaultConstant = "pi";
$(`.formula[data-${defaultConstant}]`).parent().children().hide();
if (localStorage.getItem("constant") === null) {
	$(`.formula[data-${defaultConstant}]`).show();
	$(`#${defaultConstant}-constant`).prop("checked", true);
} else {
	var constant = localStorage.getItem("constant");
	$(`.formula[data-${constant}]`).show();
	$(`#${constant}-constant`).prop("checked", true);
}


var defaultRationalization = "rational";
$(`.formula[data-${defaultRationalization}]`).parent().children().hide();
if (localStorage.getItem("rationalization") === null) {
	$(`.formula[data-${defaultRationalization}]`).show();
	$(`#${defaultRationalization}-rationalization`).prop("checked", true);
} else {
	var rationalization = localStorage.getItem("rationalization");
	$(`.formula[data-${rationalization}]`).show();
	$(`#${rationalization}-rationalization`).prop("checked", true);
}



// Stuff to initialize/config once all assets are fully loaded
$(window).on("load", function() {
	// MathJax config
	MathJax.Hub.Queue(
		function() {
			$(".MathJax").attr("tabindex", "-1");
		}
	);

	MathJax.Hub.Config({
		messageStyle: "none"
	});



	// Math config
	math.config({
		number: "BigNumber",
		precision: 64,
		angles: "deg"
	});

	math.import({
		ellipticInt: function(eccentricity) {
			let steps = 1000;
			let subInt = math.divide(math.evaluate("pi / 2"), steps);
			let xVal = 0;
			let total = 0;

			for (let n = 0; n <= steps; n++) {
				let scope = {
					k: eccentricity,
					x: xVal
				}

				let yVal = math.evaluate("sqrt(1 - k^2 * sin(x)^2)", scope);

				let factor = 2;
				if (n == 0 || n == steps) factor = 1;

				let curve = math.multiply(yVal, factor);

				total = math.add(total, curve);

				xVal = math.add(xVal, subInt);
			}

			return math.multiply(math.divide(subInt, 2), total)
		}
	});



	// Set each shape vector into each shape diagram
	$(".shape-diagram").each(function() {
		var shape = $(this).closest(".window").attr("data-shape");
		$(this).load("img/diagrams/" + shape + ".svg");
	});

	$(".mini-shape").each(function() {
		var shape = $(this).closest(".module").attr("data-shape");
		$(this).load("img/mini-shapes/mini-shapes_" + shape + ".svg");
	});



	// Window drag functionality
	$(".window").draggable({
		containment: "parent",
		handle: ".window-title-bar"
	});



	// Custom scroll styling
	
	

	// Plugin for making window move on top of all other windows on click
	$.fn.maxZ = function() {
		var zArray = [];
		$(".window:visible").each(function() {
			var z = parseInt($(this).css("z-index"), 10);
			zArray.push(z);
		});
		var highestZ = Math.max.apply(null, zArray) + 1;
		$(this).css("z-index", highestZ);
	}



	// Startup animation
	// $(".startup-bar-fill").css("width", "50%");
	$(".startup-bar-fill").animate(
		{width: "100%"}, 3000,
		() => $(".startup").delay(300).fadeOut(400)
	);
});



// Copy function
function copy(data) {
	navigator.clipboard.writeText(data);
}