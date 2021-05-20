---
shape: triangle

equations: [
	{
		solveFor: {char: 'A', name: 'area'},
		givens: [
			{
				terminology: 'base and height',
				variables: [
					{char: 'b', name: 'base'},
					{char: 'h', name: 'height'}
				],
				mathjax: 'A=\frac{bh}{2}',
				formula: '(b * h) / 2'
			},
			{
				terminology: 'three sides',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'b', name: 'side'},
					{char: 'c', name: 'side'}
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
				terminology: 'two sides and angle between',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'α', name: 'angle'},
					{char: 'b', name: 'side'}
				],
				mathjax: 'A=\frac{ab \sin{\alpha}}{2}',
				formula: '(a * b * sin(α deg)) / 2'
			},
			{
				terminology: 'two angles and side between',
				variables: [
					{char: 'β', name: 'angle'},
					{char: 'a', name: 'side'},
					{char: 'γ', name: 'angle'}
				],
				mathjax: 'A=\frac{a^2 \sin{\beta}\sin{\gamma}}{2 \sin(\beta+\gamma)}',
				formula: '(a^2 * sin(β deg) * sin(γ deg)) / (2 * sin(β deg + γ deg))'
			}
		]
	},
	{
		solveFor: {char: 'P', name: 'perimeter'},
		givens: [
			{
				terminology: 'three sides',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'b', name: 'side'},
					{char: 'c', name: 'side'}
				],
				mathjax: 'P=a+b+c',
				formula: 'a + b + c'
			},
			{
				terminology: 'two sides and angle between',
				variables: [
					{char: 'a', name: 'side'},
					{char: 'α', name: 'angle'},
					{char: 'b', name: 'side'}
				],
				mathjax: 'P=a+b+\sqrt{a^2+b^2-2ab\cos{\alpha}}',
				formula: 'a + b + sqrt(a^2 + b^2 - (2 * a * b * cos(α deg)))'
			}
		]
	},
	{
		solveFor: {char: 'b', name: 'base'},
		givens: [
			{
				terminology: 'area and height',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'h', name: 'height'}
				],
				mathjax: 'b=\frac{2A}{h}',
				formula: '(2 * A) / h'
			},
		]
	},
	{
		solveFor: {char: 'h', name: 'height'},
		givens: [
			{
				terminology: 'area and base',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'b', name: 'base'}
				],
				mathjax: 'h=\frac{2A}{b}',
				formula: '(2 * A) / b'
			},
		]
	}
]
---