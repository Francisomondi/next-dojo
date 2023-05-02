import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My react dojo</title>
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
          <h1>Hello My beautiful gallery</h1>

          <Link href={'/posts/first-post'}>
            Go to first post
          </Link>
        </main>
      
      </>
  )
}
