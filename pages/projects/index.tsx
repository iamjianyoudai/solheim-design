import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import { useRef } from "react";
import Projects from "./Projects";

interface Project {
  slug: string;
  title: string;
}

// Dummy data for projects
const dummyProjects: Project[] = [
  { slug: "project-1", title: "Project 1" },
  { slug: "project-2", title: "Project 2" },
  { slug: "project-3", title: "Project 3" },
];

const ProjectsPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <PageLayout>
      <Hero
        className="pt-32 lg:pt-52 pb-8"
        title="Projects"
        subTitle="Our Projects"
      />
      <Projects />
    </PageLayout>
  );
};

export default ProjectsPage;

// import PageLayout from "@/components/layout/PageLayout";
// import Hero from "@/components/ui/Hero";
// import { useRef } from "react";
// import { Projects } from "./Projects";

// // Dummy data for projects
// const dummyProjects = [
//   { slug: "project-1", title: "Project 1" },
//   { slug: "project-2", title: "Project 2" },
//   { slug: "project-3", title: "Project 3" },
// ];

// const ProjectsPage = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   return (
//     <PageLayout>
//       <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects" />
//       <Projects />
//       {/* <p className="items-center"> this is the projects page</p> */}

//       {/* <Projects className="pt-0 pb-52" itemsPerPage={2} /> */}
//       {/* <section className="pt-32 lg:pt-32 pb-0 lg:pb-10" ref={ref}>
//         <div className="wrapper">
//           <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
//             <p>Projects</p>
//             <ul>
//               {dummyProjects.map((project) => (
//                 <li key={project.slug}>
//                   <Link href={`/projects/${project.slug}`}>
//                     {project.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section> */}
//     </PageLayout>
//   );
// };

// export default ProjectsPage;
