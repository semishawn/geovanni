---
layout: shape
shape: Circle

equations: [
	{
		solveFor: {var: A, name: Area},
		variables: [{var: r, name: Radius}],
		formula: 'A=\pi r^2',
		jsFormula: 'math.multiply(math.pi, math.pow(r, 2))'
	},
	{
		solveFor: {var: C, name: Circumference},
		variables: [{var: r, name: Radius}],
		formula: 'C=2\pi r',
		jsFormula: 'math.multiply(2, r, math.pi)'
	},
	{
		solveFor: {var: r, name: Radius},
		variables: [{var: C, name: Circumference}],
		formula: 'r=\frac{C}{2\pi}',
		jsFormula: 'math.divide(C, math.tau)'
	},
	{
		solveFor: {var: d, name: Diameter},
		variables: [{var: r, name: Radius}],
		formula: 'd=2r',
		jsFormula: 'math.multiply(2, r)'
	}
]
---