---
shape: square
regular: true
order: 2

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'A=s^2',
				formula: 's^2'
			},
			{
				terminology: 'diagonal',
				variables: [{char: 'd', name: 'diagonal'}],
				mathjax: 'A=\frac{d^2}{2}',
				formula: 'd^2 / 2'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 'A=\frac{P^2}{16}',
				formula: 'P^2 / 16'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'P=4s',
				formula: '4s'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'P=4\sqrt{A}',
				formula: '4 * sqrt(A)'
			},
			{
				terminology: 'diagonal',
				variables: [{char: 'd', name: 'diagonal'}],
				mathjax: 'P=2d \sqrt{2}',
				formula: '2d * sqrt(2)'
			}
		]
	},
	{
		char: 'd',
		name: 'diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'd=s \sqrt{2}',
				formula: 's * sqrt(2)'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 'd=\frac{P \sqrt{2}}{4}',
				formula: 'P * sqrt(2) / 4'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'd=\sqrt{2A}',
				formula: 'sqrt(2A)'
			}
		]
	},
	{
		char: 's',
		name: 'side',
		givens: [
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 's=\sqrt{A}',
				formula: 'sqrt(A)'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 's=\frac{P}{4}',
				formula: 'P / 4'
			},
			{
				terminology: 'diagonal',
				variables: [{char: 'd', name: 'diagonal'}],
				mathjax: 's=\frac{d\sqrt{2}}{2}',
				formula: 'd * sqrt(2) / 2'
			}
		]
	}
]
---