---
layout: shape
shape: Triangle

equations: [
	{
		solveFor: {char: A, name: Area},
		givens: [
			{
				terminology: base and height,
				variables: [
					{char: b, name: Base},
					{char: h, name: Height}
				],
				mathjax: 'A=\frac{1}{2}bh',
				formula: '(1/2) * b * h'
			},
			{
				terminology: three sides,
				variables: [
					{char: a, name: Side},
					{char: b, name: Side},
					{char: c, name: Side}
				],
				specialVariable: {
					char: s,
					mathjax: 's=\frac{a+b+c}{2}',
					formula: '(a + b + c) / 2',
				},
				mathjax: 'A=\sqrt{s(s-a)(s-b)(s-c)}',
				formula: 'sqrt(s * (s - a) * (s - b) * (s - c))'
			},
			{
				terminology: two sides and angle between,
				variables: [
					{char: a, name: Side},
					{char: γ, name: Angle},
					{char: b, name: Side}
				],
				mathjax: 'A=\frac{1}{2}ab \sin{\gamma}',
				formula: '(1/2) * a * b * sin(γ)'
			},
			{
				terminology: two angles and side between,
				variables: [
					{char: β, name: Angle},
					{char: a, name: Side},
					{char: γ, name: Angle}
				],
				mathjax: 'A=\frac{a^2 \sin{\beta} \sin{\gamma}}{\sin(\beta + \gamma)}',
				formula: '(a^2 * sin(β) * sin(γ)) / sin(β + γ)'
			}
		]
	},
	{
		solveFor: {char: P, name: Perimeter},
		givens: [
			{
				terminology: three sides,
				variables: [
					{char: a, name: Side},
					{char: b, name: Side},
					{char: c, name: Side}
				],
				mathjax: 'P=a+b+c',
				formula: 'a + b + c'
			},
		]
	},
	{
		solveFor: {char: b, name: Base},
		givens: [
			{
				terminology: area and height,
				variables: [
					{char: A, name: Area},
					{char: h, name: Height}
				],
				mathjax: 'b=2\frac{A}{h}',
				formula: '2 * (A / h)'
			},
		]
	},
	{
		solveFor: {char: h, name: Height},
		givens: [
			{
				terminology: area and base,
				variables: [
					{char: A, name: Area},
					{char: b, name: Base}
				],
				mathjax: 'h=2\frac{A}{b}',
				formula: '2 * (A / b)'
			},
		]
	}
]
---