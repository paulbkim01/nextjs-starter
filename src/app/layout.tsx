import type { Metadata } from 'next'

import '~/app/ui/globals.css'

export const metadata: Metadata = {
	title: 'Paulbkimdev Next App',
	description: 'Generated using paulbkimdev template',
}
import { inter } from '~/app/ui/fonts'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
