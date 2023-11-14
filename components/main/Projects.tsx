import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex flex-col items-center justify-center py-20"
        >
            <div className="flex flex-col justify-center items-center gap-4 py-20">
                <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    프로젝트
                </h1>
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Don&apos;t worry about failure. You only need to do it right
                    once.
                </div>
            </div>
            <div className="max-w-[1200px] w-full h-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    link="https://thinkwrapp.site"
                    src="/thinkwrapp.png"
                    title="ThinkWrapp"
                    description="React와 Nest.js를 사용하여 만든 3D 메타버스 플랫폼 입니다. 메타방을 만들어 사람들과 채팅 및 화상통화로 소통하며 공간을 꾸밀 수 있습니다."
                    projectPeople="1명"
                    projectStack="React, TypeScript, Zod, React-Query, React-Hook-Form, Redux, Redux-Saga, Redux-persist, Styled-Component, Nest.js, MongoDB"
                    projectType="개인 프로젝트"
                />
                <ProjectCard
                    link="https://expandmemo.site"
                    src="/expandmemo.png"
                    title="Expand Memo"
                    description="Next.js를 사용하여 구축한 메모앱 입니다. 메모는 폴더 구조를 가지고 있으며, 작성, 수정, 삭제가 가능하며, 메모를 웹에 게시 할 수 있습니다."
                    projectPeople="1명"
                    projectStack="Next.js, TypeScript, Tailwind CSS, Zustand"
                    projectType="개인 프로젝트"
                />
                <ProjectCard
                    link="https://dbsyacmkozvg1.cloudfront.net"
                    src="/cstudy.png"
                    title="Cstudy"
                    description="React와 Java를 사용하여 구축한 CS지식 퀴즈앱 입니다. 퀴즈 풀기, 대회 참가, 랭킹확인이 가능합니다. 현재 백엔드는 서버를 내린 상태라 더미데이터로 작동합니다."
                    projectPeople="프론트엔드 1명, 백엔드 2명"
                    projectStack="React, TypeScript, Styled-Component, Zustand, React-Hook-Form"
                    projectType="팀 프로젝트"
                />
            </div>
        </div>
    );
};

export default Projects;
