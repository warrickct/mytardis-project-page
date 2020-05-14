
import React from 'react';
import './Project.css';

// class Project extends React.Component {
//     render() {
//         return (
//             <div>this is the project page.{projectId}</div>
//         )
//     }
// }


const Project = ({ projectId }) => {
    return (
        <div>project id for: {projectId}</div>
    )
}

export default Project;