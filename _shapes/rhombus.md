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
				mathjax: 'A=\frac{d_1 d_2}{2}',
				formula: '(d_1 * d_2) / 2'
			},
			{
				terminology: 'height and side',
				variables: [
					{char: 'h', name: 'height'},
					{char: 's', name: 'side'}
				],
				mathjax: 'A=hs',
				formula: 'h * s'
			},
			{
				terminology: 'height and perimeter',
				variables: [
					{char: 'h', name: 'height'},
					{char: 'P', name: 'perimeter'}
				],
				mathjax: 'A=\frac{hP}{4}',
				formula: '(h * P) / 4'
			},
			{
				terminology: 'side and angle',
				variables: [
					{char: 's', name: 'side'},
					{char: 'α', name: 'angle'}
				],
				mathjax: 'A=s^2 \sin{α}',
				formula: 's^2 * sin(α)'
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
				mathjax: 'P=4s',
				formula: '4 * s'
			},
			{
				terminology: 'two diagonals',
				variables: [
					{char: 'd_1', name: 'diagonal 1'},
					{char: 'd_2', name: 'diagonal 2'}
				],
				mathjax: 'P=4\sqrt{\left(\frac{d_{1}}{2}\right)^{2}+\left(\frac{d_{2}}{2}\right)^{2}}',
				formula: '4 * sqrt((d_1 / 2)^2 + (d_2 / 2)^2)'
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
				mathjax: 's=\sqrt{\left(\frac{d_{1}}{2}\right)^{2}+\left(\frac{d_{2}}{2}\right)^{2}}',
				formula: 'sqrt((d_1 / 2)^2 + (d_2 / 2)^2)'
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
				mathjax: 'd_1=\sqrt{4s^2-{d_2}^2}',
				formula: 'sqrt( (4 * s^2) - (d_2)^2 )'
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
				mathjax: 'd_2=\sqrt{4s^2-{d_2}^2}',
				formula: 'sqrt( (4 * s^2) - (d_2)^2 )'
			}
		]
	}
]
---