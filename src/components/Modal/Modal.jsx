import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  Image,
  Modal,
  Button
} from "react-bootstrap";
import "./Modal.css";

const ModalItem = props => {
  let image = "/assests/" + props.banner + ".png";
  return (
    <Modal show={props.open} onHide={props.close}>
      {/*<Image src={require('../images/'+props.banner+'.png')} alt='not loaded'  responsive/> */}
      <Image src={image} alt="not loaded" responsive />
      <Modal.Body>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-modal" onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalItem;
