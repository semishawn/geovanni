---
shape: trapezoid
order: 6

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'two bases and height',
				variables: [
					{char: 'a', name: 'base'},
					{char: 'b', name: 'base'},
					{char: 'h', name: 'height'}
				],
				mathjax: 'A=\frac{a+b}{2}h',
				formula: '((a + b) / 2) * h'
			},
			{
				terminology: 'four sides',
				variables: [
					{char: 'a', name: 'base'},
					{char: 'b', name: 'base'},
					{char: 'c', name: 'side'},
					{char: 'd', name: 'side'}
				],
				mathjax: 'A=\frac{a+b}{2}c\sqrt{1-\left( \frac{(b-a)^2+c^2-d^2}{2c(b-a)} \right)^2}',
				formula: '(a + b) / 2 * c * sqrt(1 - (((b - a)^2 + c^2 - d^2) / (2 * c * (b - a)))^2)'
			}
		],
		tooltip: 'For four sides method, b must be greater than a.'
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'four sides',
				variables: [
					{char: 'a', name: 'base'},
					{char: 'b', name: 'base'},
					{char: 'c', name: 'side'},
					{char: 'd', name: 'side'}
				],
				mathjax: 'P=a+b+c+d',
				formula: 'a + b + c + d'
			}
		]
	},
	{
		char: 'h',
		name: 'height',
		givens: [
			{
				terminology: 'area and two bases',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'a', name: 'base'},
					{char: 'b', name: 'base'}
				],
				mathjax: 'h=\frac{2A}{a+b}',
				formula: '(2 * A) / (a + b)'
			}
		]
	}
]
---