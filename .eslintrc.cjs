/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'next/core-web-vitals',
		'plugin:drizzle/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	plugins: ['drizzle', 'import'],
	rules: {
		'import/order': [
			1,
			{
				groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
				pathGroups: [
					{ pattern: 'db', group: 'internal' },
					{ pattern: 'config', group: 'internal' },
					{ pattern: 'ui', group: 'internal' },
				],
				pathGroupsExcludedImportTypes: ['internal'],
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'import/newline-after-import': 'error',
	},
}
