import 'dotenv/config'

import { sql } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../src/app/lib/env'
import { cities, countries } from '../src/db/schema'

const connection = postgres(env.DATABASE_URL, { max: 1 })

const db = drizzle(connection)

async function main() {
	await db.execute(sql`TRUNCATE TABLE countries CASCADE`)
	await db.execute(sql`ALTER SEQUENCE countries_id_seq RESTART WITH 1`)
	await db.execute(sql`TRUNCATE TABLE cities CASCADE`)
	await db.execute(sql`ALTER SEQUENCE cities_id_seq RESTART WITH 1`)

	await db
		.insert(countries)
		.values([
			{ name: 'United States' },
			{ name: 'Canada' },
			{ name: 'Mexico' },
			{ name: 'Brazil' },
			{ name: 'South Korea' },
		])

	await db.insert(cities).values([
		{
			countryId: 1,
			name: 'New York',
			popularity: 'popular',
		},
		{
			countryId: 1,
			name: 'Los Angeles',
			popularity: 'popular',
		},
		{
			countryId: 2,
			name: 'Toronto',
			popularity: 'popular',
		},
		{
			countryId: 3,
			name: 'Mexico City',
			popularity: 'popular',
		},
	])
}

try {
	await main()
} catch (error) {
	console.error(error)
} finally {
	await connection.end()
}
