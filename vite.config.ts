import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repoName?.endsWith('.github.io')

export default defineConfig({
    base: repoName ? (isUserSite ? '/' : `/${repoName}/`) : '/',
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
})
