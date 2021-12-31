---
shape: rhombus
order: 5

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'two diagonals',
				variables: [
					{char: 'd_1', name: 'diagonal 1'},
					{char: 'd_2', name: 'diagonal 2'}
				],
				formulas: {
					standard: 'A=\frac{d_1 d_2}{2}'
				},
				javascript: '(d_1 * d_2) / 2'
			},
			{
				terminology: 'height and side',
				variables: [
					{char: 'h', name: 'height'},
					{char: 's', name: 'side'}
				],
				formulas: {
					standard: 'A=hs'
				},
				javascript: 'h * s'
			},
			{
				terminology: 'height and perimeter',
				variables: [
					{char: 'h', name: 'height'},
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'A=\frac{hP}{4}'
				},
				javascript: '(h * P) / 4'
			},
			{
				terminology: 'side and angle',
				variables: [
					{char: 's', name: 'side'},
					{char: 'α', name: 'angle'}
				],
				formulas: {
					standard: 'A=s^2 \sin{α}'
				},
				javascript: 's^2 * sin(α)'
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
				javascript: '4 * s'
			},
			{
				terminology: 'two diagonals',
				variables: [
					{char: 'd_1', name: 'diagonal 1'},
					{char: 'd_2', name: 'diagonal 2'}
				],
				formulas: {
					standard: 'P=4\sqrt{\left(\frac{d_{1}}{2}\right)^{2}+\left(\frac{d_{2}}{2}\right)^{2}}'
				},
				javascript: '4 * sqrt((d_1 / 2)^2 + (d_2 / 2)^2)'
			}
		]
	},
	{
		char: 's',
		name: 'side',
		givens: [
			{
				terminology: 'two diagonals',
				variables: [
					{char: 'd_1', name: 'diagonal 1'},
					{char: 'd_2', name: 'diagonal 2'}
				],
				formulas: {
					standard: 's=\sqrt{\left(\frac{d_{1}}{2}\right)^{2}+\left(\frac{d_{2}}{2}\right)^{2}}'
				},
				javascript: 'sqrt((d_1 / 2)^2 + (d_2 / 2)^2)'
			}
		]
	},
	{
		char: 'd_1',
		name: 'diagonal 1',
		givens: [
			{
				terminology: 'side and diagonal 2',
				variables: [
					{char: 's', name: 'side'},
					{char: 'd_2', name: 'diagonal 2'},
				],
				formulas: {
					standard: 'd_1=\sqrt{4s^2-{d_2}^2}'
				},
				javascript: 'sqrt( (4 * s^2) - (d_2)^2 )'
			}
		]
	},
	{
		char: 'd_2',
		name: 'diagonal 2',
		givens: [
			{
				terminology: 'side and diagonal 1',
				variables: [
					{char: 's', name: 'side'},
					{char: 'd_1', name: 'diagonal 1'},
				],
				formulas: {
					standard: 'd_2=\sqrt{4s^2-{d_2}^2}'
				},
				javascript: 'sqrt( (4 * s^2) - (d_2)^2 )'
			}
		]
	}
]
---