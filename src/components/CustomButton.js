import React from "react";
import "../contactus.css";
function CustomButton(props) {
  return (
    <a className="btn_link" href={props.link}>
      <div className="copy_btn">
        <span className="icon">{props.icon}</span>
        {props.value}
      </div>
    </a>
  );
}

export default CustomButton;
