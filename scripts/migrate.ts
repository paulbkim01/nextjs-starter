import 'dotenv/config'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import { env } from '../src/app/lib/env'

const conn = postgres(env.DATABASE_URL, { max: 1 })
await migrate(drizzle(conn), { migrationsFolder: './migrations' })
await conn.end()
