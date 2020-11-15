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
				mathjax: 'A=\left(\frac{P}{2}\right)^2',
				formula: '(P / 2)^2'
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
				terminology: perimeter and width,
				variables: [
					{char: P, name: Perimeter},
					{char: w, name: Width}
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
				mathjax: 'w=\sqrt{d^2-w^2}',
				formula: 'sqrt(d^2 - w^2)'
			}
		]
	},
	{
		solveFor: {char: w, name: Width},
		givens: [
			{
				terminology: perimeter and length,
				variables: [
					{char: P, name: Perimeter},
					{char: l, name: Length}
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
		]
	},
]
---