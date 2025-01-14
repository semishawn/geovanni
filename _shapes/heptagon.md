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
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'A=\frac{7a^{2}\cot\left(\frac{\pi}{7}\right)}{4}'
				},
				javascript: '7 * a^2 * cot(pi / 7) / 4'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'A=7r^{2}\tan\left(\frac{\pi}{7}\right)'
				},
				javascript: '7 * r^2 * tan(pi / 7)'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
					],
				formulas: {
					standard: 'A=\frac{7R^{2}\sin\left(\frac{2\pi}{7}\right)}{2}'
				},
				javascript: '7 * R^2 * sin(2 * pi / 7) / 2'
			}
		]
	},
	{
		char: 'P',
		name: 'perimeter',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'P=7a'
				},
				javascript: '7 * a'
			}
		]
	},
	{
		char: 'a',
		name: 'side',
		givens: [
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'a=2r\tan \left(\frac{\pi}{7}\right)'
				},
				javascript: '2 * r * tan(pi / 7)'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'a=2R\sin\left(\frac{\pi}{7}\right)'
				},
				javascript: '2 * R * sin(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'a=\frac{\sqrt{28A\tan\left(\frac{\pi}{7}\right)}}{7}'
				},
				javascript: 'sqrt(28 * A * tan(pi / 7)) / 7'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 's=\frac{P}{7}'
				},
				javascript: 'P / 7'
			}
		]
	},
	{
		char: 'h',
		name: 'height',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'h=\frac{a\cot\left(\frac{\pi}{14}\right)}{2}'
				},
				javascript: 'a * cot(pi / 14) / 2'
			}
		]
	},
	{
		char: 's',
		name: 'short diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 's=2a\cos\left(\frac{\pi}{7}\right)'
				},
				javascript: '2 * a * cos(pi / 7)'
			}
		]
	},
	{
		char: 'd',
		name: 'long diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'd=\frac{a\csc\left(\frac{\pi}{14}\right)}{2}'
				},
				javascript: 'a * csc(pi / 14) / 2'
			}
		]
	},
	{
		char: 'r',
		name: 'inradius',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'r=\frac{a\cot\left(\frac{\pi}{7}\right)}{2}'
				},
				javascript: 'a * cot(pi / 7) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'r=R\cos\left(\frac{\pi}{7}\right)'
				},
				javascript: 'R * cos(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'r=\frac{\sqrt{7A\cot\left(\frac{\pi}{7}\right)}}{7}'
				},
				javascript: 'sqrt(7 * A * cot(pi / 7)) / 7'
			}
		]
	},
	{
		char: 'R',
		name: 'circumradius',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'R=\frac{a\csc\left(\frac{\pi}{7}\right)}{2}'
				},
				javascript: 'a * csc(pi / 7) / 2'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'R=r\sec\left(\frac{\pi}{7}\right)'
				},
				javascript: 'r * sec(pi / 7)'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'R=\frac{\sqrt{14A\csc\left(\frac{2\pi}{7}\right)}}{7}'
				},
				javascript: 'sqrt(14 * A * csc(2 * pi / 7)) / 7'
			}
		]
	}
]
---