import React from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <div className="card-space col-xs-12 col-sm-6 col-md-4">
        <div className="card">
          <Image src={require("../../images/mission.png")} alt="" responsive />
          <p className="card-title">Mission</p>
          <hr className="card-hr" />
          <p className="card-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p />
        </div>
      </div>
    </div>
  );
};
export default Card;
