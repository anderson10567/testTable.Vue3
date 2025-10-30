import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'

export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: 'tests/setup.ts'
	}
})
