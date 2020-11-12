---
layout: shape
shape: Triangle

equations: [
	{
		solveFor: {var: A, name: Area},
		variables: [
			{var: b, name: Base},
			{var: h, name: Height}
		],
		formula: 'A=\frac{1}{2}bh',
		jsFormula: 'math.multiply(0.5, b, h)'
	},
	{
		solveFor: {var: P, name: Perimeter},
		variables: [
			{var: a, name: Side},
			{var: b, name: Side},
			{var: c, name: Side}
		],
		formula: 'P=a+b+c',
		jsFormula: 'math.add(a, b, c)'
	},
	{
		solveFor: {var: b, name: Base},
		variables: [
			{var: A, name: Area},
			{var: h, name: Height}
		],
		formula: 'b=2\frac{A}{h}',
		jsFormula: 'math.multiply(2, math.divide(A, h))'
	},
	{
		solveFor: {var: h, name: Height},
		variables: [
			{var: A, name: Area},
			{var: b, name: Base}
		],
		formula: 'h=2\frac{A}{b}',
		jsFormula: 'math.multiply(2, math.divide(A, b))'
	}
]
---