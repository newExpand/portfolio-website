import Link from "next/link";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <footer className="max-w-[1200px] w-full h-full m-auto bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start pointer-events-auto">
                        <div className="font-bold text-[16px]">Community</div>
                        <Link
                            href="https://github.com/newExpand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center relative z-50 my-[15px] cursor-pointer"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                magin0auto@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                    &copy; newExpand 2023 Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
