---
shape: triangle
regular: true
order: 1

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
					standard: 'A=\frac{bh}{2}'
				},
				javascript: '(b * h) / 2'
			},
			{
				terminology: 'three sides',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'b', name: 'side'},
					{char: 'c', name: 'side'}
				],
				specialVariable: {
					char: 's',
					formula: 's=\frac{a+b+c}{2}',
					javascript: '(a + b + c) / 2',
				},
				formulas: {
					standard: 'A=\sqrt{s(s-a)(s-b)(s-c)}'
				},
				javascript: 'sqrt(s * (s - a) * (s - b) * (s - c))'
			},
			{
				terminology: 'two sides and angle between',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'γ', name: 'angle'},
					{char: 'b', name: 'side'}
				],
				formulas: {
					standard: 'A=\frac{ ab \sin( \gamma ) }{2}'
				},
				javascript: '(a * b * sin(γ deg)) / 2'
			},
			{
				terminology: 'two angles and side between',
				variables: [
					{char: 'β', name: 'angle'},
					{char: 'a', name: 'side'},
					{char: 'γ', name: 'angle'}
				],
				formulas: {
					standard: 'A=\frac{ a^2 \sin( \beta ) \sin( \gamma ) }{ 2 \sin( 180-\beta-\gamma ) }'
				},
				javascript: '(a^2 * sin(β deg) * sin(γ deg)) / (2 * sin(180 deg - β deg - γ deg))'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'three sides',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'b', name: 'side'},
					{char: 'c', name: 'side'}
				],
				formulas: {
					standard: 'P=a+b+c'
				},
				javascript: 'a + b + c'
			},
			{
				terminology: 'two sides and angle between',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'γ', name: 'angle'},
					{char: 'b', name: 'side'}
				],
				formulas: {
					standard: 'P=a+b+\sqrt{a^2+b^2-2ab \cos( \gamma )}'
				},
				javascript: 'a + b + sqrt(a^2 + b^2 - (2 * a * b * cos(γ deg)))'
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
					standard: 'b=\frac{2A}{h}'
				},
				javascript: '(2 * A) / h'
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
					standard: 'h=\frac{2A}{b}'
				},
				javascript: '(2 * A) / b'
			},
			{
				terminology: 'three sides',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'b', name: 'side'},
					{char: 'c', name: 'side'}
				],
				specialVariable: {
					char: 's',
					formula: 's=\frac{a+b+c}{2}',
					javascript: '(a + b + c) / 2',
				},
				formulas: {
					standard: 'h=\frac{2\sqrt{s\left(s-a\right)\left(s-b\right)\left(s-c\right)}}{b}'
				},
				javascript: '(2 * sqrt(s * (s - a) * (s - b) * (s - c))) / b'
			}
		]
	}
]
---