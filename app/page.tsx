import Image from "next/image";
import Head from 'next/head';
import UnderConstruction from '@/app/ui/under-construction';

export default function Home() {
  return (
    <>
        <Head>
            <title>Website Under Construction</title>
            <meta name="description" content="Welcome to the homepage" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <UnderConstruction />
          </div>
        </main>
    </>
  );
}
