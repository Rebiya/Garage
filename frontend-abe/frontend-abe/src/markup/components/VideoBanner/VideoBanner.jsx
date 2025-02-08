import React from "react";
import bgImg from "../../../assets/images/custom/banner/banner.jpg";
import bgImgg from "../../../assets/images/banner2.jpg";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const VideoSection = ({ chooseUs }) => {
  return (
    <section className="video-section">
      <div
        data-parallax='{"y": 50}'
        className="sec-bg"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <div className="auto-container">
        <h5>Working since 1992</h5>
        {chooseUs ? (
          <h2>
            "Best Car <br />
            Service in Town"
          </h2>
        ) : (
          <h2>
            Tuneup Your Car <br /> to Next Level
          </h2>
        )}

        <div className="video-box">
          <div className="video-btn">
            <Link to="/">
              <IoIosPlay
                style={{ margin: "0 0 50px", paddingBottom: "10px" }}
                size={80}
              />
            </Link>
          </div>
          <div className="text">
            Watch intro video <br /> about us
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
