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
				variables: [{char: 's', name: 'side'}],
				mathjax: 'A=\frac{7\cot\left(\frac{\pi}{7}\right)s^{2}}{4}',
				formula: '7 * cot(pi / 7) * s^2 / 4'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'A=7\tan\left(\frac{\pi}{7}\right)a^{2}',
				formula: '7 * tan(pi / 7) * a^2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'A=\frac{7\sin\left(\frac{2\pi}{7}\right)R^{2}}{2}',
				formula: '7 * sin(2 * pi / 7) * R^2 / 2'
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
				mathjax: 'P=7s',
				formula: '7s'
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
				mathjax: 's=2a\tan \left(\frac{\pi}{7}\right)',
				formula: '2a * tan(pi / 7)'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 's=2R\sin\left(\frac{\pi}{7}\right)',
				formula: '2R * sin(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 's=\frac{\sqrt{28A\tan\left(\frac{\pi}{7}\right)}}{7}',
				formula: 'sqrt(28A * tan(pi / 7)) / 7'
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
		char: 'a',
		name: 'apothem',
		givens: [
			{
				terminology: 'side',
				variables: [{char: 's', name: 'side'}],
				mathjax: 'a=\frac{s\cot\left(\frac{\pi}{7}\right)}{2}',
				formula: 's * cot(pi / 7) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [{char: 'R', name: 'circumradius'}],
				mathjax: 'a=R\cos\left(\frac{\pi}{7}\right)',
				formula: 'R * cos(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'a=\frac{\sqrt{7A\cot\left(\frac{\pi}{7}\right)}}{7}',
				formula: 'sqrt(7A * cot(pi / 7)) / 7'
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
				mathjax: 'R=\frac{s\csc\left(\frac{\pi}{7}\right)}{2}',
				formula: 's * csc(pi / 7) / 2'
			},
			{
				terminology: 'apothem',
				variables: [{char: 'a', name: 'apothem'}],
				mathjax: 'R=a\sec\left(\frac{\pi}{7}\right)',
				formula: 'a * sec(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: '',
				formula: ''
			}
		]
	}
]
---