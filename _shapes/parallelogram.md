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
				formulas: {
					standard: 'A=bh'
				},
				javascript: 'b * h'
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
				formulas: {
					standard: 'b=\frac{A}{h}'
				},
				javascript: 'A / h'
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
				formulas: {
					standard: 'h=\frac{A}{b}'
				},
				javascript: 'A / b'
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
				formulas: {
					standard: 'P=2b+2a'
				},
				javascript: '(2 * b) + (2 * a)'
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
				formulas: {
					standard: 'a=\frac{P}{2}-b'
				},
				javascript: '(P / 2) - b'
			}
		]
	}
]
---