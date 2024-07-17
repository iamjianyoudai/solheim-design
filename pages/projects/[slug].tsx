import PageLayout from "@/components/layout/PageLayout";
import ProjectContent from "@/components/projects/ProjectContent";
import { GetStaticPaths, GetStaticProps } from "next";

// Dummy data for projects
const ProjectsData = [
  {
    slug: "project-1",
    title: "Project 1",
    content: "Details about Project 1",
    image: "/hero4.jpg",
    date: "2023-01-01",
    client: "Client A",
    year: "2023",
    role: "Developer",
  },
  {
    slug: "project-2",
    title: "Project 2",
    content: "Details about Project 2",
    image: "/hero4.jpg",
    date: "2023-02-01",
    client: "Client B",
    year: "2023",
    role: "Designer",
  },
  {
    slug: "project-3",
    title: "Project 3",
    content: "Details about Project 3",
    image: "/hero4.jpg",
    date: "2023-03-01",
    client: "Client C",
    year: "2023",
    role: "Manager",
  },
  {
    slug: "project-4",
    title: "Project 4",
    content: "Details about Project 4",
    image: "/hero4.jpg",
    date: "2023-03-01",
    client: "Client C",
    year: "2023",
    role: "Manager",
  },
];

interface ProjectPageProps {
  project: {
    title: string;
    content: string;
    image: string;
    date: string;
    client: string;
    year: string;
    role: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ProjectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = ProjectsData.find((project) => project.slug === params?.slug);

  return {
    props: {
      project: project || null,
    },
  };
};

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  if (!project) {
    return (
      <PageLayout>
        <p>Project not found</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <ProjectContent project={project} />
    </PageLayout>
  );
};

export default ProjectPage;
