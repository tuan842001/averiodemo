import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topImg" src="./assets/logoAveiroTravel.png" alt="" />
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">Trang Chủ</li>
          <li className="topListItem">Du lịch trong nước</li>
          <li className="topListItem">Du lịch nước ngoài</li>
          <li className="topListItem">Tin tức</li>
        </ul>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
