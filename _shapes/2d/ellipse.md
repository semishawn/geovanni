---
layout: shape
shape: Ellipse

equations: [
	{
		solveFor: {var: A, name: Area},
		variables: [
			{var: a, name: Major Axis},
			{var: b, name: Minor Axis}
		],
		formula: 'A=\pi ab',
		jsFormula: 'math.multiply(math.pi, a, b)'
	},
	{
		solveFor: {var: C, name: Circumference},
		variables: [
			{var: a, name: Major Axis},
			{var: b, name: Minor Axis}
		],
		specialVariables: [{var: h, formula: 'math.pow(math.divide(math.subtract(a, b), math.add(a, b)), 2)'}],
		formula: ['h=\left(\frac{a-b}{a+b}\right)^2', 'C=\pi(a+b)\left(1+\frac{3h}{10+\sqrt{4-3h}}\right)'],
		jsFormula: 'math.multiply(math.pi, math.add(a, b), math.add(1, math.divide(math.multiply(3, h), math.add(10, math.sqrt(math.subtract(4, math.multiply(3, h)))))))'
	}
]
---