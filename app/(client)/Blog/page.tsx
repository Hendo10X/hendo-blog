import { FC } from 'react';
import Link from 'next/link';

const Blog: FC = () => {
    return (
        <div className="max-h-screen p-4 sm:p-24 flex flex-col items-start max-w-3xl mx-auto mt-10 sm:mt-10">
            <main className="space-y-6 tracking-tight">
                <h1 className="text-3xl font-medium font-inter">
                    Henderson Dike-Benard
                </h1>
                <div className='text-[#969292] pt-2'>
                    Polymath| Software designer,Interface engineer and Game dev
                </div>

                <p className="max-w-xl font-medium ">
                    Hi, I'm Hendo, A problem-solver with a knack for finding creative solutions.
                    Thrives in collaborative environments and enjoys building innovative products.
                </p>

                <nav className="pt-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/work" className="hover:text-[#969292] transition-colors">
                                Work
                            </Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link href="/" className="hover:text-[#969292] transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link href="/gallery" className="transition-colors hover:text-[#969292]">
                                Gallery
                            </Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link href="/resume" className=" transition-colors hover:text-[#969292]">
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default Blog;