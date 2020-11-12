---
layout: shape
shape: Rectangle

equations: [
	{
		solveFor: {var: A, name: Area},
		variables: [
			{var: l, name: Length},
			{var: w, name: Width}
		],
		formula: 'A=lw',
		jsFormula: 'multiply(l, w)'
	},
	{
		solveFor: {var: P, name: Perimeter},
		variables: [
			{var: l, name: Length},
			{var: w, name: Width}
		],
		formula: 'P=2l \cdot 2w',
		jsFormula: 'math.multiply(math.multiply(2, l), math.multiply(2, l))'
	},
	{
		solveFor: {var: l, name: Length},
		variables: [
			{var: w, name: Width},
			{var: d, name: Diagonal}
		],
		formula: 'l=\sqrt{d^2-w^2}',
		jsFormula: 'math.sqrt(math.subtract(math.pow(d, 2), math.pow(w, 2)))'
	},
	{
		solveFor: {var: w, name: Width},
		variables: [
			{var: l, name: Length},
			{var: d, name: Diagonal}
		],
		formula: 'w=\sqrt{d^2-l^2}',
		jsFormula: 'math.sqrt(math.subtract(math.pow(d, 2), math.pow(l, 2)))'
	},
	{
		solveFor: {var: d, name: Diagonal},
		variables: [
			{var: l, name: Length},
			{var: w, name: Width}
		],
		formula: 'd=\sqrt{l^2+w^2}',
		jsFormula: 'math.sqrt(math.add(math.pow(l, 2), math.pow(w, 2)))'
	}
]
---