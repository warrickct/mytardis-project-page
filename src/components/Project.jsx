
import React from 'react';
import './Project.css';

const projectList = (experiments) => {
    experiments.forEach(experiment => {
        return (
            <div>experiment.name</div>
        )
    });
}

const experimentList = (projectId) => {
    let experiments = []
    for (let i = 0; i < 20; i++) {
        experiments.push({
            name: 'project__' + projectId + "_experiment__" + i,
            description: "This is the description for experiment #" + i,
        });
    }
    return experiments;
}

const Project = ({ projectId }) => {

    return (
        <div>
            <div>project id for: {projectId}</div>
            <ul>
                {
                    experimentList(projectId).map(item => {
                    return <li>{item.name}</li>;
                    })
                }
            </ul>
        </div>
    )
}

export default Project;