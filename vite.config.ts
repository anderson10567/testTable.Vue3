import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'


export default defineConfig({
   base: '/testTable.Vue3/',
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
})
