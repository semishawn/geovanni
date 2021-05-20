---
shape: ellipse

equations: [
	{
		solveFor: {char: 'A', name: 'area'},
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
		solveFor: {char: 'C', name: 'circumference'},
		givens: [
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
				mathjax: 'C=\pi(a+b)\left(1+\frac{3h}{10+\sqrt{4-3h}}\right)',
				formula: 'pi * (a + b) * (1 + (3 * h) / (10 + sqrt(4 - (3 * h))))'
			},
			{
				terminology: 'major and minor axis (Gauss-Kummer sum)',
				variables: [
					{char: 'a', name: 'major axis'},
					{char: 'b', name: 'minor axis'}
				],
				specialVariable: {
					char: 'h',
					mathjax: 'h=\left(\frac{a-b}{a+b}\right)^2',
					formula: '((a - b) / (a + b))^2'
				},
				mathjax: 'C=\sum_{n=0}^{\infty} {\frac{1}{2} \choose n}^2 h^{2n}',
				formula: 'pi * (a + b) * ()'
			},
		]
	},
	{
		solveFor: {char: 'a', name: 'major axis'},
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
	}
]
---