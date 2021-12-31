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
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'A=2a^{2}\left(1+\sqrt{2}\right)'
				},
				javascript: '2 * a^2 * (1 + sqrt(2))'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'A=8r^{2}\left(\sqrt{2}-1\right)'
				},
				javascript: '8 * r^2 * (sqrt(2) - 1)'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'A=2R^{2}\sqrt{2}'
				},
				javascript: '2 * R^2 * sqrt(2)'
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
					standard: 'P=8a'
				},
				javascript: '8 * a'
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
					standard: 'a=2r\left(\sqrt{2}-1\right)'
				},
				javascript: '2 * r * (sqrt(2) - 1)'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'a=R\sqrt{2-\sqrt{2}}'
				},
				javascript: 'R * sqrt(2 - sqrt(2))'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'a=\frac{\sqrt{2A\left(\sqrt{2}-1\right)}}{2}'
				},
				javascript: 'sqrt(2A * (sqrt(2) - 1)) / 2'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'a=\frac{P}{8}'
				},
				javascript: 'P / 8'
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
					standard: 'h=\frac{a\sqrt{5+2\sqrt{5}}}{2}'
				},
				javascript: 'a * sqrt(5 + 2 * sqrt(5)) / 2'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'h=2r'
				},
				javascript: '2 * r'
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
					standard: 's=a\sqrt{2+\sqrt{2}}'
				},
				javascript: 'a * sqrt(2 + sqrt(2))'
			}
		]
	},
	{
		char: 'm',
		name: 'medium diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'm=a(1+\sqrt{2})'
				},
				javascript: 'a * (1 + sqrt(2))'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'm=2r'
				},
				javascript: '2 * r'
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
					standard: 'd=a\sqrt{4+2\sqrt{2}}'
				},
				javascript: 'a * sqrt(4 + 2 * sqrt(2))'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'd=2R'
				},
				javascript: '2 * R'
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
					standard: 'r=\frac{a\left(\sqrt{2}+1\right)}{2}'
				},
				javascript: 'a * (sqrt(2) + 1) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'r=\frac{R\sqrt{2+\sqrt{2}}}{2}'
				},
				javascript: 'R * sqrt(2 + sqrt(2)) / 2'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'r=\frac{\sqrt{2A\left(\sqrt{2}+1\right)}}{4}'
				},
				javascript: 'sqrt(2 * A * (sqrt(2) + 1)) / 4'
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
					standard: 'R=\frac{a\left(2+\sqrt{2}\right)\sqrt{2-\sqrt{2}}}{2}'
				},
				javascript: 'a * (2 + sqrt(2)) * sqrt(2 - sqrt(2)) / 2'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'R=r\sqrt{4-2\sqrt{2}}'
				},
				javascript: 'r * sqrt(4 * 2 * sqrt(2))'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'R=\frac{\sqrt{A\sqrt{2}}}{2}'
				},
				javascript: 'sqrt(A * sqrt(2)) / 2'
			}
		]
	}
]
---