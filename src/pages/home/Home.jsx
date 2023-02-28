import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured.chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Month's Revenue" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
