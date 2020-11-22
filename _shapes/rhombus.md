---
layout: shape
shape: Rhombus

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: two diagonals,
				variables: [
					{char: d1, name: Diagonal},
					{char: d2, name: Diagonal}
				],
				mathjax: 'A=\frac{d_1 d_2}{2}',
				formula: '(d1 * d2) / 2'
			},
			{
				terminology: height and side,
				variables: [
					{char: h, name: Height},
					{char: s, name: Side}
				],
				mathjax: 'A=hs',
				formula: 'h * s'
			},
			{
				terminology: height and perimeter,
				variables: [
					{char: h, name: Height},
					{char: P, name: Perimeter}
				],
				mathjax: 'A=\frac{hP}{4}',
				formula: '(h * P) / 4'
			},
			{
				terminology: side and angle,
				variables: [
					{char: s, name: Side},
					{char: α, name: Angle}
				],
				mathjax: 'A=s^2 \sin{α}',
				formula: 's^2 * sin(α)'
			}
		]
	},
	{
		solveFor: {char: P, name: Perimeter},
		givens: [
			{
				terminology: side,
				variables: [{char: s, name: Side}],
				mathjax: 'P=4s',
				formula: '4 * s'
			},
		]
	},
	{
		solveFor: {char: d2, name: Diagonal},
		givens: [
			{
				terminology: side and one diagonal,
				variables: [
					{char: s, name: Side},
					{char: d1, name: Diagonal},
				],
				mathjax: 'd_2=\sqrt{4s^2-{d_1}^2}',
				formula: 'sqrt((4 * s^2) - d1^2)'
			}
		]
	}
]
---