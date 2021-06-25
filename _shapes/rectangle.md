---
shape: rectangle
order: 2

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'length and width',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'w', name: 'width'}
				],
				mathjax: 'A=lw',
				formula: 'l * w'
			},
			{
				terminology: 'length and diagonal',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'd', name: 'diagonal'}
				],
				mathjax: 'A=l\sqrt{d^2-l^2}',
				formula: 'l * sqrt(d^2 - l^2)'
			},
			{
				terminology: 'width and diagonal',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'd', name: 'diagonal'}
				],
				mathjax: 'A=w\sqrt{d^2-w^2}',
				formula: 'w * sqrt(d^2 - w^2)'
			},
			{
				terminology: 'length and perimeter',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'P', name: 'perimeter'}
				],
				mathjax: 'A=\frac{Pl-2l^2}{2}',
				formula: '((P * l) - (2 * l^2)) / 2'
			},
			{
				terminology: 'width and perimeter',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'P', name: 'perimeter'}
				],
				mathjax: 'A=\frac{Pw-2w^2}{2}',
				formula: '((P * w) - (2 * w^2)) / 2'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'length and width',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'w', name: 'width'}
				],
				mathjax: 'P=2l+2w',
				formula: '(2 * l) + (2 * w)'
			},
		]
	},
	{
		char: 'l',
		name: 'length',
		givens: [
			{
				terminology: 'width and area',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'A', name: 'area'}
				],
				mathjax: 'l=\frac{A}{w}',
				formula: 'A / w'
			},
			{
				terminology: 'width and perimeter',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'P', name: 'perimeter'}
				],
				mathjax: 'l=\frac{P-2w}{2}',
				formula: '(P - (2 * w)) / 2'
			},
			{
				terminology: 'width and diagonal',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'd', name: 'diagonal'}
				],
				mathjax: 'l=\sqrt{d^2-w^2}',
				formula: 'sqrt(d^2 - w^2)'
			}
		]
	},
	{
		char: 'w',
		name: 'width',
		givens: [
			{
				terminology: 'length and area',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'A', name: 'area'}
				],
				mathjax: 'w=\frac{A}{l}',
				formula: 'A / l'
			},
			{
				terminology: 'length and perimeter',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'P', name: 'perimeter'}
				],
				mathjax: 'w=\frac{P-2l}{2}',
				formula: '(P - (2 * l)) / 2'
			},
			{
				terminology: 'length and diagonal',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'd', name: 'diagonal'}
				],
				mathjax: 'w=\sqrt{d^2-l^2}',
				formula: 'sqrt(d^2 - l^2)'
			}
		]
	},
	{
		char: 'd',
		name: 'diagonal',
		givens: [
			{
				terminology: 'length and width',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'w', name: 'width'}
				],
				mathjax: 'd=\sqrt{l^2+w^2}',
				formula: 'sqrt(2 + w^2)'
			},
			{
				terminology: 'length and area',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'A', name: 'area'}
				],
				mathjax: 'd=\frac{\sqrt{l^4+A^2}}{l}',
				formula: '(sqrt(l^4 + A^2)) / l'
			},
			{
				terminology: 'width and area',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'A', name: 'area'}
				],
				mathjax: 'd=\frac{\sqrt{w^4+A^2}}{w}',
				formula: '(sqrt(w^4 + A^2)) / w'
			}
		]
	},
]
---