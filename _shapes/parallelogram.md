---
shape: parallelogram

equations: [
	{
		solveFor: {char: 'A', name: 'area'},
		givens: [
			{
				terminology: 'base and height',
				variables: [
					{char: 'b', name: 'base'},
					{char: 'h', name: 'height'}
				],
				mathjax: 'A=bh',
				formula: 'b * h'
			}
		]
	},
	{
		solveFor: {char: 'b', name: 'base'},
		givens: [
			{
				terminology: 'area and height',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'h', name: 'height'}
				],
				mathjax: 'b=\frac{A}{h}',
				formula: 'A / h'
			}
		]
	},
	{
		solveFor: {char: 'h', name: 'height'},
		givens: [
			{
				terminology: 'area and base',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'b', name: 'base'}
				],
				mathjax: 'h=\frac{A}{b}',
				formula: 'A / b'
			}
		]
	}
]
---