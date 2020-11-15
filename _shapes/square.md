---
layout: shape
shape: Square

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: Side,
				variables: [{char: s, name: Side}],
				formula: 'A=s^2',
				jsFormula: ''
			},
			{
				terminology: Diagonal,
				variables: [{char: d, name: Diagonal}],
				formula: 'A=\frac{d^2}{2}',
				jsFormula: ''
			},
			{
				terminology: Perimeter,
				variables: [{char: P, name: Perimeter}],
				formula: 'A=\frac{P^2}{16}',
				jsFormula: ''
			}
		]
	},
	{
		solveFor: {char: P, name: Perimeter},
		givens: [
			{
				terminology: Side,
				variables: [{char: s, name: Side}],
				formula: 'P=4s',
				jsFormula: ''
			},
			{
				terminology: Area,
				variables: [{char: A, name: Area}],
				formula: 'P=4\sqrt{A}',
				jsFormula: ''
			},
			{
				terminology: Diagonal,
				variables: [{char: d, name: Diagonal}],
				formula: 'P=2d \sqrt{2}',
				jsFormula: ''
			}
		]
	},
	{
		solveFor: {char: d, name: Diagonal},
		givens: [
			{
				terminology: Side,
				variables: [{char: s, name: Side}],
				formula: 'd=s \sqrt{2}',
				jsFormula: ''
			},
			{
				terminology: Perimeter,
				variables: [{char: P, name: Perimeter}],
				formula: 'd=\frac{P \sqrt{2}}{4}',
				jsFormula: ''
			},
			{
				terminology: Area,
				variables: [{char: A, name: Area}],
				formula: 'd=\sqrt{2A}',
				jsFormula: ''
			}
		]
	},
	{
		solveFor: {char: s, name: Side},
		givens: [
			{
				terminology: Area,
				variables: [{char: A, name: Area}],
				formula: 's=\sqrt{A}',
				jsFormula: ''
			},
			{
				terminology: Perimeter,
				variables: [{char: P, name: Perimeter}],
				formula: 's=\frac{P}{4}',
				jsFormula: ''
			},
			{
				terminology: Diagonal,
				variables: [{char: d, name: Diagonal}],
				formula: 's=\frac{d}{\sqrt{2}}',
				jsFormula: ''
			}
		]
	}
]
---