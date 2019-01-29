import React from 'react';
import './Timeline.scss';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const StoryTimeline = props => (
  <div className="container-fluid blue-bg">
    <div className="container">
      <h1 className="pb-3 pt-2 text-center">凡人修仙传 年历表 🗓</h1>
      {props.timeline.map((event, i) =>
        i % 2 === 0 ? (
          <RightSection
            key={Object.keys(event)[0]}
            year={Object.keys(event)[0]}
            content={Object.values(event)[0]}
          />
        ) : (
          <LeftSection
            key={Object.keys(event)[0]}
            year={Object.keys(event)[0]}
            content={Object.values(event)[0]}
          />
        )
      )}
    </div>
  </div>
);

export default StoryTimeline;
