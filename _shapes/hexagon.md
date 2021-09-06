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
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'A=\frac{3\sqrt{3}a^{2}}{2}',
				formula: '(3 * sqrt(3) * a^2) / 2'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'A=2\sqrt{3}r^{2}',
				formula: '2 * sqrt(3) * r^2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=\frac{3\sqrt{3}R^{2}}{2}',
				formula: '(3 * sqrt(3) * R^2) / 2'
			}
		],
		tooltip: 'For a hexagon, side length is equal to circumradius (a=R).'
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'P=6a',
				formula: '6a'
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
				mathjax: 'a=\frac{2r\sqrt{3}}{3}',
				formula: '2 * r * sqrt(3) / 3'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=R',
				formula: 'R'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\frac{\sqrt{2A\sqrt{3}}}{3}',
				formula: 'sqrt(2 * A * sqrt(3)) / 3'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 'a=\frac{P}{6}',
				formula: 'P / 6'
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
				mathjax: 'h=a\sqrt{3}',
				formula: 'a * sqrt(3)'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'h=2r',
				formula: '2 * r'
			}
		]
	},
	{
		char: 's',
		name: 'short diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 's=a\sqrt{3}',
				formula: 'a * sqrt(3)'
			}
		]
	},
	{
		char: 'd',
		name: 'long diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'd=2a',
				formula: '2 * a'
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
				mathjax: 'r=\frac{a\sqrt{3}}{2}',
				formula: 'a * sqrt(3) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'r=\frac{R\sqrt{3}}{2}',
				formula: 'R * sqrt(3) / 2'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'r=\sqrt{\frac{A\sqrt{3}}{6}}',
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
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'R=a',
				formula: 'a'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'R=\frac{2r\sqrt{3}}{3}',
				formula: '2 * r * sqrt(3) / 3'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'R=\frac{\sqrt{2A\sqrt{3}}}{3}',
				formula: 'sqrt(2 * A * sqrt(3)) / 3'
			}
		]
	}
]
---