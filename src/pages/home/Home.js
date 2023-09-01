import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import DisplayTotal from "../../components/displaytotal/DisplayTotal";
import OrderWidget from "../../components/orderwidget/OrderWidget";
import MembersWidget from "../../components/memberwidget/MembersWidget";

function Home() {
  return (
    <div className="homeContainer">
      <Featured />
      <div className="chartAnalyticWidget">
        <Chart />
        <DisplayTotal />
      </div>
      <div className="orderAndMemberWidget">
        <OrderWidget />
        <MembersWidget />
      </div>
    </div>
  );
}

export default Home;
