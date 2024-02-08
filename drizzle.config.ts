import 'dotenv/config'
import type { Config } from 'drizzle-kit'

/** @type {import('drizzle-kit').Config} */
export default {
	schema: './src/app/lib/db/schema.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL ?? '',
	},
} satisfies Config
