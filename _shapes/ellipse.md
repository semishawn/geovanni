---
layout: shape
shape: Ellipse

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: major and minor axis,
				variables: [
					{char: a, name: Major Axis},
					{char: b, name: Minor Axis}
				],
				mathjax: 'A=\pi ab',
				formula: 'pi * a * b'
			}
		]
	},
	{
		solveFor: {char: C, name: Circumference},
		givens: [
			{
				terminology: major and minor axis,
				variables: [
					{char: a, name: Major Axis},
					{char: b, name: Minor Axis}
				],
				specialVariable: {
					char: h,
					mathjax: 'h=\left(\frac{a-b}{a+b}\right)^2',
					formula: '((a - b) / (a + b))^2'
				},
				mathjax: 'C=\pi(a+b)\left(1+\frac{3h}{10+\sqrt{4-3h}}\right)',
				formula: 'pi * (a + b) * (1 + (3 * h) / (10 + sqrt(4 - (3 * h))))'
			}
		]
	},
]

shape-height: 110px;
---