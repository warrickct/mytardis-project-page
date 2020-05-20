import React from 'react';
import './Experiment.css';

const experiment = ({experiment}) => {
    return (
        <li>{experiment.name}</li>
    );
};

export default experiment;