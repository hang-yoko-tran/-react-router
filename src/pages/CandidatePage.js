import React, { useEffect, useState } from "react";

import { Container, Row, Form, Button, InputGroup, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function CandidatePage() {
  const [candidate, setCandidate] = useState({});

  const { id } = useParams();
  console.log({ id });
  useEffect(() => {
    const getCandidate = async () => {
      const response = await fetch("http://localhost:3001/candidates/" + id);
      const data = await response.json();
      console.log([response, data]);
      setCandidate(data);
    };
    getCandidate();
  }, []);

  const [validated, setValidated] = useState(false);
  const handleSubmit = async e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(candidate)
    };
    const response = await fetch(
      "http://localhost:3001/candidates/" + id,
      config
    );
    console.log("response", response);
  };
  console.log("candidate!", candidate);

  return (
    <Container className="candidate-page">
      <Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                value={candidate.first_name}
                required
                type="text"
                onChange={e =>
                  setCandidate({ ...candidate, first_name: e.target.value })
                }
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a firstname
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                value={candidate.last_name}
                type="text"
                onChange={e =>
                  setCandidate({ ...candidate, last_name: e.target.value })
                }
                placeholder="Last name"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a lastname
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.email}
                  onChange={e =>
                    setCandidate({ ...candidate, email: e.target.value })
                  }
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Gender</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.gender}
                  onChange={e =>
                    setCandidate({ ...candidate, gender: e.target.value })
                  }
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a gender.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Company</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.company}
                  onChange={e =>
                    setCandidate({ ...candidate, company: e.target.value })
                  }
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a company.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Job Title</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.job_title}
                  onChange={e =>
                    setCandidate({ ...candidate, job_title: e.target.value })
                  }
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a job title.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>City</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.city}
                  onChange={e =>
                    setCandidate({ ...candidate, city: e.target.value })
                  }
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a city.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Country</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.country}
                  onChange={e =>
                    setCandidate({ ...candidate, country: e.target.value })
                  }
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a country.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Photo</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={candidate.photo_url}
                  onChange={(e) => setCandidate({ ...candidate, photo_url: e.target.value})}
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a photo.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group> */}

            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Photo</Form.Label>
              <InputGroup>
              <Form.Control
                  type="text"
                  value={candidate.photo_url}
                  onChange={(e) => setCandidate({ ...candidate, photo_url: e.target.value})}
                  placeholder="jod@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <img 
                  className="image-area"
                  src={candidate.photo_url}
                  onChange={e =>
                    setCandidate({ ...candidate, photo_url: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a photo.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row></Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Row>
    </Container>
  );
}
