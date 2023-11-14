"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-10 gap-8 mt-80 md:mt-40 max-w-[1200px] w-full m-auto z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Frontend Developer Portfolio
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto md:text-5xl lg:text-6xl break-keep"
                >
                    <span>
                        꾸준한 프로젝트로
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            다양한 UI/UX를{" "}
                        </span>
                        쌓고 있습니다.
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    저는 프론트엔드 개발자로서 새로운 시도와 도전을 좋아합니다.
                    제 프로젝트와 스킬을 확인해보세요!
                </motion.p>
                <motion.a
                    href="#projects"
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    프로젝트 보기
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center z-[-1] absolute md:relative"
            >
                <Image
                    src="/mainIconsDark.svg"
                    alt=""
                    width={650}
                    height={650}
                    className="w-[450px] h-[450px] opacity-30 md:opacity-100 md:w-[650px] md:h-[650px]"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
