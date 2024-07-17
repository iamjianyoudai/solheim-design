import ProjectsItems from "./ProjectsItems";

const dummyProjects = [
  {
    url: "/projects/project-1",
    image: "/hero4.jpg",
    role: "Frontend Developer",
    title: "Project 1",
  },
  {
    url: "/projects/project-2",
    image: "/hero4.jpg",
    role: "Backend Developer",
    title: "Project 2",
  },
  {
    url: "/projects/project-3",
    image: "/hero4.jpg",
    role: "Full Stack Developer",
    title: "Project 3",
  },
  {
    url: "/projects/project-4",
    image: "/hero4.jpg",
    role: "Full Stack Developer",
    title: "Project 4",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="pt-8 lg:pt-8 pb-0 lg:pb-10">
      <div className="wrapper">
        <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
          <ProjectsItems currentItems={dummyProjects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
