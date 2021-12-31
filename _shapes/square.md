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
				variables: [
					{char: 's', name: 'side'}
				],
				formulas: {
					standard: 'A=s^2'
				},
				javascript: 's^2'
			},
			{
				terminology: 'diagonal',
				variables: [
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 'A=\frac{d^2}{2}'
				},
				javascript: 'd^2 / 2'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'A=\frac{P^2}{16}'
				},
				javascript: 'P^2 / 16'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 's', name: 'side'}
				],
				formulas: {
					standard: 'P=4s'
				},
				javascript: '4s'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'P=4\sqrt{A}'
				},
				javascript: '4 * sqrt(A)'
			},
			{
				terminology: 'diagonal',
				variables: [
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 'P=2d \sqrt{2}'
				},
				javascript: '2d * sqrt(2)'
			}
		]
	},
	{
		char: 'd',
		name: 'diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 's', name: 'side'}
				],
				formulas: {
					standard: 'd=s \sqrt{2}'
				},
				javascript: 's * sqrt(2)'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'd=\frac{P \sqrt{2}}{4}'
				},
				javascript: 'P * sqrt(2) / 4'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'd=\sqrt{2A}'
				},
				javascript: 'sqrt(2A)'
			}
		]
	},
	{
		char: 's',
		name: 'side',
		givens: [
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 's=\sqrt{A}'
				},
				javascript: 'sqrt(A)'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 's=\frac{P}{4}'
				},
				javascript: 'P / 4'
			},
			{
				terminology: 'diagonal',
				variables: [
					{char: 'd', name: 'diagonal'}
				],
				formulas: {
					standard: 's=\frac{d\sqrt{2}}{2}'
				},
				javascript: 'd * sqrt(2) / 2'
			}
		]
	}
]
---