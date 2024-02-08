/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		DATABASE_HOST: z.string(),
		DATABASE_PORT: z.number(),
		DATABASE_USER: z.string(),
		DATABASE_PASSWORD: z.string(),
		DATABASE_DATABASE: z.string(),
	},
	client: {},
	runtimeEnv: {
		DATABASE_URL: process.env.DB_URL,
		DATABASE_HOST: process.env.DB_HOST,
		DATABASE_PORT: process.env.DB_PORT,
		DATABASE_USER: process.env.DB_USER,
		DATABASE_PASSWORD: process.env.DB_PASS,
		DATABASE_DATABASE: process.env.NAME,
	},
})
