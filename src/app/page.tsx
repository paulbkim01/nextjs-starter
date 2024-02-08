import { db } from '~/db/client'

export default async function Home() {
	const fetchedCountries = await db.query.countries.findMany()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full  font-mono text-sm flex flex-col gap-3">
				Paulbkimdev app starter
				{fetchedCountries.map((country) => {
					return (
						<div key={country.id} className="border p-3 bg-slate-100">
							<h2>{country.id}</h2>
							<h1>{country.name}</h1>
						</div>
					)
				})}
			</div>
		</main>
	)
}
