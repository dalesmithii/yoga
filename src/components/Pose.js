import React from 'react';
import './Pose.css';

const Pose = ({name, sanskrit, level, tags}) => (
    <div className="Pose-card">
        <h1>{name}</h1>
        <em>{sanskrit}</em>
        <p><span>Level: {level}</span></p>
        <p><spam>Tags: {tags.join(", ")}</spam></p>
    </div>
);

export default Pose;