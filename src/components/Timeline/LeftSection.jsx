import React from 'react';

const LeftSection = props => (
  <div>
    <div className="row align-items-center how-it-works">
      <div className="col-2 text-center bottom">
        <div className="circle">{props.year}</div>
      </div>
      <div className="col-10">
        <p>{props.content}</p>
      </div>
    </div>
    {/* <!--path between 1-2--> */}
    <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner left-bottom" />
      </div>
    </div>
  </div>
);

export default LeftSection;
