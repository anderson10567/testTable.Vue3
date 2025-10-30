/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	type EmptyProps = Record<string, never>
	type EmptyData = Record<string, never>
	// Avoid `{}` and `any` to satisfy strict lint rules
	const component: DefineComponent<EmptyProps, EmptyData, unknown>
	export default component
}
