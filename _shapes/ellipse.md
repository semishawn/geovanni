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
				mathjax: 'A=\pi ab',
				formula: 'pi * a * b'
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
					char: 'e',
					mathjax: 'e=\sqrt{1-\frac{b^2}{a^2}}',
					formula: 'sqrt(1 - (b^2 / a^2))'
				},
				mathjax: 'C=4a\int_0^\frac{\pi}{2} \sqrt{1-e^2 sin^{2}\theta} d\theta',
				formula: '4 * a * ellipticInt(e^2)'
			},
			{
				terminology: 'major and minor axis (Ramanujan approximation)',
				variables: [
					{char: 'a', name: 'major axis'},
					{char: 'b', name: 'minor axis'}
				],
				specialVariable: {
					char: 'h',
					mathjax: 'h=\left(\frac{a-b}{a+b}\right)^2',
					formula: '((a - b) / (a + b))^2'
				},
				mathjax: 'C≈\pi(a+b)\left(1+\frac{3h}{10+\sqrt{4-3h}}\right)',
				formula: 'pi * (a + b) * (1 + (3 * h) / (10 + sqrt(4 - (3 * h))))'
			}
		],
		tooltip: "An ellipse's circumference cannot be exactly determined with a standard algebraic formula, a direct elliptic integral must be calculated. Ramanujan's approximation is a simplified iterative step in the integral process, no less than 99.995% accurate when the ratio of a:b is < 5. For elliptic integral method, a must be greater than b."
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
				mathjax: 'a=\frac{A}{\pi b}',
				formula: 'A / pi * b'
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
				mathjax: 'b=\frac{A}{\pi a}',
				formula: 'A / pi * a'
			}
		]
	}
]
---