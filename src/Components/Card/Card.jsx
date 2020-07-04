import React from "react";
import "./card.styles.css";
import "./card-list.styles.css";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const CardList = (props) => {
  return props.employees.map((emp) => {
    return (
      <div key={emp.id}>
        <Card className="card-container">
          <CardImg src={emp.picture} alt={emp.name} className="profile-pic" />
          <CardBody>
            <CardTitle>{emp.name}</CardTitle>
            <CardText>{emp.department}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
};

export default CardList;
