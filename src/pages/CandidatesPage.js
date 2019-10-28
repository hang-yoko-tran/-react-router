import React, { useEffect, useState } from "react";
import {
  Nav,
  Row,
  Col,
  Card,
  ListGroup,
  Container,
  ListGroupItem
} from "react-bootstrap";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const response = await fetch("http://localhost:3001/candidates");
    const data = await response.json();
    setCandidates(data);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const onDeleteCandidate = (id) => {
    const config = {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3001/candidates/${id}`, config);
    const newCandidates = candidates.filter(candidate => candidate.id !== id);
    setCandidates(newCandidates);
  };

  const renderCards = () => {
    return candidates.map(candidate => {
      return (
        <div>
              <Col col="3" key={candidate.id}>
                <Card className="card">
                  <Card.Img variant="top" src={candidate.photo_url} />
                  <Card.Body>
                    <Card.Title>
                      {candidate.first_name + " " + candidate.last_name}
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{candidate.email}</ListGroupItem>
                    <ListGroupItem>{candidate.company}</ListGroupItem>
                    <ListGroupItem>{candidate.job_title}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Nav.Link href={`/candidates/${candidate.id}`}>Edit</Nav.Link>
                    <Nav.Link
                      onClick={() => onDeleteCandidate(candidate.id)}
                      href="#"
                    >
                      Delete
                    </Nav.Link>
                  </Card.Body>
                </Card>
              </Col>
        </div>
      );
    });
  };

  return (
  <Container fluid>
    <Row>
  {renderCards()}
  </Row>
  </Container>
  );
}
