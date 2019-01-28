import React from 'react';
// import styled from 'styled-components';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import './Timeline.scss';

const StoryTimeline = () => (
  <div>
    <Timeline>
      <TimelineEvent
        orientation="right"
        title="第一卷 七玄门风云"
        createdAt="2016-09-12 10:06 PM"
        icon={<i>一</i>}
        iconColor="#757575"
        container="card"
        cardHeaderStyle={{ backgroundColor: '#e0e0e0', color: '#503331' }}
      >
        <p>进入七玄门修炼</p>
        <p>得到开始的木属性功法， 墨师父让其修炼到4层</p>
        <p>得到小瓶子</p>
        <p>遇到厉师兄， 给师兄减轻痛苦， 拿到眨眼剑法</p>
        <p>墨师父夺舍， 韩立反夺舍， 了解到修仙者</p>
        <p>成为七玄门神医</p>
        <p>保护七玄门争斗中， 杀死侏儒修仙者， 拿到一个符宝和升天令</p>
      </TimelineEvent>
      <TimelineEvent
        orientation="right"
        title="第二卷 初踏修仙路"
        createdAt="2016-09-12 10:06 PM"
        icon={<i>二</i>}
        iconColor="#757575"
        container="card"
        cardHeaderStyle={{ backgroundColor: '#e0e0e0', color: '#503331' }}
      >
        <p>
          去了城市
          <br />
          到了新城， 遇见了孙二狗
          <br />
          去了墨家， 并且杀死了墨家敌对帮派之一的门主
          <br />
          太南山交易大会
          <br />
          认识了涵云芝， 从那里买到了炼制符的工具
          <br />
          遇见了青颜真人等人， 选择分开行动， 被截杀反杀
          <br />
          进入黄枫谷
          <br />
          被小老头替孙子交换走了筑基丹， 但是赖了大部分交换的物品
          <br />
          来到百药园， 给马老头看着
          <br />
          非常有天赋的慕容兄弟被人揍， 找挡箭牌找到了韩立， 韩立躲开了， 被聂师妹教训了
          <br />
          卖了千年灵药， 买来了符宝等武器
          <br />
          晚上回来遇见陈巧倩， 被男朋友奸杀， 杀了男朋友， 抢了两颗筑基丹， 猥亵了陈巧倩
        </p>
      </TimelineEvent>
      <TimelineEvent
        orientation="right"
        title="第三卷 魔道入侵"
        createdAt="2016-09-12 10:06 PM"
        icon={<i>三</i>}
        iconColor="#757575"
        container="card"
        cardHeaderStyle={{ backgroundColor: '#e0e0e0', color: '#503331' }}
      >
        <pre>
          血色试炼
          <br />
            救了涵云芝又一次
          <br />
            蛟的作用下， 和南宫婉做爱， 然后清醒做爱， 南宫婉这时候结丹， 韩立练气
          <br />
            拿到了很多草药， 李师叔为了草药， 收了弟子， 然后小老头还了欠着的草药
          <br />
            回来之后筑基成功
          <br />
          回来之后的交易会
          <br />
            遇见了齐云霄
            <br />
            遇见了傀儡， 得知大衍
            <br />
            遇见雷万鹤， 用千年灵药交换了药方
            <br />
            在李师叔那里得到了青元剑诀， 三重转元功
            <br />
          和董萱儿一起去燕氏夺宝大会
          <br />
            遇见了墨彩环（最小古怪精灵的）， 帮助解决了纠纷
            <br />
            鬼灵门和燕氏联手血迹， 韩立跑掉了
            <br />
          执行黄枫谷的任务
          <br />
            发现了白玉蜘蛛和古传送阵
            <br />
            陈俏倩得知韩立在与魔道的大战中杀人无数
            <br />
            认识了辛如音， 让她帮忙修复传送阵
            <br />
          去秦家帮忙保护
          <br />
            遇见了一个少女萧翠儿， 让给马老头当徒弟
            <br />
            去皇帝那里消灭了傀儡皇帝， 得到了煞丹
            <br />
          回来继续执行任务
          <br />
            到孙二狗那里灭掉了藏在曲魂体内的结丹人， 得知好多灵虫， 得知魔道即将大举进攻
            <br />
            为了给墨家报仇， 杀入五色门， 发现墨玉珠成了少夫人
            <br />
            齐云霄死了， 韩立答应给报仇
            <br />
            半路遇见了南宫婉， 救了下来， 拒绝了和另外女弟子双修， 拿了灵石传送走了 
            <br />
        </pre>
      </TimelineEvent>
    </Timeline>
  </div>
);

const StoryTimeline2 = () => (
  <div className="container-fluid blue-bg">
    <div className="container">
      <h1 className="pb-3 pt-2 text-center">凡人修仙传 年历表 🗓</h1>
      {/* <!--first section--> */}
      <div className="row align-items-center how-it-works">
        <div className="col-2 text-center bottom">
          <div className="circle">1</div>
        </div>
        <div className="col-10">
          <p>进入七玄门修炼</p>
          <p>得到开始的木属性功法， 墨师父让其修炼到4层</p>
          <p>得到小瓶子</p>
          <p>遇到厉师兄， 给师兄减轻痛苦， 拿到眨眼剑法</p>
          <p>墨师父夺舍， 韩立反夺舍， 了解到修仙者</p>
          <p>成为七玄门神医</p>
          <p>保护七玄门争斗中， 杀死侏儒修仙者， 拿到一个符宝和升天令</p>
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
      {/* <!--second section--> */}
      <div className="row align-items-center justify-content-end how-it-works">
        <div className="col-10 text-right">
          <p>
            去了城市
            <br />
            到了新城， 遇见了孙二狗
            <br />
            去了墨家， 并且杀死了墨家敌对帮派之一的门主
            <br />
            太南山交易大会
            <br />
            认识了涵云芝， 从那里买到了炼制符的工具
            <br />
            遇见了青颜真人等人， 选择分开行动， 被截杀反杀
            <br />
            进入黄枫谷
            <br />
            被小老头替孙子交换走了筑基丹， 但是赖了大部分交换的物品
            <br />
            来到百药园， 给马老头看着
            <br />
            非常有天赋的慕容兄弟被人揍， 找挡箭牌找到了韩立， 韩立躲开了， 被聂师妹教训了
            <br />
            卖了千年灵药， 买来了符宝等武器
            <br />
            晚上回来遇见陈巧倩， 被男朋友奸杀， 杀了男朋友， 抢了两颗筑基丹， 猥亵了陈巧倩
          </p>
        </div>
        <div className="col-2 text-center full">
          <div className="circle">2</div>
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
      {/* <!--third section--> */}
      <div className="row align-items-center how-it-works">
        <div className="col-2 text-center top">
          <div className="circle">3</div>
        </div>
        <div className="col-10">
          <p>
            血色试炼
            <br />
              救了涵云芝又一次
            <br />
              蛟的作用下， 和南宫婉做爱， 然后清醒做爱， 南宫婉这时候结丹， 韩立练气
            <br />
              拿到了很多草药， 李师叔为了草药， 收了弟子， 然后小老头还了欠着的草药
            <br />
              回来之后筑基成功
            <br />
            回来之后的交易会
            <br />
              遇见了齐云霄
              <br />
              遇见了傀儡， 得知大衍
              <br />
              遇见雷万鹤， 用千年灵药交换了药方
              <br />
              在李师叔那里得到了青元剑诀， 三重转元功
              <br />
            和董萱儿一起去燕氏夺宝大会
            <br />
              遇见了墨彩环（最小古怪精灵的）， 帮助解决了纠纷
              <br />
              鬼灵门和燕氏联手血迹， 韩立跑掉了
              <br />
            执行黄枫谷的任务
            <br />
              发现了白玉蜘蛛和古传送阵
              <br />
              陈俏倩得知韩立在与魔道的大战中杀人无数
              <br />
              认识了辛如音， 让她帮忙修复传送阵
              <br />
            去秦家帮忙保护
            <br />
              遇见了一个少女萧翠儿， 让给马老头当徒弟
              <br />
              去皇帝那里消灭了傀儡皇帝， 得到了煞丹
              <br />
            回来继续执行任务
            <br />
              到孙二狗那里灭掉了藏在曲魂体内的结丹人， 得知好多灵虫， 得知魔道即将大举进攻
              <br />
              为了给墨家报仇， 杀入五色门， 发现墨玉珠成了少夫人
              <br />
              齐云霄死了， 韩立答应给报仇
              <br />
              半路遇见了南宫婉， 救了下来， 拒绝了和另外女弟子双修， 拿了灵石传送走了 
              <br />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StoryTimeline2;
