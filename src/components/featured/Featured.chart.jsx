import {
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
  MoreVert,
} from "@mui/icons-material";
import React from "react";
import "./featured.chart.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={65} text={"65%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today.</p>
        <p className="amount">$320</p>
        <p className="desc">
          previous transactions processing, Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Today</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
