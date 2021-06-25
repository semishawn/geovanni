---
shape: parallelogram
order: 3

properties: [
	{
		char: 'A',
		name: 'area',
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
		char: 'b',
		name: 'base',
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
		char: 'h',
		name: 'height',
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
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'base and side',
				variables: [
					{char: 'b', name: 'base'},
					{char: 'a', name: 'side'}
				],
				mathjax: 'P=2b+2a',
				formula: '(2 * b) + (2 * a)'
			}
		]
	},
	{
		char: 'a',
		name: 'side',
		givens: [
			{
				terminology: 'base and perimeter',
				variables: [
					{char: 'b', name: 'base'},
					{char: 'P', name: 'perimeter'}
				],
				mathjax: 'a=\frac{P}{2}-b',
				formula: '(P / 2) - b'
			}
		]
	}
]
---