import React, { useEffect, useState } from "react";
import { NextPage } from 'next'
import { fetchProjects } from "./api/fetchProjects";
import ProjectList from "../components/ProjectList";
import Layout from '../components/Layout';
import { Project } from '../interfaces/';

interface Props {
  projects: Project[];
}

const ProjectPage: NextPage<Props> = ({ projects }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <Layout title="IP Code - Projects">
    <h1>These are my projects</h1>
      {isLoading ? (
        <div>
          <i className="fa fa-refresh fa-spin" />
        </div>
      ) : (
        <>
          <div className="container" style={{ overflow: "hidden" }}>          
            <ProjectList projects={projects} />
          </div>
          <style jsx>
            {`
          .container {
            display: flex;
            flex-direction: row;
            padding: 20px;
            overflow-x: hidden;
          }
          @media (max-width: 800px) {
            .container {
              flex-direction: column;
            }
        `}
          </style>
        </>
      )}
      </Layout>
    </>
  );
};

ProjectPage.getInitialProps = async () => {
  const projects = await fetchProjects();
  return {
    projects,
  }
  
};

export default ProjectPage;