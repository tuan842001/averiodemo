import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerTitles">
          <span className="headerTitleSm">Thực hiện chuyến đi của bạn với</span>
          <span className="headerTitleLg">Aveiro Travel</span>
        </div>
        <img
          className="headerTitImg"
          src="./assets/images/elements.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
