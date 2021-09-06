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
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'A=2a^{2}\left(1+\sqrt{2}\right)',
				formula: '2 * a^2 * (1 + sqrt(2))'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'A=8r^{2}\left(\sqrt{2}-1\right)',
				formula: '8 * r^2 * (sqrt(2) - 1)'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=2R^{2}\sqrt{2}',
				formula: '2 * R^2 * sqrt(2)'
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
				mathjax: 'P=8a',
				formula: '8 * a'
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
				mathjax: 'a=2r\left(\sqrt{2}-1\right)',
				formula: '2 * r * (sqrt(2) - 1)'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=R\sqrt{2-\sqrt{2}}',
				formula: 'R * sqrt(2 - sqrt(2))'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\frac{\sqrt{2A\left(\sqrt{2}-1\right)}}{2}',
				formula: 'sqrt(2A * (sqrt(2) - 1)) / 2'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 'a=\frac{P}{8}',
				formula: 'P / 8'
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
				mathjax: 's=a\sqrt{2+\sqrt{2}}',
				formula: 'a * sqrt(2 + sqrt(2))'
			}
		]
	},
	{
		char: 'm',
		name: 'medium diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'm=a(1+\sqrt{2})',
				formula: 'a * (1 + sqrt(2))'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'm=2r',
				formula: '2 * r'
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
				mathjax: 'd=a\sqrt{4+2\sqrt{2}}',
				formula: 'a * sqrt(4 + 2 * sqrt(2))'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'd=2R',
				formula: '2 * R'
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
				mathjax: 'r=\frac{a\left(\sqrt{2}+1\right)}{2}',
				formula: 'a * (sqrt(2) + 1) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'r=\frac{R\sqrt{2+\sqrt{2}}}{2}',
				formula: 'R * sqrt(2 + sqrt(2)) / 2'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'r=\frac{\sqrt{2A\left(\sqrt{2}+1\right)}}{4}',
				formula: 'sqrt(2 * A * (sqrt(2) + 1)) / 4'
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
				mathjax: 'R=\frac{a\left(2+\sqrt{2}\right)\sqrt{2-\sqrt{2}}}{2}',
				formula: 'a * (2 + sqrt(2)) * sqrt(2 - sqrt(2)) / 2'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'R=r\sqrt{4-2\sqrt{2}}',
				formula: 'r * sqrt(4 * 2 * sqrt(2))'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'R=\frac{\sqrt{A\sqrt{2}}}{2}',
				formula: 'sqrt(A * sqrt(2)) / 2'
			}
		]
	}
]
---