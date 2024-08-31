import Image from "next/image";
import Head from 'next/head';
import UnderConstruction from '@/app/ui/under-construction';
import Blog from '@/app/components/blog';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Programming Notebook',
}

export default function Home() {
    return (
        <>
            <Header/>
            <div className="mt-40">
                <Blog/>
            </div>
            <Footer/>
        </>
    );
}
