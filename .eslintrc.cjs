module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		allowImportExportEverywhere: true
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-empty-function': 'error',
		'comma-spacing': 'error',
		'line-comment-position': ['error', 'above'],
		'multiline-comment-style': ['error', 'starred-block'],
		'no-trailing-spaces': 'error',
		'eol-last': ['error', 'always']
	}
};
