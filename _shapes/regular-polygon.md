---
shape: regular polygon
regular: true
order: 7

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'number of sides and side',
				variables: [
					{char: 'n', name: 'number of side'},
					{char: 's', name: 'side'}
				],
				formulas: {
					standard: 'A=\frac{n s^2 \cot \left( \frac{\pi}{n} \right)}{4}'
				},
				javascript: 'n * s^2 * cot(pi / n) / 4'
			},
			{
				terminology: 'number of sides and apothem',
				variables: [
					{char: 'n', name: 'number of side'},
					{char: 'a', name: 'apothem'}
				],
				formulas: {
					standard: 'A=na^2 \tan \left( \frac{\pi}{n} \right)'
				},
				javascript: 'n * a^2 * tan(pi / n)'
			},
			{
				terminology: 'number of sides, side, and apothem',
				variables: [
					{char: 'n', name: 'number of side'},
					{char: 's', name: 'side'},
					{char: 'a', name: 'apothem'}
				],
				formulas: {
					standard: 'A=\frac{nsa}{2}'
				},
				javascript: 'n * s * a / 2'
			},
			{
				terminology: 'perimeter and apothem',
				variables: [
					{char: 'P', name: 'perimeter'},
					{char: 'a', name: 'apothem'}
				],
				formulas: {
					standard: 'A=\frac{Pa}{2}'
				},
				javascript: 'P * a / 2'
			}
		]
	},
	{
		char: 's',
		name: 'side',
		givens: [
			{
				terminology: 'number of sides and perimeter',
				variables: [
					{char: 'n', name: 'number of sides'},
					{char: 'P', name: 'perimeter'}
				],
				formulas: {
					standard: 's=\frac{P}{n}'
				},
				javascript: 'P / n'
			}
		]
	},
	{
		char: 'a',
		name: 'apothem',
		givens: [
			{
				terminology: 'number of sides and side',
				variables: [
					{char: 'n', name: 'number of sides'},
					{char: 's', name: 'side'}
				],
				formulas: {
					standard: 'a=\frac{s}{2 \tan \left( \frac{\pi}{n} \right) }'
				},
				javascript: 's / 2 * tan(pi / n)'
			},
			{
				terminology: 'number of sides and circumradius',
				variables: [
					{char: 'n', name: 'number of sides'},
					{char: 'R', name: 'circumradius'}
				],
				formulas: {
					standard: 'a=R \cos \left( \frac{\pi}{n} \right)'
				},
				javascript: 'R * cos(pi / n)'
			}
		]
	},
	{
		char: 'α',
		name: 'interior angle',
		givens: [
			{
				terminology: 'number of sides',
				variables: [
					{char: 'n', name: 'number of sides'}
				],
				formulas: {
					standard: '\alpha=\frac{180(n-2)}{n}'
				},
				javascript: '180 * (n - 2) / n'
			},
			{
				terminology: 'exterior angle',
				variables: [
					{char: 'β', name: 'exterior angle'}
				],
				formulas: {
					standard: '\alpha=180-\beta'
				},
				javascript: '180 - β'
			}
		]
	},
	{
		char: 'β',
		name: 'exterior angle',
		givens: [
			{
				terminology: 'number of sides',
				variables: [
					{char: 'n', name: 'number of sides'}
				],
				formulas: {
					standard: '\beta=\frac{360}{n}'
				},
				javascript: '360 / n'
			},
			{
				terminology: 'interior angle',
				variables: [
					{char: 'α', name: 'interior angle'}
				],
				formulas: {
					standard: '\beta=180-\alpha'
				},
				javascript: '180 - α'
			}
		]
	},
	{
		char: 'n',
		name: 'number of sides',
		givens: [
			{
				terminology: 'interior angle',
				variables: [
					{char: 'α', name: 'interior angle'}
				],
				formulas: {
					standard: 'n=\frac{360}{180-\alpha}'
				},
				javascript: '360 / (180 - α)'
			},
			{
				terminology: 'exterior angle',
				variables: [
					{char: 'β', name: 'exterior angle'}
				],
				formulas: {
					standard: 'n=\frac{360}{\beta}'
				},
				javascript: '360 / β'
			}
		]
	},
	{
		char: 'd',
		name: 'number of diagonals',
		givens: [
			{
				terminology: 'number of sides',
				variables: [
					{char: 'n', name: 'number of sides'}
				],
				formulas: {
					standard: 'd=\frac{n\left(n-3\right)}{2}'
				},
				javascript: 'n * (n - 3) / 2'
			}
		]
	}
]
---