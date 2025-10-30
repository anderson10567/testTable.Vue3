/* eslint-env node */
module.exports = {
	root: true,
	env: { browser: true, es2021: true, node: true },
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier'
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off'
	}
}
