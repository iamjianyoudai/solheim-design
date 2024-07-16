import PageLayout from "@/components/layout/PageLayout";
import ProjectContent from "@/components/projects/ProjectContent";
import { GetStaticPaths, GetStaticProps } from "next";

// Dummy data for projects
const dummyProjects = [
  {
    slug: "project-1",
    title: "Project 1",
    content: "Details about Project 1",
    image: "/path/to/image1.jpg",
    date: "2023-01-01",
    client: "Client A",
    year: "2023",
    role: "Developer",
  },
  {
    slug: "project-2",
    title: "Project 2",
    content: "Details about Project 2",
    image: "/path/to/image2.jpg",
    date: "2023-02-01",
    client: "Client B",
    year: "2023",
    role: "Designer",
  },
  {
    slug: "project-3",
    title: "Project 3",
    content: "Details about Project 3",
    image: "/path/to/image3.jpg",
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
  const paths = dummyProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = dummyProjects.find(
    (project) => project.slug === params?.slug
  );

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
