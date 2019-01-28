import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline2  = () => (
  <div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // style={{textAlign: 'center'}}
        date="第一章"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">七玄门风云</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <p>进入七玄门修炼</p>
        <p>得到开始的木属性功法， 墨师父让其修炼到4层</p>
        <p>得到小瓶子</p>
        <p>遇到厉师兄， 给师兄减轻痛苦， 拿到眨眼剑法</p>
        <p>墨师父夺舍， 韩立反夺舍， 了解到修仙者</p>
        <p>成为七玄门神医</p>
        <p>保护七玄门争斗中， 杀死侏儒修仙者， 拿到一个符宝和升天令</p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </div>
);

export default Timeline2;