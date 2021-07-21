---
shape: hexagon
regular: true
order: 4

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'A=\frac{3\sqrt{3}s^{2}}{2}',
				formula: '(3 * sqrt(3) * s^2) / 2'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'A=2\sqrt{3}a^{2}',
				formula: '2 * sqrt(3) * a^2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=\frac{3\sqrt{3}R^{2}}{2}',
				formula: '(3 * sqrt(3) * R^2) / 2'
			}
		],
		tooltip: 'For a hexagon, side length is equal to circumradius (s=R).'
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'P=6s',
				formula: '6s'
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
				mathjax: 's=\frac{2a\sqrt{3}}{3}',
				formula: '2a * sqrt(3) / 3'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 's=R',
				formula: 'R'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 's=\frac{\sqrt{2A\sqrt{3}}}{3}',
				formula: 'sqrt(2A * sqrt(3)) / 3'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 's=\frac{P}{6}',
				formula: 'P / 6'
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
				mathjax: 'a=\frac{s\sqrt{3}}{2}',
				formula: 's * sqrt(3) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=\frac{R\sqrt{3}}{2}',
				formula: 'R * sqrt(3) / 2'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\sqrt{\frac{A\sqrt{3}}{6}}',
				formula: 'sqrt(A * sqrt(3) / 6)'
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
				mathjax: 'R=s',
				formula: 's'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'R=\frac{2a\sqrt{3}}{3}',
				formula: '2a * sqrt(3) / 3'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'R=\frac{\sqrt{2A\sqrt{3}}}{3}',
				formula: 'sqrt(2A * sqrt(3)) / 3'
			}
		]
	}
]
---