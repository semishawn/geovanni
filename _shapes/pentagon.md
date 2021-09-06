---
shape: pentagon
regular: true
order: 3

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'A=\frac{a^{2}\sqrt{25+10\sqrt{5}}}{4}',
				formula: '(5 * R^2 * sqrt(25 + 10 * sqrt(5))) / 4'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'A=5r^{2}\sqrt{5-2\sqrt{5}}',
				formula: '5 * r^2 * sqrt(5 - 2 * sqrt(5))'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=\frac{5R^{2}\sqrt{10+2\sqrt{5}}}{8}',
				formula: '5 * r^2 * sqrt(10 + 2 * sqrt(5)) / 8'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'P=5a',
				formula: '5a'
			}
		]
	},
	{
		char: 'a',
		name: 'side',
		givens: [
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'a=2r\sqrt{5-2\sqrt{5}}',
				formula: '2 * r * sqrt(5 - 2 * sqrt(5))'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=\frac{R\sqrt{10-2\sqrt{5}}}{2}',
				formula: 'R * sqrt(10 - 2 * sqrt(5)) / 2'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\sqrt{\frac{A\left(\sqrt{10}-\sqrt{2}\right)\sqrt{5-\sqrt{5}}}{5}}',
				formula: 'sqrt(A * (sqrt(10) - sqrt(2)) * sqrt(5 - sqrt(5)) / 5)'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 'a=\frac{P}{5}',
				formula: 'P / 5'	
			}
		]
	},
	{
		char: 'h',
		name: 'height',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'h=\frac{a\sqrt{5+2\sqrt{5}}}{2}',
				formula: 'a * sqrt(5 + 2 * sqrt(5)) / 2'
			}
		]
	},
	{
		char: 'd',
		name: 'diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'd=\frac{a\left(1+\sqrt{5}\right)}{2}',
				formula: 'a * (1 + sqrt(5)) / 2'
			}
		]
	},
	{
		char: 'r',
		name: 'inradius',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'r=\frac{a\left(3\sqrt{10}+5\sqrt{2}\right)\sqrt{5-\sqrt{5}}}{40}',
				formula: 'a * (3 * sqrt(10) + 5 * sqrt(2)) * sqrt(5 - sqrt(5)) / 40'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'r=\frac{R\left(1+\sqrt{5}\right)}{4}',
				formula: 'R * (1 + sqrt(5)) / 4'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'r=\frac{\sqrt{A\left(5+2\sqrt{5}\right)\sqrt{5-2\sqrt{5}}}}{5}',
				formula: 'sqrt(A * (5 + 2 * sqrt(5)) * sqrt(5 - 2 * sqrt(5))) / 5'
			}
		]
	},
	{
		char: 'R',
		name: 'circumradius',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'R=\frac{a\left(5+\sqrt{5}\right)\sqrt{10-2\sqrt{5}}}{20}',
				formula: 'a * (5 + sqrt(5)) * sqrt(10 - 2 * sqrt(5)) / 20'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'R=r\left(\sqrt{5}-1\right)',
				formula: 'r * (sqrt(5) - 1)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'R=\frac{\sqrt{A\left(5-\sqrt{5}\right)\sqrt{10+2\sqrt{5}}}}{5}',
				formula: 'sqrt(A * (5 - sqrt(5)) * sqrt(10 + 2 * sqrt(5))) / 5'
			}
		]
	}
]
---