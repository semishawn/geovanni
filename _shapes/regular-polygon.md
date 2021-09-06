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
				mathjax: 'A=\frac{n s^2 \cot \left( \frac{\pi}{n} \right)}{4}',
				formula: 'n * s^2 * cot(pi / n) / 4'
			},
			{
				terminology: 'number of sides and apothem',
				variables: [
					{char: 'n', name: 'number of side'},
					{char: 'a', name: 'apothem'}
				],
				mathjax: 'A=na^2 \tan \left( \frac{\pi}{n} \right)',
				formula: 'n * a^2 * tan(pi / n)'
			},
			{
				terminology: 'number of sides, side, and apothem',
				variables: [
					{char: 'n', name: 'number of side'},
					{char: 's', name: 'side'},
					{char: 'a', name: 'apothem'}
				],
				mathjax: 'A=\frac{nsa}{2}',
				formula: 'n * s * a / 2'
			},
			{
				terminology: 'perimeter and apothem',
				variables: [
					{char: 'P', name: 'perimeter'},
					{char: 'a', name: 'apothem'}
				],
				mathjax: 'A=\frac{Pa}{2}',
				formula: 'P * a / 2'
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
				mathjax: 's=\frac{P}{n}',
				formula: 'P / n'
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
				mathjax: 'a=\frac{s}{2 \tan \left( \frac{\pi}{n} \right) }',
				formula: 's / 2 * tan(pi / n)'
			},
			{
				terminology: 'number of sides and circumradius',
				variables: [
					{char: 'n', name: 'number of sides'},
					{char: 'R', name: 'circumradius'}
				],
				mathjax: 'a=R \cos \left( \frac{\pi}{n} \right)',
				formula: 'R * cos(pi / n)'
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
				mathjax: '\alpha=\frac{180(n-2)}{n}',
				formula: '180 * (n - 2) / n'
			},
			{
				terminology: 'exterior angle',
				variables: [
					{char: 'β', name: 'exterior angle'}
				],
				mathjax: '\alpha=180-\beta',
				formula: '180 - β'
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
				mathjax: '\beta=\frac{360}{n}',
				formula: '360 / n'
			},
			{
				terminology: 'interior angle',
				variables: [
					{char: 'α', name: 'interior angle'}
				],
				mathjax: '\beta=180-\alpha',
				formula: '180 - α'
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
				mathjax: 'n=\frac{360}{180-\alpha}',
				formula: '360 / (180 - α)'
			},
			{
				terminology: 'exterior angle',
				variables: [
					{char: 'β', name: 'exterior angle'}
				],
				mathjax: 'n=\frac{360}{\beta}',
				formula: '360 / β'
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
				mathjax: 'd=\frac{n\left(n-3\right)}{2}',
				formula: 'n * (n - 3) / 2'
			}
		]
	}
]
---