import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    src: string;
    title: string;
    description: string;
    link: string;
    projectPeople?: string;
    projectStack?: string;
    projectType?: string;
};

const ProjectCard = ({
    src,
    title,
    description,
    link,
    projectPeople,
    projectStack,
    projectType,
}: Props) => {
    return (
        <Link
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
        >
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
                <p className="mt-2 text-gray-300">
                    <span className="font-bold text-gray-100">인원: </span>
                    {projectPeople}
                </p>
                <p className="mt-2 text-gray-300">
                    <span className="font-bold text-gray-100">
                        주요기술스택:{" "}
                    </span>
                    {projectStack}
                </p>
                <p className="mt-2 text-gray-300">
                    <span className="font-bold text-gray-100">
                        프로젝트타입:{" "}
                    </span>
                    {projectType}
                </p>
            </div>
        </Link>
    );
};

export default ProjectCard;
