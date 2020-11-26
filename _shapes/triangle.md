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
				mathjax: 'A=\frac{bh}{2}',
				formula: '(b * h) / 2'
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
					{char: α, name: Angle},
					{char: b, name: Side}
				],
				mathjax: 'A=\frac{ab \sin{\alpha}}{2}',
				formula: '(a * b * sin(unit(α, "deg"))) / 2'
			},
			{
				terminology: two angles and side between,
				variables: [
					{char: β, name: Angle},
					{char: a, name: Side},
					{char: γ, name: Angle}
				],
				mathjax: 'A=\frac{a^2 \sin{\beta}\sin{\gamma}}{2 \sin(\beta+\gamma)}',
				formula: '(a^2 * sin(unit(β, "deg")) * sin(unit(γ, "deg"))) / (2 * sin(unit((β + γ), "deg")))'
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
				mathjax: 'b=\frac{2A}{h}',
				formula: '(2 * A) / h'
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
				mathjax: 'h=\frac{2A}{b}',
				formula: '(2 * A) / b'
			},
		]
	}
]

shape-height: 145px;
---