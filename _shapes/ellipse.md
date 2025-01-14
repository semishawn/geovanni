---
shape: ellipse
order: 4

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'major and minor axis',
				variables: [
					{char: 'a', name: 'major axis'},
					{char: 'b', name: 'minor axis'}
				],
				formulas: {
					standard: 'A=\pi ab',
					tau: 'A=\frac{\tau ab}{2}'
				},
				javascript: 'pi * a * b'
			}
		]
	},
	{
		char: 'C',
		name: 'circumference',
		givens: [
			{
				terminology: 'major and minor axis (Complete elliptic integral)',
				variables: [
					{char: 'a', name: 'major axis'},
					{char: 'b', name: 'minor axis'}
				],
				specialVariable: {
					char: 'k',
					formula: 'k=\sqrt{1-\frac{b^2}{a^2}}',
					javascript: 'sqrt(1 - (b^2 / a^2))'
				},
				formulas: {
					standard: 'C=4a\int_0^\frac{\pi}{2} \sqrt{1-k^2 sin^{2}\theta} d\theta'
				},
				javascript: '4 * a * ellipticInt(k)'
			},
			{
				terminology: 'major and minor axis (Ramanujan approximation)',
				variables: [
					{char: 'a', name: 'major axis'},
					{char: 'b', name: 'minor axis'}
				],
				specialVariable: {
					char: 'h',
					formula: 'h=\left(\frac{a-b}{a+b}\right)^2',
					javascript: '((a - b) / (a + b))^2'
				},
				formulas: {
					standard: 'C≈\pi(a+b)\left(1+\frac{3h}{10+\sqrt{4-3h}}\right)'
				},
				javascript: 'pi * (a + b) * (1 + (3 * h) / (10 + sqrt(4 - (3 * h))))'
			}
		],
		tooltip: "An ellipse's circumference cannot be exactly determined with a standard algebraic formula, a complete elliptic integral of the second kind must be calculated. Ramanujan's approximation is a simplified iterative step in the integral process, no less than 99.995% accurate when the ratio of a:b is < 5. For elliptic integral method, a must be greater than b."
	},
	{
		char: 'a',
		name: 'major axis',
		givens: [
			{
				terminology: 'area and minor axis',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'b', name: 'minor axis'}
				],
				formulas: {
					standard: 'a=\frac{A}{\pi b}',
					tau: 'A=\frac{2A}{\tau b}'
				},
				javascript: 'A / pi * b',
			}
		]
	},
	{
		char: 'b',
		name: 'minor axis',
		givens: [
			{
				terminology: 'area and major axis',
				variables: [
					{char: 'A', name: 'area'},
					{char: 'a', name: 'major axis'}
				],
				javascript: {
					standard: 'b=\frac{A}{\pi a}',
					tau: 'b=\frac{2A}{\tau a}'
				},
				javascript: 'A / pi * a',
			}
		]
	}
]
---