import Image from 'next/image';
import Footer from '@/app/components/footer';

export default function UnderConstruction() {
    return (
        <div className={`flex flex-col items-center leading-none text-white`}>
            <Image src="/under-construction.jpg" width={900} height={500} className="hidden md:block" alt="Under Construction"/>
            <div>
                <p className="text-[30px] p-4">Under Construction</p>
            </div>
            <Footer />
        </div>
    );
}