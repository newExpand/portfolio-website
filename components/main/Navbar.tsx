import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="max-w-[1200px] w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/expand-logo.png"
                        alt="로고"
                        width={40}
                        height={40}
                        className="cursor-pointer hover:animate-slowspin min-w-[40px] min-h-[40px]"
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        newExpand
                    </span>
                </Link>
                <nav className="w-[500px] h-full flex flex-row items-center justify-between mt-20 md:mr-20 sm:mt-0 ">
                    <div className="flex flex-col sm:mt-0 sm:flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mx-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <Link
                            href="#about-me"
                            className="cursor-pointer py-2 md:py-0"
                        >
                            프로필
                        </Link>
                        <Link
                            href="#skills"
                            className="cursor-pointer py-2 md:py-0"
                        >
                            스킬
                        </Link>
                        <Link
                            href="#projects"
                            className="cursor-pointer py-2 md:py-0"
                        >
                            프로젝트
                        </Link>
                    </div>
                </nav>
                <div className="flex flex-row gap-5 min-w-[24px] min-h-[24px]">
                    {Socials.map((social) => (
                        <Link
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.name}
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
