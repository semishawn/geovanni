---
shape: rhombus

equations: [
	{
		solveFor: {char: 'A', name: 'area'},
		givens: [
			{
				terminology: 'two diagonals',
				variables: [
					{char: 'd_1', name: 'diagonal 1'},
					{char: 'd_2', name: 'diagonal 2'}
				],
				mathjax: 'A=\frac{d_1 d_2}{2}',
				formula: '(d1 * d2) / 2'
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
		solveFor: {char: 'P', name: 'perimeter'},
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'P=4s',
				formula: '4 * s'
			},
		]
	},
	{
		solveFor: {char: 'd_1', name: 'diagonal 1'},
		givens: [
			{
				terminology: 'side and diagonal',
				variables: [
					{char: 's', name: 'side'},
					{char: 'd_2', name: 'diagonal 2'},
				],
				mathjax: 'd_1=\sqrt{4s^2-{d_2}^2}',
				formula: 'sqrt((4 * s^2) - d2^2)'
			}
		]
	}
]
---