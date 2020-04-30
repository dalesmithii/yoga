import React from 'react';
import Pose from './Pose';
import './SearchablePoseList.css';

const SearchablePoseList = ({fullPoseList, searchTerm}) => (
    <div className="pose-list-container">
        {fullPoseList
            .filter(el => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            .map((pose, i) =>(
        <Pose key={i} {...pose}/>
      ))}
    </div>
);

export default SearchablePoseList;