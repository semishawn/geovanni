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
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'A=\frac{3\sqrt{3}a^{2}}{2}'
				},
				javascript: '(3 * sqrt(3) * a^2) / 2'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'A=2\sqrt{3}r^{2}'
				},
				javascript: '2 * sqrt(3) * r^2'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'A=\frac{3\sqrt{3}R^{2}}{2}'
				},
				javascript: '(3 * sqrt(3) * R^2) / 2'
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
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'P=6a'
				},
				javascript: '6a'
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
					standard: 'a=\frac{2r\sqrt{3}}{3}'
				},
				javascript: '2 * r * sqrt(3) / 3'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'a=R'
				},
				javascript: 'R'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'a=\frac{\sqrt{2A\sqrt{3}}}{3}'
				},
				javascript: 'sqrt(2 * A * sqrt(3)) / 3'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'a=\frac{P}{6}'
				},
				javascript: 'P / 6'
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
					standard: 'h=a\sqrt{3}'
				},
				javascript: 'a * sqrt(3)'
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
					standard: 's=a\sqrt{3}'
				},
				javascript: 'a * sqrt(3)'
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
					standard: 'd=2a'
				},
				javascript: '2 * a'
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
					standard: 'r=\frac{a\sqrt{3}}{2}'
				},
				javascript: 'a * sqrt(3) / 2'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'r=\frac{R\sqrt{3}}{2}'
				},
				javascript: 'R * sqrt(3) / 2'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'r=\sqrt{\frac{A\sqrt{3}}{6}}'
				},
				javascript: 'sqrt(A * sqrt(3) / 6)'
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
					standard: 'R=a'
				},
				javascript: 'a'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'R=\frac{2r\sqrt{3}}{3}'
				},
				javascript: '2 * r * sqrt(3) / 3'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'R=\frac{\sqrt{2A\sqrt{3}}}{3}'
				},
				javascript: 'sqrt(2 * A * sqrt(3)) / 3'
			}
		]
	}
]
---