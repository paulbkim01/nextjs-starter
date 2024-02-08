import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'url'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	test: {
		environment: 'jsdom',
		env: {
			DATABASE_URL: 'postgres://localhost:5432/test',
		},
	},
})
