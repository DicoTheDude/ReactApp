import React from 'react';
import { ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsP} from './ProjectsElements';
import Icon1 from '../../images/Icon01.png';
import Icon2 from '../../images/Icon02.png';
import Icon3 from '../../images/Icon03.JPG';
import Icon4 from '../../images/Icon04.gif';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>My Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <ProjectsIcon src={Icon1} />
                <ProjectsH2>Python AI machine learning tool.</ProjectsH2>
                <ProjectsP><p className="subtext"><a className="project-link" href="https://github.com/DicoTheDude/Gravity-AI">View here</a></p></ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon2} />
                <ProjectsH2>Wordle Clone Javascript Game</ProjectsH2>
                <ProjectsP><p className="subtext"><a className="project-link" href="https://github.com/DicoTheDude/Wordle-Clone">View here</a></p></ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon3} />
                <ProjectsH2>Porfolio HTML/CSS/JS</ProjectsH2>
                <ProjectsP><p className="subtext"><a className="project-link" href="https://github.com/DicoTheDude/Portfolio-Website">View here</a></p></ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
    
  )
};

export default Projects;