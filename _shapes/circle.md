---
layout: shape
shape: Circle

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: radius,
				variables: [{char: r, name: Radius}],
				mathjax: 'A=\pi r^2',
				formula: 'pi * r^2'
			},
			{
				terminology: diameter,
				variables: [{char: d, name: Diameter}],
				mathjax: 'A=\frac{\pi d^2}{4}',
				formula: '(pi * d^2) / 4'
			},
			{
				terminology: circumference,
				variables: [{char: C, name: Circumference}],
				mathjax: 'A=\frac{C^2}{4\pi}',
				formula: '(C^2) / (4 * pi)'
			}
		]
	},
	{
		solveFor: {char: C, name: Circumference},
		givens: [
			{
				terminology: radius,
				variables: [{char: r, name: Radius}],
				mathjax: 'C=2\pi r',
				formula: '2 * pi * r'
			},
			{
				terminology: diameter,
				variables: [{char: d, name: Diameter}],
				mathjax: 'C=\pi d',
				formula: 'pi * d'
			},
			{
				terminology: area,
				variables: [{char: A, name: Area}],
				mathjax: 'C=2 \sqrt{\pi A}',
				formula: '2 * sqrt(pi * A)'
			}
		]
	},
	{
		solveFor: {char: r, name: Radius},
		givens: [
			{
				terminology: circumference,
				variables: [{char: C, name: Circumference}],
				mathjax: 'r=\frac{C}{2\pi}',
				formula: 'C / (2 * pi)'
			},
			{
				terminology: area,
				variables: [{char: A, name: Area}],
				mathjax: 'r=\sqrt{\frac{A}{\pi}}',
				formula: 'sqrt(A / pi)'
			},
			{
				terminology: diameter,
				variables: [{char: d, name: Diameter}],
				mathjax: 'r=\frac{d}{2}',
				formula: 'd / 2'
			}
		]
	},
	{
		solveFor: {char: d, name: Diameter},
		givens: [
			{
				terminology: circumference,
				variables: [{char: C, name: Circumference}],
				mathjax: 'd=\frac{C}{\pi}',
				formula: 'C / pi'
			},
			{
				terminology: area,
				variables: [{char: A, name: Area}],
				mathjax: 'd=2\sqrt{\frac{A}{\pi}}',
				formula: '2 * sqrt(A / pi)'
			},
			{
				terminology: radius,
				variables: [{char: r, name: Radius}],
				mathjax: 'd=2r',
				formula: '2 * r'
			}
		]
	}
]

shape-height: 145px;
---