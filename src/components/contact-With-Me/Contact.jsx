import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Row>
          <Col md="12">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h3">Get in Touch</Typography>
                <Form onSubmit={handleSubmit}>
                  <Row className="mt-3">
                    <Col md="4" sm="12">
                      <Form.Group>
                        <Form.Control type="text" placeholder="Your name" required/>
                      </Form.Group>
                    </Col>
                    <Col md="4" sm="12">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Your email" required/>
                      </Form.Group>
                    </Col>
                    <Col md="4" sm="12">
                      <Form.Group>
                        <Form.Control type="number" placeholder="Your phone" required/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-3">
                    <Form.Control as="textarea" rows={3} placeholder="Message" required/>
                  </Form.Group>
                  <Button type="submit" variant="contained" color="primary"> Send Message </Button>
                </Form>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
