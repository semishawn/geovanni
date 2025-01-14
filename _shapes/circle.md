---
shape: 'circle'
order: 1

properties: [
	{
		char: 'A',
		name: 'area',
		givens: [
			{
				terminology: 'radius',
				variables: [
					{char: 'r', name: 'radius'}
				],
				formulas: {
					standard: 'A=\pi r^2',
					tau: 'A=\frac{\tau r^{2}}{2}'
				},
				javascript: 'pi * r^2',
			},
			{
				terminology: 'diameter',
				variables: [
					{char: 'd', name: 'diameter'}
				],
				formulas: {
					standard: 'A=\frac{\pi d^2}{4}',
					tau: 'A=\frac{\tau d^{2}}{8}'
				},
				javascript: '(pi * d^2) / 4',
			},
			{
				terminology: 'circumference',
				variables: [
					{char: 'C', name: 'circumference'}
				],
				formulas: {
					standard: 'A=\frac{C^2}{4\pi}',
					tau: 'A=\frac{C^{2}}{2\tau}'
				},
				javascript: '(C^2) / (4 * pi)'
			}
		]
	},
	{
		char: 'C',
		name: 'circumference',
		givens: [
			{
				terminology: 'radius',
				variables: [
					{char: 'r', name: 'radius'}
				],
				formulas: {
					standard: 'C=2\pi r',
					tau: 'C=\tau r'
				},
				javascript: '2 * pi * r',
			},
			{
				terminology: 'diameter',
				variables: [
					{char: 'd', name: 'diameter'}
				],
				formulas: {
					standard: 'C=\pi d',
					tau: 'C=\frac{\tau d}{2}'
				},
				javascript: 'pi * d'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'C=2 \sqrt{\pi A}',
					tau: 'C=2\sqrt{\frac{\tau A}{2}}'
				},
				javascript: '2 * sqrt(pi * A)'
			}
		]
	},
	{
		char: 'r',
		name: 'radius',
		givens: [
			{
				terminology: 'circumference',
				variables: [
					{char: 'C', name: 'circumference'}
				],
				formulas: {
					standard: 'r=\frac{C}{2\pi}',
					tau: 'r=\frac{C}{\tau}'
				},
				javascript: 'C / (2 * pi)'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'r=\frac{\sqrt{\pi A}}{\pi}',
					irrational: 'r=\sqrt{\frac{A}{\pi}}',
					tau: 'r=\frac{\sqrt{2\tau A}}{\tau}',
					tauIrrational: 'r=\sqrt{\frac{2A}{\tau}}'
				},
				javascript: 'sqrt(pi * A) / pi',
			},
			{
				terminology: 'diameter',
				variables: [
					{char: 'd', name: 'diameter'}
				],
				formulas: {
					standard: 'r=\frac{d}{2}'
				},
				javascript: 'd / 2'
			}
		]
	},
	{
		char: 'd',
		name: 'diameter',
		givens: [
			{
				terminology: 'circumference',
				variables: [
					{char: 'C', name: 'circumference'}
				],
				formulas: {
					standard: 'd=\frac{C}{\pi}',
					tau: 'd=\frac{2C}{\tau}'
				},
				javascript: 'C / pi'
			},
			{
				terminology: 'area',
				variables: [
					{char: 'A', name: 'area'}
				],
				formulas: {
					standard: 'd=\frac{2\sqrt{\pi A}}{\pi}',
					tau: 'd=\frac{2\sqrt{2\tau A}}{\tau}'
				},
				javascript: '2 * sqrt(pi * A) / pi',
			},
			{
				terminology: 'radius',
				variables: [
					{char: 'r', name: 'radius'}
				],
				formulas: {
					standard: 'd=2r'
				},
				javascript: '2 * r'
			}
		]
	}
]
---