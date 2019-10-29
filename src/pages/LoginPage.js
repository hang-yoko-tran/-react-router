import React, { useState } from "react";
import {
    Form, Col, Button, Row
} from "react-bootstrap"; 
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

export default function LoginPage() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  let history = useHistory()
  const handleSubmit = e => {
      e.preventDefault()
      dispatch({type: "LOGIN", payload:{email, password}})
      history.push("/homepage");
  }


    return (
    <div className="login-contain">
      <Form onSubmit ={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label className="label-name" column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label className="label-name" column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check className="remember-line" label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="btn-signin" type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
