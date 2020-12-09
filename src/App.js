import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Employes from "./components/Employes/Employes";
import Date from './components/datepicker/datepicker';

export default function App() {
  const Employee = [
    {
      id: "1",
      name: 'one',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      selected: false
    },
    {
      id: "2",
      name: 'two',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      selected: false
    },
    {
      id: "3",
      name: 'three',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
      selected: false
    },
    {
      id: "4",
      name: 'four',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
      selected: false
    },
    {
      id: "5",
      name: 'five',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/mountain.png',
      selected: false
    },
    {
      id: "6",
      name: 'six',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
      selected: false
    }
  ]
  return (

    <Container>
      <Row>
        <Col>
          <h4> select employee dropdown</h4>
          <Employes data={Employee} />
          <h3>ready to test</h3>
        </Col>
        <Col>
          <h4> pick date2 dropdown</h4>
          <Date />
          <h3>ready to test</h3>
        </Col>
      </Row>
    </Container>
  );
}
