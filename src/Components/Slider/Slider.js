import React from "react";
import "./slide.css";

function Slider() {
  return (
    <div id="slider">
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_960_720.jpg"
          className="intro-img"
        />
        <div style={{ position: "relative" }}>
          {/* <span
            >Easy To Modernize<br /> */}
          <span
            style={{ fontSize: "35px", color: "#fff", marginLeft: "78px" }}
            className="shiring"
          >
            Medical services that <br />
            config you to trust.
          </span>
          {/* <!-- </span> --> */}
        </div>

        {/* <!-- second image --> */}
        <div style={{ position: "relative" }}>
          <span className="set-heading">
            Entrust your health our doctors.
            <br />
            <span
              style={{ fontSize: "35px", color: "#fff", marginLeft: "78px" }}
              className="slide2 shiring"
            >
              The Hospital f the <br />
              Future, Today.
            </span>
          </span>
        </div>
        {/* <!-- image third --> */}

        <img
          src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-1.jpg"
          className="intro-img"
        />
        <div style={{ position: "relative" }}>
          <span className="set-heading">
            Easy To Understand
            <br />
            <span
              style={{ fontSize: "35px", color: "#fff", marginLeft: "78px" }}
              className="slide3 shiring"
            >
              Medical excellence every day
            </span>
          </span>
        </div>
        {/* <!-- imgage four --> */}
        <img
          src="https://cdn.pixabay.com/photo/2019/08/13/08/15/adult-4402808_960_720.jpg"
          className="intro-img"
        />
        <div style={{ position: "relative" }}>
          <span className="set-heading">
            User Freindly UI
            <br />
            <span
              style={{ fontSize: "35px", color: "#fff", marginLeft: "78px" }}
              className="slide4 shiring"
            >
              Exceptional people. <br />
              Exceptional care.
            </span>
          </span>
        </div>
        <img
          src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-2-1-1.jpg"
          className="intro-img"
        />
        {/* <!-- image five --> */}
        <img
          src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/1-1.jpg"
          className="intro-img"
        />
        <div style={{ position: "relative" }}>
          <span className="set-heading">
            Easy To Analays <br />
            <span
              style={{ fontSize: "28px", color: "#fff", marginLeft: "78px" }}
              className="last shiring"
            >
              Healthcare just for kids.
              <br />
              saving children.
            </span>
          </span>
        </div>
      </figure>
    </div>
  );
}

export default Slider;
