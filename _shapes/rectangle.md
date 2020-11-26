---
layout: shape
shape: Rectangle

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: length and width,
				variables: [
					{char: l, name: Length},
					{char: w, name: Width}
				],
				mathjax: 'A=lw',
				formula: 'l * w'
			},
			{
				terminology: perimeter,
				variables: [{char: P, name: Perimeter}],
				mathjax: 'A=\frac{P^2}{4}',
				formula: 'P^2 / 4'
			}
		]
	},
	{
		solveFor: {char: P, name: Perimeter},
		givens: [
			{
				terminology: length and width,
				variables: [
					{char: l, name: Length},
					{char: w, name: Width}
				],
				mathjax: 'P=2l+2w',
				formula: '(2 * l) + (2 * w)'
			},
		]
	},
	{
		solveFor: {char: l, name: Length},
		givens: [
			{
				terminology: width and area,
				variables: [
					{char: w, name: Width},
					{char: A, name: Area}
				],
				mathjax: 'l=\frac{A}{w}',
				formula: 'A / w'
			},
			{
				terminology: width and perimeter,
				variables: [
					{char: w, name: Width},
					{char: P, name: Perimeter}
				],
				mathjax: 'l=\frac{P-2w}{2}',
				formula: '(P - (2 * w)) / 2'
			},
			{
				terminology: width and diagonal,
				variables: [
					{char: w, name: Width},
					{char: d, name: Diagonal}
				],
				mathjax: 'l=\sqrt{d^2-w^2}',
				formula: 'sqrt(d^2 - w^2)'
			}
		]
	},
	{
		solveFor: {char: w, name: Width},
		givens: [
			{
				terminology: length and area,
				variables: [
					{char: l, name: Length},
					{char: A, name: Area}
				],
				mathjax: 'w=\frac{A}{l}',
				formula: 'A / l'
			},
			{
				terminology: length and perimeter,
				variables: [
					{char: l, name: Length},
					{char: P, name: Perimeter}
				],
				mathjax: 'w=\frac{P-2l}{2}',
				formula: '(P - (2 * l)) / 2'
			},
			{
				terminology: length and diagonal,
				variables: [
					{char: l, name: Length},
					{char: d, name: Diagonal}
				],
				mathjax: 'w=\sqrt{d^2-l^2}',
				formula: 'sqrt(d^2 - l^2)'
			}
		]
	},
	{
		solveFor: {char: d, name: Diagonal},
		givens: [
			{
				terminology: length and width,
				variables: [
					{char: l, name: Length},
					{char: w, name: Width}
				],
				mathjax: 'd=\sqrt{l^2+w^2}',
				formula: 'sqrt(2 + w^2)'
			},
			{
				terminology: length and area,
				variables: [
					{char: l, name: Length},
					{char: A, name: Area}
				],
				mathjax: 'd=\frac{\sqrt{l^4+A^2}}{l}',
				formula: '(sqrt(l^4 + A^2)) / l'
			},
			{
				terminology: width and area,
				variables: [
					{char: w, name: Width},
					{char: A, name: Area}
				],
				mathjax: 'd=\frac{\sqrt{w^4+A^2}}{w}',
				formula: '(sqrt(w^4 + A^2)) / w'
			}
		]
	},
]

shape-height: 120px;
---