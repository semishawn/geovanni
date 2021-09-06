---
shape: heptagon
regular: true
order: 5

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 'a', name: 'side'}],
				mathjax: 'A=\frac{7a^{2}\cot\left(\frac{\pi}{7}\right)}{4}',
				formula: '7 * a^2 * cot(pi / 7) / 4'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'A=7r^{2}\tan\left(\frac{\pi}{7}\right)',
				formula: '7 * r^2 * tan(pi / 7)'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=\frac{7R^{2}\sin\left(\frac{2\pi}{7}\right)}{2}',
				formula: '7 * R^2 * sin(2 * pi / 7) / 2'
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
				mathjax: 'P=7a',
				formula: '7 * a'
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
				mathjax: 'a=2r\tan \left(\frac{\pi}{7}\right)',
				formula: '2 * r * tan(pi / 7)'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=2R\sin\left(\frac{\pi}{7}\right)',
				formula: '2 * R * sin(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\frac{\sqrt{28A\tan\left(\frac{\pi}{7}\right)}}{7}',
				formula: 'sqrt(28 * A * tan(pi / 7)) / 7'
			},
			{
				terminology: 'perimeter',
				variables: [{char: 'P', name: 'perimeter'}],
				mathjax: 's=\frac{P}{7}',
				formula: 'P / 7'
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
				mathjax: 'h=\frac{a\cot\left(\frac{\pi}{14}\right)}{2}',
				formula: 'a * cot(pi / 14) / 2'
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
				mathjax: 's=2a\cos\left(\frac{\pi}{7}\right)',
				formula: '2 * a * cos(pi / 7)'
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
				mathjax: 'd=\frac{a\csc\left(\frac{\pi}{14}\right)}{2}',
				formula: 'a * csc(pi / 14) / 2'
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
				mathjax: 'r=\frac{a\cot\left(\frac{\pi}{7}\right)}{2}',
				formula: 'a * cot(pi / 7) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'r=R\cos\left(\frac{\pi}{7}\right)',
				formula: 'R * cos(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'r=\frac{\sqrt{7A\cot\left(\frac{\pi}{7}\right)}}{7}',
				formula: 'sqrt(7 * A * cot(pi / 7)) / 7'
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
				mathjax: 'R=\frac{a\csc\left(\frac{\pi}{7}\right)}{2}',
				formula: 'a * csc(pi / 7) / 2'
			},
			{
				terminology: 'inradius',
				variables: [{char: 'r', name: 'inradius'}],
				mathjax: 'R=r\sec\left(\frac{\pi}{7}\right)',
				formula: 'r * sec(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'R=\frac{\sqrt{14A\csc\left(\frac{2\pi}{7}\right)}}{7}',
				formula: 'sqrt(14 * A * csc(2 * pi / 7)) / 7'
			}
		]
	}
]
---