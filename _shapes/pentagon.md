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
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'A=\frac{a^{2}\sqrt{25+10\sqrt{5}}}{4}'
				},
				javascript: '(a^2 * sqrt(25 + 10 * sqrt(5))) / 4'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'A=5r^{2}\sqrt{5-2\sqrt{5}}'
				},
				javascript: '5 * r^2 * sqrt(5 - 2 * sqrt(5))'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'A=\frac{5R^{2}\sqrt{10+2\sqrt{5}}}{8}'
				},
				javascript: '5 * R^2 * sqrt(10 + 2 * sqrt(5)) / 8'
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
					standard: 'P=5a'
				},
				javascript: '5a'
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
					standard: 'a=2r\sqrt{5-2\sqrt{5}}'
				},
				javascript: '2 * r * sqrt(5 - 2 * sqrt(5))'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'a=\frac{R\sqrt{10-2\sqrt{5}}}{2}'
				},
				javascript: 'R * sqrt(10 - 2 * sqrt(5)) / 2'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'a=\sqrt{\frac{A\left(\sqrt{10}-\sqrt{2}\right)\sqrt{5-\sqrt{5}}}{5}}'
				},
				javascript: 'sqrt(A * (sqrt(10) - sqrt(2)) * sqrt(5 - sqrt(5)) / 5)'
			},
			{
				terminology: 'perimeter',
				variables: [
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 'a=\frac{P}{5}'
				},
				javascript: 'P / 5'	
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
			}
		]
	},
	{
		char: 'd',
		name: 'diagonal',
		givens: [
			{
				terminology: 'side',
				variables: [
					{char: 'a', name: 'side'}
				],
				formulas: {
					standard: 'd=\frac{a\left(1+\sqrt{5}\right)}{2}'
				},
				javascript: 'a * (1 + sqrt(5)) / 2'
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
					standard: 'r=\frac{a\left(3\sqrt{10}+5\sqrt{2}\right)\sqrt{5-\sqrt{5}}}{40}'
				},
				javascript: 'a * (3 * sqrt(10) + 5 * sqrt(2)) * sqrt(5 - sqrt(5)) / 40'
			},
			{
				terminology: 'circumradius',
				variables: [
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'r=\frac{R\left(1+\sqrt{5}\right)}{4}'
				},
				javascript: 'R * (1 + sqrt(5)) / 4'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'r=\frac{\sqrt{A\left(5+2\sqrt{5}\right)\sqrt{5-2\sqrt{5}}}}{5}'
				},
				javascript: 'sqrt(A * (5 + 2 * sqrt(5)) * sqrt(5 - 2 * sqrt(5))) / 5'
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
					standard: 'R=\frac{a\left(5+\sqrt{5}\right)\sqrt{10-2\sqrt{5}}}{20}'
				},
				javascript: 'a * (5 + sqrt(5)) * sqrt(10 - 2 * sqrt(5)) / 20'
			},
			{
				terminology: 'inradius',
				variables: [
					{char: 'r', name: 'inradius'}
				],
				formulas: {
					standard: 'R=r\left(\sqrt{5}-1\right)'
				},
				javascript: 'r * (sqrt(5) - 1)'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'R=\frac{\sqrt{A\left(5-\sqrt{5}\right)\sqrt{10+2\sqrt{5}}}}{5}'
				},
				javascript: 'sqrt(A * (5 - sqrt(5)) * sqrt(10 + 2 * sqrt(5))) / 5'
			}
		]
	}
]
---