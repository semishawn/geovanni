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
					{char: 'a', name: 'base 1'},
					{char: 'b', name: 'base 2'},
					{char: 'h', name: 'height'}
				],
				mathjax: 'A=\frac{a+b}{2}h',
				formula: '((a + b) / 2) * h'
			},
			{
				terminology: 'four sides',
				variables: [
					{char: 'a', name: 'base 1'},
					{char: 'b', name: 'base 2'},
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
					{char: 'a', name: 'base 1'},
					{char: 'b', name: 'base 2'},
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
					{char: 'a', name: 'base 1'},
					{char: 'b', name: 'base 2'}
				],
				mathjax: 'h=\frac{2A}{a+b}',
				formula: '(2 * A) / (a + b)'
			}
		]
	},
	{
		char: 'a',
		name: 'base 1',
		givens: [
			{
				terminology: 'area, height, and base 2',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'h', name: 'height'},
					{char: 'b', name: 'base 2'}
				],
				mathjax: 'a=\frac{2A}{h}-b',
				formula: '((2 * A) / h) - b'
			}
		]
	},
	{
		char: 'b',
		name: 'base 2',
		givens: [
			{
				terminology: 'area, height, and base 1',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'h', name: 'height'},
					{char: 'a', name: 'base 1'}
				],
				mathjax: 'b=\frac{2A}{h}-a',
				formula: '((2 * A) / h) - a'
			}
		]
	}
]
---