---
layout: shape
shape: Square

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: side,
				variables: [{char: s, name: Side}],
				mathjax: 'A=s^2',
				formula: 's^2'
			},
			{
				terminology: diagonal,
				variables: [{char: d, name: Diagonal}],
				mathjax: 'A=\frac{d^2}{2}',
				formula: 'd^2 / 2'
			},
			{
				terminology: perimeter,
				variables: [{char: P, name: Perimeter}],
				mathjax: 'A=\frac{P^2}{16}',
				formula: 'P^2 / 16'
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
			{
				terminology: area,
				variables: [{char: A, name: Area}],
				mathjax: 'P=4\sqrt{A}',
				formula: '4 * sqrt(A)'
			},
			{
				terminology: diagonal,
				variables: [{char: d, name: Diagonal}],
				mathjax: 'P=2d \sqrt{2}',
				formula: '2 * d * sqrt(2)'
			}
		]
	},
	{
		solveFor: {char: d, name: Diagonal},
		givens: [
			{
				terminology: side,
				variables: [{char: s, name: Side}],
				mathjax: 'd=s \sqrt{2}',
				formula: 's * sqrt(2)'
			},
			{
				terminology: perimeter,
				variables: [{char: P, name: Perimeter}],
				mathjax: 'd=\frac{P \sqrt{2}}{4}',
				formula: '(P * sqrt(2)) / 4'
			},
			{
				terminology: area,
				variables: [{char: A, name: Area}],
				mathjax: 'd=\sqrt{2A}',
				formula: 'sqrt(2 * A)'
			}
		]
	},
	{
		solveFor: {char: s, name: Side},
		givens: [
			{
				terminology: area,
				variables: [{char: A, name: Area}],
				mathjax: 's=\sqrt{A}',
				formula: 'sqrt(A)'
			},
			{
				terminology: perimeter,
				variables: [{char: P, name: Perimeter}],
				mathjax: 's=\frac{P}{4}',
				formula: 'P / 4'
			},
			{
				terminology: diagonal,
				variables: [{char: d, name: Diagonal}],
				mathjax: 's=\frac{d}{\sqrt{2}}',
				formula: 'd / sqrt(2)'
			}
		]
	}
]

shape-height: 140px;
---