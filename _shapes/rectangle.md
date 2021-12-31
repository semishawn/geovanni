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
				formulas: {
					standard: 'A=lw'
				},
				javascript: 'l * w'
			},
			{
				terminology: 'length and diagonal',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 'A=l\sqrt{d^2-l^2}'
				},
				javascript: 'l * sqrt(d^2 - l^2)'
			},
			{
				terminology: 'width and diagonal',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 'A=w\sqrt{d^2-w^2}'
				},
				javascript: 'w * sqrt(d^2 - w^2)'
			},
			{
				terminology: 'length and perimeter',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'A=\frac{Pl-2l^2}{2}'
				},
				javascript: '((P * l) - (2 * l^2)) / 2'
			},
			{
				terminology: 'width and perimeter',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'A=\frac{Pw-2w^2}{2}'
				},
				javascript: '((P * w) - (2 * w^2)) / 2'
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
				formulas: {
					standard: 'P=2l+2w'
				},
				javascript: '(2 * l) + (2 * w)'
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
				formulas: {
					standard: 'l=\frac{A}{w}'
				},
				javascript: 'A / w'
			},
			{
				terminology: 'width and perimeter',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'l=\frac{P-2w}{2}'
				},
				javascript: '(P - (2 * w)) / 2'
			},
			{
				terminology: 'width and diagonal',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 'l=\sqrt{d^2-w^2}'
				},
				javascript: 'sqrt(d^2 - w^2)'
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
				formulas: {
					standard: 'w=\frac{A}{l}'
				},
				javascript: 'A / l'
			},
			{
				terminology: 'length and perimeter',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'w=\frac{P-2l}{2}'
				},
				javascript: '(P - (2 * l)) / 2'
			},
			{
				terminology: 'length and diagonal',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 'w=\sqrt{d^2-l^2}'
				},
				javascript: 'sqrt(d^2 - l^2)'
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
				formulas: {
					standard: 'd=\sqrt{l^2+w^2}'
				},
				javascript: 'sqrt(2 + w^2)'
			},
			{
				terminology: 'length and area',
				variables: [
					{char: 'l', name: 'length'},
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'd=\frac{\sqrt{l^4+A^2}}{l}'
				},
				javascript: '(sqrt(l^4 + A^2)) / l'
			},
			{
				terminology: 'width and area',
				variables: [
					{char: 'w', name: 'width'},
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'd=\frac{\sqrt{w^4+A^2}}{w}'
				},
				javascript: '(sqrt(w^4 + A^2)) / w'
			}
		]
	},
]
---