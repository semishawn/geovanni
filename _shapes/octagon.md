---
shape: octagon
regular: true
order: 6

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'A=2\left(1+\sqrt{2}\right)s^2',
				formula: '2 * (1 + sqrt(2)) * s^2'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'A=8\left(\sqrt{2}-1\right)a^2',
				formula: '8 * (sqrt(2) - 1) * a^2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=2\sqrt{2}R^{2}',
				formula: '2 * sqrt(2) * R^2'
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
				mathjax: 'P=8s',
				formula: '8s'
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
				mathjax: 's=2a\left(\sqrt{2}-1\right)',
				formula: '2a * (sqrt(2) - 1)'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 's=R\sqrt{2-\sqrt{2}}',
				formula: 'R * sqrt(2 - sqrt(2))'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 's=\frac{\sqrt{2A\left(\sqrt{2}-1\right)}}{2}',
				formula: 'sqrt(2A * (sqrt(2) - 1)) / 2'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 's=\frac{P}{8}',
				formula: 'P / 8'
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
				mathjax: 'a=\frac{s\left(\sqrt{2}+1\right)}{2}',
				formula: 's * (sqrt(2) + 1) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=\frac{R\sqrt{2+\sqrt{2}}}{2}',
				formula: 'R * sqrt(2 + sqrt(2)) / 2'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\frac{\sqrt{2A\left(\sqrt{2}+1\right)}}{4}',
				formula: 'sqrt(2A * (sqrt(2) + 1)) / 4'
			}
		]
	}
]
---