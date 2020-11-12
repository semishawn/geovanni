---
layout: shape
shape: Square

equations: [
	{
		solveFor: {var: A, name: Area},
		variables: [{var: s, name: Side}],
		formula: 'A=s^2',
		jsFormula: 'math.pow(s, 2)'
	},
	{
		solveFor: {var: P, name: Perimeter},
		variables: [{var: s, name: Side}],
		formula: 'P=4s',
		jsFormula: 'math.multiply(4, s)'
	},
	{
		solveFor: {var: d, name: Diagonal},
		variables: [{var: s, name: Side}],
		formula: 'd=\sqrt{2}s',
		jsFormula: 'math.multiply(math.sqrt(2), s)'
	}
]
---