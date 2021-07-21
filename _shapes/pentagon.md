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
				variables: [{char: 's', name: 'side'}],
				mathjax: 'A=\frac{\sqrt{25+10\sqrt{5}}s^{2}}{4}',
				formula: 'sqrt(25 + 10 * sqrt(5)) s^2 / 4'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'A=5\sqrt{5-2\sqrt{5}}a^{2}',
				formula: '5 * sqrt(5 - 2 * sqrt(5)) * a^2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=\frac{5\sqrt{10+2\sqrt{5}}R^{2}}{8}',
				formula: '(5 * sqrt(10 + 2 * sqrt(5)) * R^2) / 8'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'P=5s',
				formula: '5s'
			}
		]
	},
	{
		char: 's',
		name: 'side',
		givens: [
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 's=2a\sqrt{5-2\sqrt{5}}',
				formula: '2a * sqrt(5 - 2 * sqrt(5))'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 's=\frac{R\sqrt{10-2\sqrt{5}}}{2}',
				formula: 'R * sqrt(10 - 2 * sqrt(5)) / 2'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 's=\sqrt{\frac{A\left(\sqrt{10}-\sqrt{2}\right)\sqrt{5-\sqrt{5}}}{5}}',
				formula: 'sqrt(A * (sqrt(10) - sqrt(2)) * sqrt(5 - sqrt(5)) / 5)'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 's=\frac{P}{5}',
				formula: 'P / 5'	
			}
		]
	},
	{
		char: 'a',
		name: 'apothem',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'a=\frac{s\left(3\sqrt{10}+5\sqrt{2}\right)\sqrt{5-\sqrt{5}}}{40}',
				formula: 's * (3 * sqrt(10) + 5 * sqrt(2)) * sqrt(5 - sqrt(5)) / 40'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=\frac{R\left(1+\sqrt{5}\right)}{4}',
				formula: 'R * (1 + sqrt(5)) / 4'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\frac{\sqrt{A\left(5+2\sqrt{5}\right)\sqrt{5-2\sqrt{5}}}}{5}',
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
				variables: [{char: 's', name: 'side'}],
				mathjax: 'R=\frac{s\left(5+\sqrt{5}\right)\sqrt{10-2\sqrt{5}}}{20}',
				formula: 's * (5 + sqrt(5)) * sqrt(10 - 2 * sqrt(5)) / 20'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'R=a\left(\sqrt{5}-1\right)',
				formula: 'a * (sqrt(5) - 1)'
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