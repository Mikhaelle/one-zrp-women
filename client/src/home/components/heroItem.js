import React from "react";
import "./heroItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const HeroItem = (props) => {
  
  return (
    
    <li className="hero-item">
      <Card className="hero-item__content">
        <Container>
          <Row>
            <Col>
              <div className="hero-item__image">
                <Avatar image={props.img} alt={props.name} />
              </div>
            </Col>
            <Col>
              <div className="hero-item__info">
                <h2>{props.name}</h2>
                <h2>Rank: {props.rank}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </li>
    
  );
};

export default HeroItem;
