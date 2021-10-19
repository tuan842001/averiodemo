import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="http://localhost/halotrip/view/images/tour/Hollywood-Walk-of-Fame_220247812.jpg"
        alt=""
      />
      <div className="postInfo">
        <span className="postPrice">7.555.000 VND</span>
        <br />
        <span className="postTitle">DU LỊCH HONG KONG</span>
      </div>
    </div>
  );
}
