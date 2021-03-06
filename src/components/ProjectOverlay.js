import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();
  return (
    projects &&
    showProjectOverlay && (
      <div className='project-overlay' date-testid='project-overlay'>
        <ul className='project-overlay__list'>
          {projects.map((project) => {
            return (
              <li key={project.projectId} date-testid='project-overlay-action'>
                <div
                  onClick={() => {
                    setProject(project.projectId);
                    setShowProjectOverlay(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setProject(project.projectId);
                      setShowProjectOverlay(false);
                    }
                  }}
                  role='button'
                  tabIndex={0}
                  aria-label='Select the task project'
                >
                  {project.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};
