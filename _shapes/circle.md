---
shape: circle
order: 1

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'radius',
				variables: [{char: 'r', name: 'radius'}],
				mathjax: 'A=\pi r^2',
				formula: 'pi * r^2'
			},
			{
				terminology: 'diameter',
				variables: [{char: 'd', name: 'diameter'}],
				mathjax: 'A=\frac{\pi d^2}{4}',
				formula: '(pi * d^2) / 4'
			},
			{
				terminology: 'circumference',
				variables: [{char: 'C', name: 'circumference'}],
				mathjax: 'A=\frac{C^2}{4\pi}',
				formula: '(C^2) / (4 * pi)'
			}
		]
	},
	{
		char: 'C',
		name: 'circumference',
		givens: [
			{
				terminology: 'radius',
				variables: [{char: 'r', name: 'radius'}],
				mathjax: 'C=2\pi r',
				formula: '2 * pi * r'
			},
			{
				terminology: 'diameter',
				variables: [{char: 'd', name: 'diameter'}],
				mathjax: 'C=\pi d',
				formula: 'pi * d'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'C=2 \sqrt{\pi A}',
				formula: '2 * sqrt(pi * A)'
			}
		]
	},
	{
		char: 'r',
		name: 'radius',
		givens: [
			{
				terminology: 'circumference',
				variables: [{char: 'C', name: 'circumference'}],
				mathjax: 'r=\frac{C}{2\pi}',
				formula: 'C / (2 * pi)'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'r=\frac{\sqrt{\pi A}}{\pi}',
				formula: 'sqrt(pi * A) / pi'
			},
			{
				terminology: 'diameter',
				variables: [{char: 'd', name: 'diameter'}],
				mathjax: 'r=\frac{d}{2}',
				formula: 'd / 2'
			}
		]
	},
	{
		char: 'd',
		name: 'diameter',
		givens: [
			{
				terminology: 'circumference',
				variables: [{char: 'C', name: 'circumference'}],
				mathjax: 'd=\frac{C}{\pi}',
				formula: 'C / pi'
			},
			{
				terminology: 'area',
				variables: [{char: 'A', name: 'area'}],
				mathjax: 'd=\frac{2\sqrt{\pi A}}{\pi}',
				formula: '2 * sqrt(pi * A) / pi'
			},
			{
				terminology: 'radius',
				variables: [{char: 'r', name: 'radius'}],
				mathjax: 'd=2r',
				formula: '2 * r'
			}
		]
	}
]
---