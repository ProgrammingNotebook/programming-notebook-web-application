import Image from 'next/image';
import { comfort } from '@/app/ui/fonts';

export default function UnderConstruction() {
    return (
        <>
              <div className="relative flex flex-col place-items-center ">
                <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Under Construction
                  </span>
                  <span className="">⏳</span>
                </h2>
                <p
                  className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
                  dangerouslySetInnerHTML={{
                    __html: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.",
                  }}
                ></p>
              </div>
            </>
    );
}