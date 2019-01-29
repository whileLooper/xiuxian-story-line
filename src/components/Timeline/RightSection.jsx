import React from 'react';

const RightSection = props => (
  <div>
    <div className="row align-items-center justify-content-end how-it-works">
      <div className="col-10 text-right">
        <p>{props.content}</p>
      </div>
      <div className="col-2 text-center full">
        <div className="circle">{props.year}</div>
      </div>
    </div>
    {/* <!--path between 2-3--> */}
    <div className="row timeline">
      <div className="col-2">
        <div className="corner right-bottom" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner top-left" />
      </div>
    </div>
  </div>
);

export default RightSection;
