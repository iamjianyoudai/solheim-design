"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StyledLink from "../StyledLink";
import PostCard from "./PostCard";

interface ProjectContentProps {
  project: {
    title: string;
    content: string;
    image: string;
    date: string;
    client: string;
    year: string;
    role: string;
    url: string;
  };
}

const projectsData = [
  {
    title: "Project 1",
    content: "Content for project 1",
    image: "/hero4.jpg",
    date: "2023-01-01",
    client: "Client 1",
    year: "2023",
    role: "Frontend Developer",
    url: "/projects/project-1",
  },
  {
    title: "Project 2",
    content: "Content for project 2",
    image: "/hero4.jpg",
    date: "2023-02-01",
    client: "Client 2",
    year: "2023",
    role: "Backend Developer",
    url: "/projects/project-2",
  },
  {
    title: "Project 3",
    content: "Content for project 3",
    image: "/hero4.jpg",
    date: "2023-03-01",
    client: "Client 3",
    year: "2023",
    role: "Full Stack Developer",
    url: "/projects/project-3",
  },
  {
    title: "Project 4",
    content: "Content for project 4",
    image: "/hero4.jpg",
    date: "2023-03-01",
    client: "Client 4",
    year: "2023",
    role: "Full Stack Developer",
    url: "/projects/project-4",
  },
];
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const { title, content, image, date, client, year, role } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 wrapper"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 mx-auto">
          <h1 className="text-slate-900 text-center text-4xl lg:text-6xl font-medium ">
            {title}
          </h1>
          <p className="text-slate-500 mt-10">
            <span className="inline-flex space-x-3">
              <span>{formatDate(date)}</span>
              <span>&#8226;</span>
              <span>{role}</span>
            </span>
          </p>
        </div>
        <div className="mb-16">
          <Image
            src={image}
            alt={title}
            width={1065}
            height={644}
            className="object-cover object-top"
          />
        </div>
        <article className="prose mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl mb-10">
            <div className="flex justify-between">
              <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:absolute before:top-0 before:-left-[1px] before:h-7 before:w-[1px] before:bg-blue-600">
                <span className="block text-gray-400">Client</span>
                <span>{client}</span>
              </div>

              <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:absolute before:top-0 before:-left-[1px] before:h-7 before:w-[1px] before:bg-blue-600">
                <span className="block text-gray-400">Year</span>
                <span>{year}</span>
              </div>

              <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:absolute before:top-0 before:-left-[1px] before:h-7 before:w-[1px] before:bg-blue-600">
                <span className="block text-gray-400">Role</span>
                <span>{role}</span>
              </div>
            </div>
          </div>
          <div>{content}</div>
        </article>
      </div>
      <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
        <h2 className="text-2xl text-gray-700 mb-10">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData
            .filter((el) => el.title !== title)
            .map((item, i: number) => {
              if (i > 2) return null;
              return <PostCard key={i} index={i} project={item} />;
            })}
        </div>
        <div className="flex justify-center mt-10">
          <StyledLink href="/projects">View all Projects</StyledLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContent;
