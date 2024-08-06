import Image from "next/image";
import Head from 'next/head';
import UnderConstruction from '@/app/ui/under-construction';
import Header from '@/app/components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Programming Notebook',
}

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Header/>
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <UnderConstruction/>
                </div>
            </main>
        </>
    );
}
